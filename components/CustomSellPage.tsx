import BuyItemRow from "@/components/BuyItemRow";
import { ChevronsDown } from "lucide-react";
import { useState } from "react";
import ContactInformation from "@/components/ContactInformation";

const CustomSellPage = () => {
  const [itemsCount, setItemsCount] = useState(Array(2).fill(0));

  const items = [
    {
      image: "/images/ramadan-banner.jpg",
      name: "ছোলা (kg)",
      price: 120,
      discountedPrice: 100,
      step: 0.25,
    },
    {
      image: "/images/ramadan-banner.jpg",
      name: "বেগুনি",
      price: 5,
      discountedPrice: 4,
    },
  ];

  let totalPrice = 0;
  itemsCount.forEach((count, index) => {
    totalPrice += items[index].discountedPrice * count;
  });

  return (
    <div>
      <div className={"flex flex-col gap-3 w-80 max-h-[60vh] overflow-y-auto"}>
        {items.map((item, index) => (
          <BuyItemRow
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
            discountedPrice={item.discountedPrice}
            step={item.step}
            itemCount={itemsCount[index]}
            setItemCount={(count) => {
              const newItemsCount = [...itemsCount];
              newItemsCount[index] = count;
              setItemsCount(newItemsCount);
            }}
          />
        ))}
      </div>
      <div className={"flex justify-center -mt-3 mb-3"}>
        <ChevronsDown className={"text-green-800 text-lg font-bold w-8 h-8"} />
      </div>
      <div className={"text-end font-bold text-lg pe-9"}>
        Total Amount: {totalPrice}
      </div>
      <div className={"text-end font-bold text-lg pe-9 -mt-3"}>
        With Discount: {totalPrice - Math.floor(totalPrice / 100) * 5}
      </div>
      <ContactInformation />
    </div>
  );
};

export default CustomSellPage;
