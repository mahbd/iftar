import PackageCard from "@/components/PackageCard";

export default function OurPackagesSection() {
  return (
    <div>
      <h2 className="text-center mt-5 font-bold text-3xl md:text-5xl text-white drop-shadow-md bg-orange-400 p-2 pb-3 rounded-lg">
        Our Packages
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
        {[...Array(2)].map((_, i) => (
          <PackageCard
            key={i}
            image={"/images/ramadan-banner.jpg"}
            name={i === 0 ? "Single" : "Couple"}
            description={"Special Ramadan Package"}
            price={12}
            discountedPrice={12}
            className="hover:shadow-2xl transition-shadow duration-300"
          />
        ))}
      </div>
    </div>
  );
}
