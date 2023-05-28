import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../lib/store';
import { sgidClient } from '../../../lib/sgidClient';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // Retrieve the session ID from browser cookies

  const sessionId = cookies().get('sessionId')?.value;

  if (typeof sessionId !== 'string') {
    return NextResponse.json(
      { message: 'Session ID not found in browser cookies' },
      { status: 401 }
    );
  }

  // Retrieve the access token from memory using the session ID
  const session = store.get(sessionId);

  if (!session) {
    return NextResponse.json({ message: 'Session not found' }, { status: 401 });
  }
  const { accessToken, sub } = session;

  if (!accessToken || typeof accessToken !== 'string') {
    return NextResponse.json(
      { message: 'Access token not in session' },
      { status: 400 }
    );
  } else if (!sub || typeof sub !== 'string') {
    return NextResponse.json(
      { message: 'Sub not in session' },
      { status: 400 }
    );
  }

  // Request user info using the access token
  const { data } = await sgidClient.userinfo({ accessToken, sub });

  // Store user info in the in-memory store
  const updatedSession = {
    ...session,
    userInfo: data,
  };
  store.set(sessionId, updatedSession);

  const { accessToken: _, nonce: __, ...dataToReturn } = updatedSession;

  // Return the user info
  return NextResponse.json(dataToReturn);
}
