import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  image: string;
  name: string;
  step?: number;
  itemCount: number;
  setItemCount: (count: number) => void;
}

const BuyItemRow = ({
  image,
  name,
  step = 1,
  itemCount,
  setItemCount,
}: Props) => {
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
          type={"number"}
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
