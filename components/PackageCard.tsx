import ProductCard from "@/components/ProductCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PackageItemCard from "@/components/PackageItemCard";
import { useState } from "react";

interface Props {
  image: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  className?: string;
}

const PackageCard = ({
  image,
  name,
  description,
  price,
  discountedPrice,
  className,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <ProductCard
          image={image}
          name={name}
          description={description}
          price={price}
          discountedPrice={discountedPrice}
          className={className}
          setDialogOpen={setIsOpen}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={"text-start"}>Items</DialogTitle>
          <div className={"grid grid-cols-2 gap-2"}>
            <PackageItemCard name={name} image={"/images/ramadan-banner.jpg"} />
            <PackageItemCard name={name} image={"/images/ramadan-banner.jpg"} />
            <PackageItemCard name={name} image={"/images/ramadan-banner.jpg"} />
            <PackageItemCard name={name} image={"/images/ramadan-banner.jpg"} />
          </div>
        </DialogHeader>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          eveniet exercitationem in incidunt ipsum modi nemo perferendis
          possimus suscipit? Aut enim nemo non quae voluptates?
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PackageCard;
