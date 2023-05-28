import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../lib/store';
import { sgidClient } from '../../../lib/sgidClient';
import { getCookie, setCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // Retrieve the authorization code from query params
  const { searchParams } = new URL(req.url);
  const state = searchParams.get('state');
  let code = searchParams.get('code');

  // Retrieve the session ID from browser cookies
  const sessionId = cookies().get('sessionId')?.value;

  // Validating that the sessionID, contents in session, and auth code is present
  if (typeof sessionId !== 'string') {
    return NextResponse.json(
      { message: 'Session ID not found in browser cookies' },
      { status: 401 }
    );
  } else if (!code) {
    return NextResponse.json(
      { message: 'Authorization code not found in query params' },
      { status: 400 }
    );
  }
  code = String(code);

  const session = store.get(sessionId);

  if (!session) {
    return NextResponse.json({ message: 'Session not found' }, { status: 401 });
  } else if (state && state !== session.state) {
    return NextResponse.json(
      { message: 'State does not match' },
      { status: 400 }
    );
  }

  const { nonce, codeVerifier } = session;

  if (!codeVerifier || typeof codeVerifier !== 'string') {
    return NextResponse.json(
      { message: 'Code verifier not found' },
      { status: 400 }
    );
  }

  // Exchange the auth code for the access token
  // At the end of this function, users are considered logged in by the sgID server
  const { accessToken, sub } = await sgidClient.callback({
    code,
    nonce,
    codeVerifier,
  });

  // Store the access token and sub
  const updatedSession = {
    ...session,
    accessToken,
    sub,
  };
  store.set(sessionId, updatedSession);

  return NextResponse.redirect(new URL('/logged-in', req.url));
}
