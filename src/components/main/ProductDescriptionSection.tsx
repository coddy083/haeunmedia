import { ProductDescription } from "./ProductDescription";

export const ProductDescriptionSection: React.FC = () => {
  return (
    <div className="px-10 mt-10 bg-gray-100 py-5">
      <div className="w-1200">
        <ProductDescription
          title="호스팅비 무료 지원"
          description="호스팅비를 최대 1년간 무료로 지원해드립니다."
          image="https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png"
        />

        <ProductDescription
          title="홈페이지 1년 무료 유지보수"
          description="홈페이지 제작 후 1년간 무료로 유지보수를 해드립니다."
          image="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_1280.jpg"
        />

        <ProductDescription
          title="디자인비 무료 지원"
          description="전문가 디자이너가 제작하는 디자인비를 무료로 지원해드립니다. (프리미엄 패키지 이상)"
          image="https://cdn.pixabay.com/photo/2016/09/08/17/46/user-interface-1655006_1280.png"
        />
      </div>
    </div>
  );
};
