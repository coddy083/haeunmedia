import Image from "next/image";
import { useEffect, useRef } from "react";

interface ProductDescriptionProps {
  title: string;
  description: string;
  image: string;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  title,
  description,
  image,
}) => {
  // 옵저버 ref
  const ref = useRef<HTMLDivElement>(null);

  // 옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log target
            //entry target 밑에 모든 이미지 태그를 가져온다
            const images = entry.target.querySelectorAll("img");
            // 모든 이미지 태그에 scale 클래스를 적용한다
            images.forEach((image) => {
              image.classList.add("scale");
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="flex border-gray-200 border-b-2 py-11 gap-5">
      <div className="w-full flex-1 flex justify-center items-center relative h-96 opacity-70">
        <Image
          className="rounded-2xl"
          src={image}
          fill
          alt={title}
          sizes="100%"
        />
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold -tracking-tighter">{title}</h2>
        <p className="text-sm text-gray-400 text-center">{description}</p>
      </div>
    </div>
  );
};
