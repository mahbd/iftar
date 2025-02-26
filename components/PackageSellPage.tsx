import { useEffect, useState } from "react";
import BuyItemRow from "@/components/BuyItemRow";
import { OrderedItem } from "@prisma/client";
import { packages } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { createUrlWithParams } from "@/lib/utils";

const PackageSellPage = () => {
  const searchParams = useSearchParams();
  const [itemsCount, setItemsCount] = useState(Array(packages.length).fill(0));

  let totalPrice = 0;
  itemsCount.forEach((count, index) => {
    totalPrice += packages[index].discountedPrice * count;
  });

  useEffect(() => {
    const orders = sessionStorage.getItem("orders");
    if (orders) {
      try {
        const parsedOrders = JSON.parse(orders) as OrderedItem[];
        for (const orderedItem of parsedOrders) {
          const packageIndex = packages.findIndex(
            (item) => item.name === orderedItem.name,
          );
          if (packageIndex !== -1) {
            const newItemsCount = [...itemsCount];
            newItemsCount[packageIndex] = orderedItem.quantity;
            setItemsCount(newItemsCount);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={"flex flex-col w-full gap-3"}>
      {packages.map((item, index) => (
        <BuyItemRow
          key={index}
          name={item.name}
          image={item.image}
          price={item.price}
          discountedPrice={item.discountedPrice}
          itemCount={itemsCount[index] === undefined ? 0 : itemsCount[index]}
          setItemCount={(count) => {
            const newItemsCount = [...itemsCount];
            newItemsCount[index] = count;
            setItemsCount(newItemsCount);
          }}
        />
      ))}
      <div className={"text-end font-bold text-lg pe-9 -mt-3"}>
        Total Amount: {totalPrice}
      </div>
      <div className={"text-end font-bold text-lg pe-9 -mt-3"}>
        With Discount: {totalPrice - Math.floor(totalPrice / 100) * 5}
      </div>
      <div className={"flex justify-center"}>
        <Link href={createUrlWithParams(searchParams, "/contact")}>
          <Button variant={"success"} size={"lg"}>
            Provide contact information{" "}
            <ArrowBigRight className={"h-12 w-12"} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PackageSellPage;
