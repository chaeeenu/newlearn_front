'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white px-6 sm:px-10 pb-20">
      {/* Hero Section */}
      <section className="flex flex-col-reverse sm:flex-row items-center justify-between py-12 gap-10">
        <div className="flex-1 space-y-4 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900">
            당신만을 위한 학습 여정,
            <br />
            <span className="text-purple-600">newlearn</span>에서 시작하세요
          </h1>
          <p className="text-zinc-800 text-sm sm:text-base">
            원하는 주제를 자유롭게 배우고 성장하세요. 실무 중심의 강의를 직접
            경험해보세요.
          </p>
          <div className="mt-4 flex justify-center sm:justify-start">
            <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
              강의 보러 가기
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/images/hero-illustration.png"
            alt="Hero Image"
            width={500}
            height={400}
            className="mx-auto sm:mx-0"
          />
        </div>
      </section>

      {/* 카테고리 */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-zinc-900">
          인기 카테고리
        </h2>
        <div className="flex flex-wrap gap-3">
          {['개발', '디자인', '데이터', 'AI', '마케팅', '자기계발'].map(
            (cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 bg-white border rounded-full text-sm hover:bg-gray-100 text-zinc-800 transition"
              >
                {cat}
              </button>
            ),
          )}
        </div>
      </section>

      {/* 추천 강의 */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-zinc-900">추천 강의</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <Image
                src={`/images/course${i}.jpg`}
                alt={`강의 ${i}`}
                width={400}
                height={200}
                className="rounded-md mb-3"
              />
              <h3 className="font-semibold text-zinc-900 text-sm mb-1">
                강의 제목 {i}
              </h3>
              <p className="text-xs text-zinc-700">강사명 · 수강생 수</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
