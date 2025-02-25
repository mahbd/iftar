import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";
import { items } from "@/lib/data";

export default function OurItemsSection() {
  return (
    <div>
      <h2
        className={cn(
          "text-center mt-5 font-bold text-3xl md:text-5xl text-white",
          "drop-shadow-md bg-orange-400 p-2 pb-3 rounded-lg",
        )}
      >
        Our Items
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
        {items.map((item, i) => (
          <ProductCard
            key={i}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            discountedPrice={item.discountedPrice}
            className="hover:shadow-2xl transition-shadow duration-300"
          />
        ))}
      </div>
    </div>
  );
}
