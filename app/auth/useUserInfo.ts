import { useState, useEffect } from "react";

type UserInfoRes = {
  sub?: string;
  userInfo?: Record<string, string>;
  state?: string;
};

export default function useUserInfo() {
  const [data, setData] = useState<UserInfoRes | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/auth/userinfo', { credentials: 'include' });
        const data = (await res.json()) as UserInfoRes;
        setData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    };
    getUserInfo();
  }, []);


  return {
    data,
    isLoading,
    error,
    isLoggedIn: !isLoading && data?.userInfo !== undefined
  }
}