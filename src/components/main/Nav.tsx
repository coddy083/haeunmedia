import Link from "next/link";
import { SearchBar } from "./SearchBar";

export const Nav: React.FC = () => {
  return (
    <div className="w-1200">
      <div className="flex justify-between items-center px-10 py-4">
        <Link className="logo text-3xl font-bold -tracking-tighter" href="/">
          하은미디어
        </Link>
        <SearchBar />
        <div className="flex gap-2">
          <span className="text-gray-400 cursor-pointer text-sm">Login</span>
          <span className="text-gray-400 cursor-pointer text-sm">Join</span>
        </div>
      </div>
      <ul className="flex justify-between px-10 py-4 poor-story">
        <li className="hover:text-red-500 text-sm hover:underline transition-all">
          <Link href="/company">회사 소개</Link>
        </li>
        <li className="hover:text-red-500 text-sm hover:underline transition-all">
          <Link href="/products">상품</Link>
        </li>
        <li className="hover:text-red-500 text-sm hover:underline transition-all">
          <a href="#">이벤트</a>
        </li>
        <li className="hover:text-red-500 text-sm hover:underline transition-all">
          <a href="#">리뷰</a>
        </li>
        <li className="hover:text-red-500 text-sm hover:underline transition-all">
          <a href="#">고객센터</a>
        </li>
        <li className="hover:text-red-500 text-sm hover:underline transition-all">
          <a href="#">공지사항</a>
        </li>
      </ul>
    </div>
  );
};
