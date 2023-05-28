import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { store } from '../../../lib/store';
import { sgidClient } from '../../../lib/sgidClient';
import { generatePkcePair } from '@opengovsg/sgid-client';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const state = String(searchParams.get('state'));

  // Generate a session ID
  const sessionId = uuidv4();

  // Generate a PKCE pair
  const { codeChallenge, codeVerifier } = generatePkcePair();

  // Generate an authorization URL
  const { url, nonce } = sgidClient.authorizationUrl({
    state,
    codeChallenge,
  });

  // Store the code verifier, state, and nonce
  store.set(sessionId, { state, nonce, codeVerifier });

  // Set the sessionID in the browser's cookies
  cookies().set({
    name: 'sessionId',
    value: sessionId,
  });
  // setCookie('sessionId', sessionId, { req, res });

  // Redirect the browser to the authorization URL
  return NextResponse.redirect(url);
}
