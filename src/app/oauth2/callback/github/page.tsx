// app/oauth2/callback/github/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/store/useUserStore';

export default function GithubCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setNickname = useUserStore((state) => state.setNickname);

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const login = searchParams.get('login');

    if (accessToken && login) {
      localStorage.setItem('accessToken', decodeURIComponent(accessToken));
      localStorage.setItem('login', decodeURIComponent(login));
      setNickname(decodeURIComponent(login));
      router.replace('/');
    } else {
      alert('GitHub 로그인 실패');
      router.replace('/login');
    }
  }, [router, searchParams, setNickname]);

  return <p className="text-center mt-10">GitHub 로그인 처리 중...</p>;
}
