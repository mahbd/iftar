import { Card } from "@/components/ui/card";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
}

const PackageItemCard = ({ image, name }: Props) => {
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
      <p className={"text-center font-bold"}>{name}</p>
    </Card>
  );
};

export default PackageItemCard;
