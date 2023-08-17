import { useEffect, useState } from "react";

interface ProductBoxProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: string;
  };
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "기본 홈페이지 제작 패키지",
    description:
      "5개의 기본 페이지를 포함한 홈페이지 제작 서비스입니다. 모바일 반응형으로 최적화되어 모든 디바이스에서 호환성을 제공합니다.",
    price: "25만원 ~",
  },
  {
    id: 2,
    title: "비즈니스 프리미엄 패키지",
    description:
      "10개의 개별 페이지, 사용자 지정 UI/UX 디자인, 기본 SEO 최적화를 포함한 종합 홈페이지 제작 서비스입니다. 기업이나 브랜드의 이미지를 높여줄 전문적인 웹사이트를 제공합니다.",
    price: "50만원 ~",
  },
  {
    id: 3,
    title: "e-커머스 웹사이트 패키지",
    description:
      "온라인 상점 기능을 포함한 웹사이트 제작 서비스입니다. 상품 등록, 장바구니, 결제 시스템 등의 필수 기능을 갖춘 완벽한 온라인 쇼핑 경험을 제공합니다.",
    price: "120만원 ~",
  },
];

const ProductBox: React.FC<ProductBoxProps> = ({
  product: { id, title, description, price },
}) => {
  const [addClass, setAddClass] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAddClass(true);
    }, id * 200);

    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  return (
    <div
      className={`w-1/2 h-64 flex flex-col gap-3 p-10 rounded-xl shadow-md bg-gray-100 product_box justify-between overflow-hidden ${
        addClass ? "move_left" : ""
      }
        `}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold -tracking-tighter">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <p className="text-sm">{price}</p>
    </div>
  );
};

export const MiddleSection: React.FC = () => {
  return (
    <div className="w-1200">
      <div className="flex justify-between px-10 py-4 gap-5 mt-8">
        {products.map((product) => {
          return <ProductBox key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
