import { useState } from "react";
import BuyItemRow from "@/components/BuyItemRow";
import ContactInformation from "@/components/ContactInformation";

const PackageSellPage = () => {
  const [coupleAmount, setCoupleAmount] = useState(0);
  const [singleAmount, setSingleAmount] = useState(0);
  const totalPrice = coupleAmount * 100 + singleAmount * 50;

  return (
    <div className={"flex flex-col gap-3"}>
      <BuyItemRow
        image={"/images/ramadan-banner.jpg"}
        name={"Couple Package"}
        itemCount={coupleAmount}
        setItemCount={setCoupleAmount}
      />
      <BuyItemRow
        image={"/images/ramadan-banner.jpg"}
        name={" Single Package"}
        itemCount={singleAmount}
        setItemCount={setSingleAmount}
      />
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

export default PackageSellPage;
