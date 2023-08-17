import Image from "next/image";

export const MiddleBanner: React.FC = () => {
  const bannerImage = "/copy01.png";
  const bannerTitle = "홈페이지 할인";
  const bannerDescription = "최대 50% 할인";
  const bannerDate = "할인기간 : 2023.08.01 ~ 2023.08.31";

  return (
    <div className="mx-10 h-80 mt-8 overflow-hidden rounded-lg relative flex justify-center items-center w-1200">
      <Image
        className="rounded-lg object-contain"
        fill
        src={bannerImage}
        alt={bannerTitle}
        sizes="100%"
      />
      <div className="absolute text-white text-3xl font-bold tracking-tighter p-10 text-center">
        <p className="text-5xl">{bannerTitle}</p>
        <p className="text-3xl">{bannerDescription}</p>
        <p className="text-lg" style={{ opacity: 0.7 }}>
          {bannerDate}
        </p>
      </div>
    </div>
  );
};
