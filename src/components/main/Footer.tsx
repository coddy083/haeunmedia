import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-between bg-black">
      <div className="text-white px-12 py-5 flex flex-col">
        <p
          className="
          text-3xl font-bold -tracking-tighter logo mb-3"
        >
          하은미디어
        </p>
        <p className="text-sm">사업자 번호 638-15-00624</p>
        <p className="text-sm">대표 : 이민기</p>
        <p className="text-sm">
          주소 : 서울시 강서구 등촌동 비원오피스텔 1501호
        </p>
        <p className="text-sm">전화번호 : 010-2747-8212</p>
        <p className="text-sm">이메일 : psjlmk@gmail.com</p>
        <div className="flex mt-2 text-lg">
          <Link className="pr-4" href="#">
            개인정보처리방침
          </Link>
          <Link className="pr-4" href="#">
            이용약관
          </Link>
        </div>
      </div>
      <div className="text-white mt-auto">
        {/* 맨위로가는 버튼 */}
        <div
          onClick={handleScrollToTop}
          className="flex justify-center items-center h-20 w-20 bg-red-500 hover:bg-red-600 cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowUp} width={40} height={40} />
        </div>
      </div>
    </div>
  );
};
