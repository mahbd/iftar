"use client";

import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowBigRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderSummary from "@/components/OrderSummary";
import { useState } from "react";

const ContactInformation = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [mobile, setMobile] = useState(localStorage.getItem("mobile") || "");
  const [location, setLocation] = useState(
    localStorage.getItem("location") || "",
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger>
        <Button className={"w-80"} onClick={() => setIsOpen(true)}>
          Provide contact information <ArrowBigRight className={"h-12 w-12"} />
        </Button>
      </DialogTrigger>
      <DialogContent className={"bg-transparent border-0"}>
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
                    localStorage.setItem("name", e.currentTarget.value);
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
                    localStorage.setItem("mobile", e.currentTarget.value);
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
                  value={location}
                  className="w-full rounded-lg border border-[#4ecdc4]/30 bg-white/40 px-4 py-2 text-[#2d3436] placeholder-[#4ecdc4]/60 focus:border-[#4ecdc4] focus:ring-2 focus:ring-[#ffe66d]/50"
                  onChange={(e) => {
                    setLocation(e.currentTarget.value);
                    localStorage.setItem("location", e.currentTarget.value);
                  }}
                >
                  <option value="" disabled selected>
                    Select your location
                  </option>
                  <option value="park-more">Abu Sayed Chattar</option>
                  <option value="sardarpara">Sardar Para</option>
                  <option value="chakbazar">Chak Bazar</option>
                </select>
              </div>

              <OrderSummary setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactInformation;
