import ProductCard from "@/components/ProductCard";

export default function OurItemsSection() {
  return (
    <div>
      <h2 className="text-center mt-5 font-bold text-3xl md:text-5xl text-white drop-shadow-md bg-orange-400 p-2 pb-3 rounded-lg">
        Our Items
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
        {[...Array(12)].map((_, i) => (
          <ProductCard
            key={i}
            image={"/images/ramadan-banner.jpg"}
            name={"Ginger"}
            description={"Very Tasty ginger"}
            price={12}
            discountedPrice={10}
            className="hover:shadow-2xl transition-shadow duration-300"
          />
        ))}
      </div>
    </div>
  );
}
