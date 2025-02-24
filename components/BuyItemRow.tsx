import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { OrderedItem } from "@prisma/client";

interface Props {
  image: string;
  name: string;
  step?: number;
  itemCount: number;
  price: number;
  discountedPrice: number;
  setItemCount: (count: number) => void;
}

const BuyItemRow = ({
  image,
  name,
  price,
  discountedPrice,
  step = 1,
  itemCount,
  setItemCount,
}: Props) => {
  useEffect(() => {
    const orders = sessionStorage.getItem("orders");
    if (orders) {
      try {
        const parsedOrders = JSON.parse(orders) as OrderedItem[];
        const order = parsedOrders.find((order) => order.name === name);
        if (order) {
          setItemCount(order.quantity);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [name]);

  useEffect(() => {
    const orders = sessionStorage.getItem("orders");
    if (orders) {
      try {
        const parsedOrders = JSON.parse(orders) as OrderedItem[];
        const order = parsedOrders.find((order) => order.name === name);
        if (order) {
          order.quantity = itemCount;
          sessionStorage.setItem("orders", JSON.stringify(parsedOrders));
        } else {
          sessionStorage.setItem(
            "orders",
            JSON.stringify([
              ...parsedOrders,
              {
                name,
                quantity: itemCount,
                price,
                discountedPrice,
              } as OrderedItem,
            ]),
          );
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      sessionStorage.setItem(
        "orders",
        JSON.stringify([
          { name, quantity: itemCount, price, discountedPrice } as OrderedItem,
        ]),
      );
    }
  }, [itemCount, name, price, discountedPrice]);

  return (
    <div
      className={
        "flex justify-between items-center w-80 rounded-2xl bg-white/30 p-2 backdrop-blur-lg shadow-xl"
      }
    >
      <Image
        src={image}
        alt={"Ramadan Banner"}
        width={"1920"}
        height={"1020"}
        className={"h-10 w-14 rounded-lg"}
      />
      <p className={"font-bold mx-1"}>{name}</p>
      <div className={"flex"}>
        <Button
          size={"icon"}
          variant={"destructive"}
          onClick={() => {
            setItemCount(Math.max(0, itemCount - step));
          }}
        >
          <MinusIcon />
        </Button>
        <Input
          className={
            "border-2 border-gray-800 mx-1 text-black" +
            ` ${itemCount.toString().length === 1 ? "w-10" : "w-16"}`
          }
          value={itemCount}
          onClick={(e) => setItemCount(parseInt(e.currentTarget.value))}
          type={"text"}
        />
        <Button
          size={"icon"}
          variant={"success"}
          onClick={() => {
            setItemCount(itemCount + step);
          }}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default BuyItemRow;
