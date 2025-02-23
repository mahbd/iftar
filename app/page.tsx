import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import PackageCard from "@/components/PackageCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Blessed Ramadan</h1>
      </header>
      <Image
        src={"/images/ramadan-banner.jpg"}
        alt={"Ramadan Banner"}
        width={"1920"}
        height={"1020"}
        className={"md:rounded-lg"}
      />
      <div className={"flex justify-center mt-10 animate-scale h-16"}>
        <Link href={"/order"}>
          <Button size={"xxl"} variant={"destructive"}>
            Order Now
          </Button>
        </Link>
      </div>
      <section className={"mx-2 mt-10"}>
        <h2 className={"text-center mt-5 font-bold text-xl md:text-4xl"}>
          Our Items
        </h2>
        <div className={"grid grid-cols-2 md:grid-cols-4 gap-3"}>
          <ProductCard
            image={"/images/ramadan-banner.jpg"}
            name={"Ginger"}
            description={"Very Tasty ginger"}
            price={12}
            discountedPrice={12}
          />
          <ProductCard
            image={"/images/ramadan-banner.jpg"}
            name={"Ginger"}
            description={"Very Tasty ginger"}
            price={12}
            discountedPrice={12}
          />
          <ProductCard
            image={"/images/ramadan-banner.jpg"}
            name={"Ginger"}
            description={"Very Tasty ginger"}
            price={12}
            discountedPrice={12}
          />
          <ProductCard
            image={"/images/ramadan-banner.jpg"}
            name={"Ginger"}
            description={"Very Tasty ginger"}
            price={12}
            discountedPrice={12}
          />
          <ProductCard
            image={"/images/ramadan-banner.jpg"}
            name={"Ginger"}
            description={"Very Tasty ginger"}
            price={12}
            discountedPrice={12}
          />
          <ProductCard
            image={"/images/ramadan-banner.jpg"}
            name={"Ginger"}
            description={"Very Tasty ginger"}
            price={12}
            discountedPrice={12}
          />
        </div>
      </section>

      <section className={"mx-2"}>
        <h2 className={"text-center mt-5 font-bold text-xl md:text-4xl"}>
          Our Packages
        </h2>
        <div className={"grid grid-cols-2 md:grid-cols-4 gap-3"}>
          <PackageCard
            image={"/images/ramadan-banner.jpg"}
            name={"Single"}
            description={"Very Tasty ginger"}
            price={12}
            discountedPrice={12}
          />
          <PackageCard
            image={"/images/ramadan-banner.jpg"}
            name={"Couple"}
            description={"Very Tasty ginger"}
            price={12}
            discountedPrice={12}
          />
        </div>
      </section>
      <section>
        <h2 className={"text-center mt-5 font-bold text-xl md:text-4xl"}>
          Canvas Painting
        </h2>
      </section>
    </div>
  );
}
