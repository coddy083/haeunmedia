import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { Nav } from "@/components/main/Nav";
import Image from "next/image";
import { Footer } from "@/components/main/Footer";
import Link from "next/link";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [productItem, setProductItem] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const product = products.find(
        (product: any) => product.id === Number(id)
      );
      if (!product) {
        router.push("/404");
      }
      setProductItem(product);
    }
  }, [router, id]);

  if (!productItem) return null;

  return (
    <>
      <Nav />
      <div className="w-1200 py-12 px-12 flex gap-10">
        <div className="flex-1 justify-center">
          <div>
            <Image
              src={productItem.src}
              alt={productItem.title}
              width={500}
              height={300}
              className="w-full"
            />
          </div>
          <Link
            className="w-full h-12 bg-black text-white text-xl font-bold mt-3 flex justify-center items-center"
            href={productItem.link}
          >
            데모 보기
          </Link>
        </div>
        <div className="flex-1 flex-col flex">
          <h1 className="text-4xl font-bold mb-4">{productItem.title}</h1>
          <p className="text-xl mb-4 text-gray-400">기본 홈페이지 템플릿</p>
          <div className="border p-4 mb-4 flex flex-col text-sm text-gray-700">
            <p>페이지 수 : 5</p>
            <p>반응형 : O</p>
            <p>디자인 : X</p>
            <p>퍼블리싱 : X</p>
            <p>디자인은 예시 템플릿이며, 결제후 고객센터로 문의해주세요.</p>
          </div>
          <div className="flex flex-col items-end h-full">
            <p className="text-4xl font-bold text-red-600">250,000원</p>
            <button className="w-full h-12 bg-red-600 text-white text-xl font-bold mt-auto">
              구매하기
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-b p-12">
        <div className="w-1200">
          <h2 className="text-2xl font-bold mb-4">주의 사항 안내</h2>
          <ul>
            <li className="text-gray-400">
              기본 디자인의 제작은 7일 이내로 예상됩니다. 복잡한 요청에 따라
              제작 기간이 연장될 수 있습니다.
            </li>
            <li className="text-gray-400">
              표준 제공 범위를 초과하는 특별한 커스터마이징 요청 시 추가 비용이
              발생할 수 있습니다.
            </li>
            <li className="text-gray-400">
              고객은 로고, 텍스트, 이미지 등 필요한 자료를 제공해야 합니다.
              제공되지 않은 자료에 따른 지연은 책임지지 않습니다.
            </li>
            <li className="text-gray-400">
              최종 승인 전 2회의 수정이 가능합니다. 이후 추가 수정 요청은 별도의
              비용이 발생합니다.
            </li>

            <li className="text-gray-400">
              제작 완료 후 1개월 동안 무료 유지보수가 제공됩니다. 추가 지원이
              필요한 경우 별도의 비용이 발생할 수 있습니다.
            </li>
            <li className="text-gray-400">
              본 상품의 가격에는 호스팅과 도메인 비용이 포함되어 있지 않습니다.
              필요한 경우 별도로 구매하셔야 합니다.
            </li>
            <li className="text-gray-400">
              일부 기능 구현을 위해 제3자 플러그인 또는 서비스의 이용이 필요할
              수 있습니다. 이에 따른 추가 비용이 발생할 수 있습니다.
            </li>
            <li className="text-gray-400">
              모든 제작 컨텐츠는 저작권에 위배되지 않아야 합니다. 저작권 침해에
              따른 문제는 고객의 책임입니다.
            </li>
            <li className="text-gray-400">
              정기적인 백업은 제공되지 않습니다. 필요한 백업은 고객의 책임으로
              진행하셔야 합니다.
            </li>
            <li className="text-gray-400">
              모든 작업 비용은 선불도 결제후 진행됩니다.
            </li>
            <li className="text-gray-400">
              제작 시작 후 취소 시 선불금은 반환되지 않습니다. 제작 중인 상품에
              대한 환불 요청은 접수하지 않습니다.
            </li>
            <li className="text-gray-400">
              본 상품과 관련된 기타 문의사항은 고객센터로 문의해주세요.
            </li>
          </ul>
          <h2 className="mt-12 text-2xl font-bold mb-4">환불 안내</h2>
          <ul>
            <li className="text-gray-400">
              제작 시작 전에는 전액 환불이 가능합니다.
            </li>
            <li className="text-gray-400">
              제작중 고객 변심으로 인한 환불은 불가능합니다.
            </li>
            <li className="text-gray-400">
              약정된 제작 기간을 초과하여 웹사이트가 완성되지 않을 경우, 제작자
              협의하에 환불이 가능합니다.
            </li>
            <li className="text-gray-400">
              특정 서비스나 기능 추가 요청 후 취소하는 경우, 이미 발생한 작업
              비용을 제외한 금액만 환불됩니다.
            </li>
            <li className="text-gray-400">
              환불 요청을 접수한 후, 환불 사유를 확인하고 7영업일 이내에 환불
              처리됩니다.
            </li>
            <li className="text-gray-400">
              환불은 결제하신 방법과 동일한 방법으로 처리됩니다. (예: 카드 결제
              시, 해당 카드로 환불)
            </li>
            <li className="text-gray-400">
              환불 시 수수료가 발생된다면, 수수료를 고객이 부담합니다.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
