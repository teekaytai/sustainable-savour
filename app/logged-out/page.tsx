'use client';
import { Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Link prefetch={false} href={`/auth/auth-url`}>
        <Button>Login with Singpass app</Button>
      </Link>
    </div>
  );
};

export default Home;
