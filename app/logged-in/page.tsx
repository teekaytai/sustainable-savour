'use client';
import { useEffect, useState } from 'react';
import useUserInfo from '../auth/useUserInfo';

type UserInfoRes = {
  sub?: string;
  userInfo?: Record<string, string>;
  state?: string;
};

const LoggedIn = () => {
  const { data, isLoading, error } = useUserInfo();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{`Error: ${error}`}</div>;
  }

  return (
    <div>
      <div>User Info</div>

      {data?.sub ? <div>{`sgID: ${data.sub}`}</div> : null}
      {Object.entries(data?.userInfo ?? {}).map(([field, value]) => (
        <div key={field}>{`${field}: ${value}`}</div>
      ))}
    </div>
  );
};

export default LoggedIn;
