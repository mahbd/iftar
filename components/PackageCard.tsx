"use client";

import ProductCard from "@/components/ProductCard";
import {
  Dialog,
  DialogContent,
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
      <DialogContent className={"bg-transparent border-0"}>
        <div className="flex items-center justify-center">
          <div className="rounded-2xl bg-white/70 p-8 backdrop-blur-lg shadow-xl">
            <DialogTitle className={"text-start"}>Items</DialogTitle>
            <div className={"grid grid-cols-2 gap-2"}>
              <PackageItemCard
                name={name}
                image={"/images/ramadan-banner.jpg"}
              />
              <PackageItemCard
                name={name}
                image={"/images/ramadan-banner.jpg"}
              />
              <PackageItemCard
                name={name}
                image={"/images/ramadan-banner.jpg"}
              />
              <PackageItemCard
                name={name}
                image={"/images/ramadan-banner.jpg"}
              />
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              eveniet exercitationem in incidunt ipsum modi nemo perferendis
              possimus suscipit? Aut enim nemo non quae voluptates?
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PackageCard;
