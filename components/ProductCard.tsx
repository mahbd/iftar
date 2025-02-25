import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  image: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  className?: string;
  setDialogOpen?: (open: boolean) => void;
}

const ProductCard = ({
  image,
  name,
  description,
  price,
  discountedPrice,
  className,
  setDialogOpen,
}: Props) => {
  return (
    <Card className={cn(className, "hover:scale-103 max-w-sm")}>
      <div className={"rounded-lg"}>
        <Image
          className={"rounded-t-lg"}
          src={image}
          alt={name}
          width={"600"}
          height={"400"}
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
        <div className={"flex justify-between"}>
          <div className={"w-full text-gray-900 text-start"}>{description}</div>
          {setDialogOpen && (
            <Button variant={"success"} onClick={() => setDialogOpen(true)}>
              Details
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
