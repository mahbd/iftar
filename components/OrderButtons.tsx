"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OrderButtons = () => {
  const [isFacebookApp, setIsFacebookApp] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent.toLowerCase();
      const isAndroid = userAgent.includes("android");
      const isFacebookApp =
        userAgent.includes("fbav") || userAgent.includes("fb_iab");
      const isTelegramApp = userAgent.includes("telegram");

      if (isAndroid && (isFacebookApp || isTelegramApp)) {
        setIsFacebookApp(true);
      }
    }
  }, []);
  return (
    <div>
      <div className={"flex justify-center mt-16 md:mb-10"}>
        <Link
          href={
            isFacebookApp
              ? "intent://brur-iftar.me/order#Intent;scheme=https;package=com.android.chrome;end;"
              : "/order"
          }
        >
          <Button
            size={"xxl"}
            variant={"destructive"}
            className="animate-float hover:scale-105 transition-transform shadow-xl text-lg"
          >
            ✨ Order Now ✨
          </Button>
        </Link>
      </div>

      <div className={"flex justify-center mb-10 mt-10 md:mb-24"}>
        <Link
          href={
            isFacebookApp
              ? "intent://brur-iftar.me/order?preorder=true#Intent;scheme=https;package=com.android.chrome;end;"
              : "/order?preorder=true"
          }
        >
          <Button
            size={"xxl"}
            variant={"destructive"}
            className="animate-float hover:scale-105 transition-transform shadow-xl text-lg"
          >
            ✨ Pre Order Now ✨
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderButtons;
