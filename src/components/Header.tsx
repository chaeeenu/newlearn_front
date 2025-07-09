'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { useUserStore } from '@/store/useUserStore';

const categories = ['개발', '디자인', '데이터', 'AI', '마케팅', '자기계발'];

export default function Header() {
  const nickname = useUserStore((state) => state.nickname);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('nickname');
    window.location.href = '/';
  };

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between gap-6 w-full relative">
        {/* 좌측: 로고 + 둘러보기 */}
        <div className="flex items-center gap-4 min-w-[180px] relative group">
          <Link href="/" className="text-xl font-bold text-black">
            newlearn
          </Link>

          {/* 둘러보기 버튼 */}
          <div
            className="flex items-center gap-1 cursor-pointer text-zinc-900 hover:text-purple-600 relative"
            onMouseEnter={() => setIsBrowseOpen(true)}
            onMouseLeave={() => setIsBrowseOpen(false)}
          >
            <span className="text-sm font-medium">둘러보기</span>
            <ChevronDown size={16} />

            {/* 🔍 마우스 통로: invisible bridge */}
            <div className="absolute top-full left-0 w-full h-2" />

            {/* 드롭다운 메뉴 */}
            {isBrowseOpen && (
              <div className="absolute top-full mt-2 left-0 w-40 bg-white border rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* 중앙: 검색창 */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="무엇이든 검색하기"
            className="w-full max-w-[1000px] px-4 py-2 border rounded-md text-sm text-zinc-800 focus:outline-none"
          />
        </div>

        {/* 우측: 메뉴 */}
        <div className="flex items-center gap-3 text-sm whitespace-nowrap min-w-[200px] justify-end">
          <Link href="/business" className="text-zinc-800 hover:underline">
            비즈니스용
          </Link>
          {nickname ? (
            <div
              className="relative"
              onMouseEnter={() => setIsUserMenuOpen(true)}
              onMouseLeave={() => setIsUserMenuOpen(false)}
            >
              {/* 닉네임 */}
              <div className="flex items-center gap-1 cursor-pointer font-medium text-zinc-800 hover:text-purple-600">
                {nickname}님
                <ChevronDown size={16} />
              </div>

              {/* 마우스 통로 zone */}
              <div className="absolute top-full left-0 w-full h-2" />

              {/* 드롭다운 */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white text-zinc-800 border rounded shadow z-50">
                  <ul className="py-2">
                    <li>
                      <Link
                        href="/mypage"
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        마이페이지
                      </Link>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
                      <LogOut className="inline-block mr-2 w-4 h-4" />
                      로그아웃
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="px-3 py-1 border rounded text-zinc-800 hover:bg-gray-100"
              >
                로그인
              </Link>
              <Link
                href="/signup"
                className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                가입하기
              </Link>
            </>
          )}
          <button
            className="p-2 rounded  text-zinc-800 hover:bg-gray-100 transition"
            aria-label="언어 설정"
          >
            <Globe size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
