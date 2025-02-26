"use client";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/lib/data";

export default function OurPackagesSection() {
  return (
    <div>
      <h2 className="text-center mt-5 font-bold text-3xl md:text-5xl text-white drop-shadow-md bg-orange-400 p-2 pb-3 rounded-lg">
        Our Packages
      </h2>
      <div className="grid grid-cols-2 md:flex md:justify-center gap-3 p-4">
        {packages.map((pkg, i) => (
          <PackageCard
            key={i}
            image={pkg.image}
            name={pkg.name}
            description={pkg.description}
            price={pkg.price}
            discountedPrice={pkg.discountedPrice}
            className="hover:shadow-2xl transition-shadow duration-300"
          />
        ))}
      </div>
    </div>
  );
}
