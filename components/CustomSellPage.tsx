import BuyItemRow from "@/components/BuyItemRow";
import { ArrowBigRight, ChevronsDown } from "lucide-react";
import { useEffect, useState } from "react";
import { items } from "@/lib/data";
import { OrderedItem } from "@prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createUrlWithParams } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const CustomSellPage = () => {
  const searchParams = useSearchParams();
  const [itemsCount, setItemsCount] = useState(Array(items.length).fill(0));

  let totalPrice = 0;
  itemsCount.forEach((count, index) => {
    totalPrice +=
      items[index].info == "৳" ? count : items[index].discountedPrice * count;
  });

  useEffect(() => {
    const orders = sessionStorage.getItem("orders");
    if (orders) {
      try {
        const parsedOrders = JSON.parse(orders) as OrderedItem[];
        for (const orderedItem of parsedOrders) {
          const packageIndex = items.findIndex(
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
    <div className={"flex flex-col w-full gap-3 "}>
      <div className={"flex flex-col gap-2 max-h-[50vh] overflow-y-auto"}>
        {items.map((item, index) => (
          <BuyItemRow
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
            discountedPrice={item.discountedPrice}
            step={item.step}
            info={item.info}
            itemCount={itemsCount[index]}
            setItemCount={(count) => {
              const newItemsCount = [...itemsCount];
              newItemsCount[index] = count;
              setItemsCount(newItemsCount);
            }}
          />
        ))}
      </div>
      <div className={"flex justify-center -mt-8 z-10"}>
        <ChevronsDown className={"text-green-800 text-lg font-bold w-8 h-8"} />
      </div>
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

export default CustomSellPage;
