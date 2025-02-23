import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
}

const ProductCard = ({
  image,
  name,
  description,
  price,
  discountedPrice,
}: Props) => {
  return (
    <Card>
      <div className={"rounded-lg"}>
        <Image
          className={"rounded-t-lg"}
          src={image}
          alt={name}
          width={"1920"}
          height={"1020"}
        />
      </div>
      <CardContent>
        <CardTitle className={"text-center"}>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className={"flex gap-1"}>
          <p className={"text-sm md:text-lg line-through text-red-500"}>
            {price}
          </p>
          <p className={"text-lg font-bold"}>{discountedPrice}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
