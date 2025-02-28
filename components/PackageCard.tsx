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
import { IProduct } from "@/lib/data";
import { XIcon } from "lucide-react";

interface Props {
  image: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  className?: string;
  items: IProduct[];
  info: string;
}

const PackageCard = ({
  image,
  name,
  description,
  price,
  discountedPrice,
  className,
  items,
  info,
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
            <XIcon className={"flex justify-end"} />
            <DialogTitle className={"text-center text-lg mb-5"}>
              Items
            </DialogTitle>
            <div className={"grid grid-cols-3 gap-2"}>
              {items.map((item, i) => (
                <PackageItemCard key={i} name={item.name} image={item.image} />
              ))}
            </div>
            <pre className={"mt-5"}>{info}</pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PackageCard;
