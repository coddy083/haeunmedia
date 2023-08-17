import { TopTitle } from "@/components/TopTitle";
import { Footer } from "@/components/main/Footer";
import { Nav } from "@/components/main/Nav";
import Image from "next/image";

export default function Company() {
  return (
    <>
      <Nav />
      <TopTitle title="회사소개" />
      <div className="flex jusify-between items-center w-1200 py-2">
        <div className="flex-1">
          <Image
            className="rounded-2xl"
            src="https://cdn.pixabay.com/photo/2018/03/03/06/26/girl-3194977_1280.jpg"
            width={500}
            height={500}
            alt="회사소개"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4 text-base p-10">
            <p className="text-lg font-bold">
              하은미디어는 2019년 12월에 설립된, 홈페이지 제작 전문 기업입니다.
            </p>
            <p>
              짧지 않은 시간 동안 다양한 업체와 협업하여 홈페이지를 제작하며,
              디지털 시대의 중심에서 고객의 비즈니스를 성장시키는데 이바지하고
              있습니다.
              {`하은미디어는 '항상 고객을 생각하고 최선을 다한다' 는 기업의 목표
              아래, 각 프로젝트의 시작부터 종료까지 고객과의 소통을 철저히
              유지합니다.`}
            </p>
            <p>
              이를 통해 고객의 요구와 비전을 정확히 이해하고, 그에 맞는 맞춤형
              홈페이지를 제작하게 됩니다. 저희의 전문 개발팀은 최신 웹 기술 및
              트렌드에 늘 민감하게 반응하며, 각각의 프로젝트에 적합한 디자인과
              기능을 구현해냅니다.
            </p>
            <p>
              또한, 사용자 경험(UX)와 사용자 인터페이스(UI)에 대한 깊은 이해를
              바탕으로, 방문자들이 편안하게 사이트를 탐색할 수 있도록
              구축합니다. 하지만 하은미디어는 단순히 {`'웹사이트 제작'`} 에만
              그치지 않습니다. 고객의 사업 성장을 함께 생각하며, 홈페이지 운영
              및 관리, 마케팅 전략 등 다양한 디지털 솔루션을 제안합니다.
            </p>
            <p>
              이를 통해 고객의 비즈니스가 지속적으로 발전하고 확장될 수 있도록
              지원합니다. 결론적으로, 하은미디어는 단순히 홈페이지를 만드는 것이
              아닌, 고객의 파트너로서 함께 성장하고자 하는 의지를 갖고 있습니다.
              항상 고객의 입장에서 생각하고, 고객의 성공이 저희의 성공이라는
              믿음 아래, 최선을 다하는 서비스를 제공하고자 합니다.
            </p>
            <p>
              하은미디어와 함께라면, 디지털 세계에서의 비즈니스 성공이
              보장됩니다. 저희와의 파트너십을 통해 여러분의 브랜드와 비즈니스가
              더욱 빛날 수 있도록 함께 해나가고 싶습니다.
            </p>
            <p className="text-2xl font-bold">대표 이민기</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
