import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  image: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  className?: string;
}

const ProductCard = ({
  image,
  name,
  description,
  price,
  discountedPrice,
  className,
}: Props) => {
  return (
    <Card className={cn(className, "hover:scale-105")}>
      <div className={"rounded-lg"}>
        <Image
          className={"rounded-t-lg"}
          src={image}
          alt={name}
          width={"1920"}
          height={"1020"}
        />
      </div>
      <div>
        <div className={"flex justify-between"}>
          <div className={"text-center font-bold"}>{name}</div>
          <div className={"flex gap-1"}>
            <p
              className={
                "font-bold text-sm md:text-lg line-through text-gray-700"
              }
            >
              {price}
            </p>
            <p className={"text-lg font-bold"}>
              {discountedPrice} <span className={"text-yellow-900"}>৳</span>
            </p>
          </div>
        </div>
        <div className={"w-full text-gray-900 text-start"}>{description}</div>
      </div>
    </Card>
  );
};

export default ProductCard;
