import BuyItemRow from "@/components/BuyItemRow";
import { ChevronsDown } from "lucide-react";
import { useState } from "react";
import ContactInformation from "@/components/ContactInformation";

const CustomSellPage = () => {
  const [chickpeas, setChickpeas] = useState(0);
  const [purple, setPurple] = useState(0);
  const totalPrice = chickpeas * 120 + purple * 5;
  return (
    <div>
      <div className={"flex flex-col gap-3 w-80 max-h-[60vh] overflow-y-auto"}>
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"ছোলা (kg)"}
          step={0.25}
          itemCount={chickpeas}
          setItemCount={setChickpeas}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
        <BuyItemRow
          image={"/images/ramadan-banner.jpg"}
          name={"বেগুনি"}
          itemCount={purple}
          setItemCount={setPurple}
        />
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
