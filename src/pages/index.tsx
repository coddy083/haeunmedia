import { Nav } from "@/components/main/Nav";
import { MiddleBanner } from "@/components/main/MiddleBanner";
import { CarouselComponent } from "@/components/main/CarouselComponent";
import { MiddleSection } from "@/components/main/MiddleSection";
import { ProductDescriptionSection } from "@/components/main/ProductDescriptionSection";
import { Footer } from "@/components/main/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <CarouselComponent />
      <MiddleSection />
      <MiddleBanner />
      <ProductDescriptionSection />
      <Footer />
    </>
  );
}
