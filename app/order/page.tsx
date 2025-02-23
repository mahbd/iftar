"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import PackageSellPage from "@/components/PackageSellPage";
import CustomSellPage from "@/components/CustomSellPage";

const OrderPage = () => {
  const [predefined, setPredefined] = useState(false);
  const [custom, setCustom] = useState(false);
  return (
    <div>
      <div
        className={
          "flex flex-col h-screen justify-center items-center gap-5 w-80 md:w-96"
        }
      >
        <h1 className={"text-xl md:text-4xl font-bold"}>
          Select your packages
        </h1>
        {!custom && (
          <Button
            size={"xxl"}
            onClick={() => setPredefined(!predefined)}
            className={"w-80 md:w-96"}
          >
            Packages
          </Button>
        )}
        {predefined && <PackageSellPage />}
        {!predefined && (
          <Button
            size={"xxl"}
            onClick={() => setCustom(!custom)}
            className={"w-80"}
          >
            Custom Package
          </Button>
        )}
        {custom && <CustomSellPage />}
      </div>
    </div>
  );
};

export default OrderPage;
