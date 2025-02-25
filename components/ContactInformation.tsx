"use client";

import { Input } from "@/components/ui/input";
import OrderSummary from "@/components/OrderSummary";
import { useEffect, useState } from "react";
import { OrderedItem } from "@prisma/client";
import { redirect } from "next/navigation";

interface Props {
  prevName: string | null | undefined;
  prevMobile: string | null | undefined;
  prevLocation: string | null | undefined;
}

const ContactInformation = ({ prevName, prevMobile, prevLocation }: Props) => {
  const [name, setName] = useState(prevName || "");
  const [mobile, setMobile] = useState(prevMobile || "");
  const [location, setLocation] = useState(prevLocation || "");

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("location", location);
  }, [name, location, mobile]);

  useEffect(() => {
    const orders_str = sessionStorage.getItem("orders");
    if (orders_str) {
      try {
        const orders = JSON.parse(orders_str) as OrderedItem[];
        if (orders.filter((order) => order.quantity > 0).length <= 0) {
          alert("Please add some items to your cart first");
          return redirect("/order");
        }
        console.log(orders);
      } catch (e) {
        console.error(e);
      }
    } else {
      return redirect("/order");
    }
  }, []);

  return (
    <DialogContentShow
      name={name}
      mobile={mobile}
      location={location}
      setName={setName}
      setMobile={setMobile}
      setLocation={setLocation}
    />
  );
};

export default ContactInformation;

interface ShowProps {
  name: string;
  mobile: string;
  location: string;
  setName: (name: string) => void;
  setMobile: (mobile: string) => void;
  setLocation: (location: string) => void;
}

const DialogContentShow = ({
  name,
  mobile,
  location,
  setName,
  setMobile,
  setLocation,
}: ShowProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-2xl bg-white/70 p-8 backdrop-blur-lg shadow-xl">
        <p className={"text-center text-xl font-bold text-[#2d3436] mb-6"}>
          Contact Information
        </p>
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#2d3436] opacity-90"
            >
              Name
            </label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              className="w-full rounded-lg border border-[#4ecdc4]/30 bg-white/40 px-4 py-3 text-[#2d3436] placeholder-[#4ecdc4]/60 focus:border-[#4ecdc4] focus:ring-2 focus:ring-[#ffe66d]/50"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-[#2d3436] opacity-90"
            >
              Mobile
            </label>
            <Input
              id="mobile"
              placeholder="Enter your number"
              type={"tel"}
              value={mobile}
              className="w-full rounded-lg border border-[#4ecdc4]/30 bg-white/40 px-4 py-3 text-[#2d3436] placeholder-[#4ecdc4]/60 focus:border-[#4ecdc4] focus:ring-2 focus:ring-[#ffe66d]/50"
              onChange={(e) => {
                setMobile(e.currentTarget.value);
              }}
            />
          </div>

          {/* Location Field */}
          <div className="space-y-2">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-[#2d3436] opacity-90"
            >
              Location
            </label>
            <select
              id="location"
              defaultValue={location || ""}
              className="w-full rounded-lg border border-[#4ecdc4]/30 bg-white/40 px-4 py-2 text-[#2d3436] placeholder-[#4ecdc4]/60 focus:border-[#4ecdc4] focus:ring-2 focus:ring-[#ffe66d]/50"
              onChange={(e) => {
                setLocation(e.currentTarget.value);
              }}
            >
              <option value="" disabled>
                Select your location
              </option>
              <option value="Abu Sayed Chattar">Abu Sayed Chattar</option>
              <option value="Sardar Para">Sardar Para</option>
              <option value="Chak Bazar">Chak Bazar</option>
            </select>
          </div>

          <OrderSummary />
        </div>
      </div>
    </div>
  );
};
