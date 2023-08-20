import { TopTitle } from "@/components/TopTitle";
import { Nav } from "@/components/main/Nav";
import { useRouter } from "next/router";
import { products } from "@/data/products";
import { useEffect, useState } from "react";
import { Footer } from "@/components/main/Footer";
import Image from "next/image";

export default function Payment() {
  const inputList = [
    { label: "성함", type: "text", required: true },
    { label: "회사명", type: "text", required: false },
    { label: "이메일", type: "text", required: true },
    { label: "연락처", type: "text", required: true },
    { label: "주소", type: "text", required: true },
    { label: "우편번호", type: "text", required: false },
    { label: "상세주소", type: "text", required: false },
  ];

  const router = useRouter();
  const { product } = router.query;
  const [productItem, setProductItem] = useState<any>(null);

  useEffect(() => {
    const productItem = products.find(
      (productItem: any) => productItem.id === Number(product)
    );
    if (!productItem) {
      router.push("/404");
    }
    setProductItem(productItem);
  }, [router, product]);

  if (!product) return null;

  if (!productItem) return null;
  return (
    <>
      <Nav />
      <TopTitle title="결제하기" />
      {/* 결제 입력창 */}
      <div className="w-1200">
        <h2 className="text-2xl font-bold mb-4 mt-8">청구 정보</h2>
        <div className="flex gap-24">
          <div className="flex-1">
            {inputList.map((input, index) => (
              <PaymentInput
                key={index}
                label={input.label}
                type={input.type}
                required={input.required}
              />
            ))}

            <p className="text-gray-400">주문 메모</p>
            <textarea
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              rows={5}
            />
          </div>
          {/* 상품정보 */}
          <div className="flex-1 border border-dashed flex flex-col">
            <div className="p-4">
              <div>
                <p className="text-gray-400">상품명</p>
                <p className="text-xl font-bold">{productItem.title}</p>
              </div>
              <Image
                src={productItem.src}
                alt={productItem.title}
                width={200}
                height={200}
              />
            </div>
            <div className="p-4">
              <p className="text-gray-400">가격</p>
              <p className="text-xl font-bold text-red-600">250,000원</p>
            </div>
            <div className="p-4">
              <p className="text-gray-400 mb-2">결제 수단</p>
              <div className="flex gap-4">
                {/* 결제 수단 무통장 입금 카드결제 */}
                <div className="flex-1 border border-gray-300 rounded-md px-4 py-2 cursor-pointer">
                  <p className="text-lg font-bold">무통장 입금</p>
                  <p className="text-gray-400 mt-2">
                    성함과 입금자명이 일치해야 결제가 완료됩니다.
                  </p>
                </div>
                <div className="flex-1 border border-gray-300 rounded-md px-4 py-2 cursor-pointer">
                  <p className="text-lg font-bold">카드 결제</p>
                  <p className="text-gray-400 mt-2">
                    신한카드 무이자 3개월 할부 가능
                  </p>
                </div>
              </div>
            </div>
            {/* 개인 데이터는 주문을 처리하고, 이 웹사이트 전체에서 사용자 환경을 지원하며, 개인정보 보호정책에 설명한 기타 목적을 이행하는 데 사용됩니다. */}
            <div className="p-4">
              <p className="mb-2 text-blue-500 text-lg">개인정보 처리방침</p>
              <div className="flex gap-4">
                <div className="flex-1 border-gray-300 rounded-md">
                  <p className="text-gray-400 mt-2">
                    개인 데이터는 주문을 처리하고, 이 웹사이트 전체에서 사용자
                    환경을 지원하며, 개인정보 처리방침에 설명한 기타 목적을
                    이행하는 데 사용됩니다. 개인정보는 주문처리 이외에 다른
                    목적으로 사용되지 않습니다.
                    <br />
                    <span className="text-red-600 font-bold">
                      수집항목 : 성함, 회사명, 이메일, 연락처, 주소
                      <br /> 수집목적 : 주문처리, 배송, 환불
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* 주문에 필요한 개인정보 활용에 동의 합니다. check */}
            <div className="p-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-600">
                  주문에 필요한 개인정보 활용에 동의 합니다.
                  <span className="text-red-600">(필수)</span>
                </span>
              </label>
            </div>
            <div className="flex flex-col mt-auto p-5">
              <button className="bg-red-600 text-white text-lg font-bold mt-auto flex justify-center items-center h-12 rounded-md">
                주문 확정
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12" />
      <Footer />
    </>
  );
}

// payment 입력창 컴포넌트
const PaymentInput = ({ label, type, required }: any) => {
  return (
    <div>
      <p className="text-gray-400">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </p>
      <input
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        type={type}
        placeholder={required ? "필수 입력" : "선택 입력"}
      />
    </div>
  );
};
