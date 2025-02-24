import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

export default function OurItemsSection() {
  const items = [
    {
      image: "/products/chola.jpg",
      name: "ছোলা",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/muri.jpg",
      name: "মুড়ি",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/ginger-e.png",
      name: "পেঁয়াজি",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/potato.jpg",
      name: "আলুর চপ",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/morich.jpg",
      name: "মরিচের চপ",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/begun.jpg",
      name: "বেগুনি",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/bunia.jpg",
      name: "বুন্দিয়া",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/date.jpg",
      name: "খেজুর",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/juice.webp",
      name: "লাচ্ছি",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/jilapi.jpg",
      name: "জিলাপি",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/chira-vaja.jpg",
      name: "চিড়া ভাজা",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
    {
      image: "/products/rosun-chop.jpg",
      name: "রসুনের চপ",
      description: "Very Tasty ginger",
      price: 12,
      discountedPrice: 10,
      className: "hover:shadow-2xl transition-shadow duration-300",
    },
  ];
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
