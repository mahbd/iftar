"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import PackageSellPage from "@/components/PackageSellPage";
import CustomSellPage from "@/components/CustomSellPage";
import Head from "next/head";

const OrderPage = () => {
  const [predefined, setPredefined] = useState(false);
  const [custom, setCustom] = useState(false);
  return (
    <div className={"flex flex-col h-auto w-full px-3 md:w-96 -mt-5"}>
      <Head>
        <title>
          Order | Iftar Delights - Ramadan-exclusive Food Delivery Service
        </title>
      </Head>
      <div
        className={"flex flex-col h-screen justify-center items-center gap-5"}
      >
        <h1 className={"text-lg md:text-2xl font-bold"}>
          Select your packages
        </h1>
        {!custom && (
          <Button
            size={"xl"}
            onClick={() => setPredefined(!predefined)}
            className={"w-full"}
            variant={predefined ? "yellow" : "success"}
          >
            Packages
          </Button>
        )}
        {predefined && <PackageSellPage />}
        {!predefined && (
          <Button
            size={"xl"}
            onClick={() => setCustom(!custom)}
            className={"w-full"}
            variant={custom ? "yellow" : "success"}
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
