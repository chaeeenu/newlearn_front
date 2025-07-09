'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 처리 로직
    console.log('로그인 시도:', email, password);
  };

  const handleSocialLogin = async (provider: 'kakao' | 'github') => {
    // 소셜 로그인 처리 로직
    if (provider === 'kakao') {
      try {
        const res = await fetch(
          'https://localhost:9014/api/oauth2/kakao/login-url',
        );
        if (!res.ok) throw new Error('카카오 로그인 URL 요청 실패');

        const data = await res.json();
        const loginUrl = data.loginUrl;

        window.location.href = loginUrl;
      } catch (error) {
        console.error('카카오 로그인 요청 중 오류 : ', error);
        alert('카카오 로그인에 실패했습니다.');
      }
    } else if (provider === 'github') {
      try {
        const res = await fetch(
          'https://localhost:9014/api/oauth2/github/login-url',
        );
        if (!res.ok) throw new Error('GitHub 로그인 URL 요청 실패');

        const data = await res.json();
        const loginUrl = data.loginUrl;

        window.location.href = loginUrl;
      } catch (error) {
        console.error('GitHub 로그인 요청 중 오류 : ', error);
        alert('GitHub 로그인에 실패했습니다.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">로그인</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            로그인
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm text-gray-500">
            <span className="bg-white px-2">또는 소셜 계정으로 로그인</span>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <button
            type="button"
            onClick={() => handleSocialLogin('kakao')}
            className="w-full bg-[#FEE500] text-[#3C1E1E] font-medium py-2 px-4 rounded-lg hover:brightness-95 transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="#3C1E1E"
            >
              <path d="M12 3C6.48 3 2 6.94 2 11.5c0 2.6 1.68 4.9 4.25 6.38L5.5 21l3.86-2.04c.85.13 1.72.21 2.64.21 5.52 0 10-3.94 10-8.5S17.52 3 12 3z" />
            </svg>
            <span>카카오로 로그인</span>
          </button>

          <button
            onClick={() => handleSocialLogin('github')}
            className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition cursor-pointer"
          >
            <Github className="w-5 h-5" />
            GitHub 로그인
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          계정이 없으신가요?{' '}
          <Link
            href="/signup"
            className="text-black font-semibold hover:underline"
          >
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
