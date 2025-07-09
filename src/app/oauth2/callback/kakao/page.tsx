'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/store/useUserStore';

export default function KakaoCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setNickname = useUserStore((state) => state.setNickname);

  useEffect(() => {
    const token = searchParams.get('token');
    const nickname = searchParams.get('nickname');

    if (token && nickname) {
      localStorage.setItem('accessToken', decodeURIComponent(token));
      localStorage.setItem('nickname', decodeURIComponent(nickname));
      setNickname(decodeURIComponent(nickname));

      // 홈으로 리다이렉트
      router.replace('/');
    } else {
      alert('카카오 로그인에 실패했습니다.');
      router.replace('/login');
    }
  }, [searchParams, router]);

  return null; // 화면에 아무것도 표시하지 않음
}
