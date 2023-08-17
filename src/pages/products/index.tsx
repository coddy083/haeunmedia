import { Footer } from "@/components/main/Footer";
import { Nav } from "@/components/main/Nav";
import { TopTitle } from "@/components/TopTitle";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <Nav />
      <TopTitle title="상품(Products)" />
      <div className="w-1200 grid grid-cols-3 gap-10 py-20">
        {products.map((product) => (
          <Link href={`/products/detail/${product.id}`} key={product.id}>
            <div className="w-full relative overflow-hidden flex flex-col gap-2">
              <Image
                src={product.src}
                alt={product.title}
                width={392}
                height={220}
              />
              <p>{product.title}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
