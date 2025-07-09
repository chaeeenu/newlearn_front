import {
  Info,
  HelpCircle,
  Briefcase,
  Youtube,
  Instagram,
  Twitter,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-sm text-gray-600 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h4 className="flex items-center font-semibold mb-3 gap-2">
            <Info size={16} />
            newlearn
          </h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                회사 소개
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                채용 정보
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                블로그
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="flex items-center font-semibold mb-3 gap-2">
            <HelpCircle size={16} />
            지원
          </h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                고객센터
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                이용 약관
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="flex items-center font-semibold mb-3 gap-2">
            <Briefcase size={16} />
            서비스
          </h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                강의 등록
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                수강 신청
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                파트너십
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">SNS</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="YouTube" className="hover:text-black">
              <Youtube size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-black">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-black">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
