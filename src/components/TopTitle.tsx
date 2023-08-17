import Image from "next/image";

interface TitleImageProps {
  title: string;
}

//상단 타이틀 이미지 컴포넌트
export const TopTitle = ({ title }: TitleImageProps) => {
  return (
    <div className="flex justify-center items-center bg-black h-40 relative">
      <Image
        className="object-cover opacity-50"
        src="https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg"
        fill
        sizes="100%"
        alt={title}
        priority
      />

      <p className="absolute font-bold text-4xl px-10 py-5 rounded-md text-white">
        {title}
      </p>
    </div>
  );
};
