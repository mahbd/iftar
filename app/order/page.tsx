"use client";

import { Button } from "@/components/ui/button";
import { Suspense, useEffect, useState } from "react";
import PackageSellPage from "@/components/PackageSellPage";
import CustomSellPage from "@/components/CustomSellPage";
import Head from "next/head";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";

import { Calendar } from "@/components/ui/calendar";

const OrderPageContent = () => {
  const [predefined, setPredefined] = useState(false);
  const [custom, setCustom] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const isPreorder = searchParams.get("preorder") === "true";
    if (isPreorder) {
      setShowDatePicker(true);
    }
  }, [searchParams]);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      // Save to sessionStorage
      sessionStorage.setItem("preorderDate", selectedDate.toISOString());
      setDate(selectedDate);
      // Close the date picker popup
      setShowDatePicker(false);
    }
  };

  return (
    <div className={"flex flex-col h-auto w-full px-3 md:w-96 -mt-5"}>
      <Head>
        <title>
          Order | Iftar Delights - Ramadan-exclusive Food Delivery Service
        </title>
      </Head>

      {showDatePicker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Select Preorder Date</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
              disabled={(date) =>
                date < new Date() ||
                date > new Date(2025, 3, 20) ||
                date > new Date(new Date().setDate(new Date().getDate() + 5))
              }
            />
          </div>
        </div>
      )}

      <div
        className={"flex flex-col h-screen justify-center items-center gap-3"}
      >
        <h1 className={"text-lg md:text-2xl font-bold"}>
          Select your packages
        </h1>
        {date && (
          <div className="mb-4 p-2 bg-yellow-100 rounded-md">
            <p className="text-sm font-medium">
              Preorder for: {format(date, "MMMM d, yyyy")}
            </p>
          </div>
        )}
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

const OrderPage = () => {
  return (
    <Suspense>
      <OrderPageContent />
    </Suspense>
  );
};

export default OrderPage;
