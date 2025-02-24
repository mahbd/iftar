import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { OrderedItem } from "@prisma/client";
import { useState } from "react";
import { createOrder } from "@/lib/order.actions";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

const OrderSummary = ({ setIsOpen }: Props) => {
  const [isOpen2, setIsOpen2] = useState(false);
  const orders_str = sessionStorage.getItem("orders");
  let orders: OrderedItem[] = [];
  if (orders_str) {
    try {
      orders = JSON.parse(orders_str) as OrderedItem[];
      orders = orders.filter((order) => order.quantity > 0);
    } catch (e) {
      console.error(e);
    }
  }

  const total = orders.reduce((acc: number, order) => {
    return acc + order.discountedPrice * order.quantity;
  }, 0);
  const discountedTotal = total - Math.floor(total / 100) * 5;

  return (
    <Dialog open={isOpen2}>
      <DialogTrigger className={"w-full"}>
        <button
          className="w-full rounded-lg bg-green-800 py-3 px-6 font-semibold text-white transition-all hover:bg-[#ff5252] hover:shadow-lg hover:shadow-[#ff6b6b]/30"
          onClick={() => {
            setIsOpen2(true);
          }}
        >
          Submit
        </button>
      </DialogTrigger>
      <DialogContent className={"bg-transparent border-0"}>
        <div className="flex items-center justify-center">
          <div className="rounded-2xl bg-white/70 p-8 backdrop-blur-lg shadow-xl">
            <p className={"text-center text-xl font-bold text-[#2d3436] mb-6"}>
              Order Summary
            </p>
            <p>Name: {localStorage.getItem("name")}</p>
            <p>Mobile: {localStorage.getItem("mobile")}</p>
            <p>Location: {localStorage.getItem("location")}</p>
            <h3 className={"font-bold text-lg text-center mt-5"}>
              Ordered Items
            </h3>
            {orders.map((order, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-5"
              >
                <p className={"font-bold"}>{order.name}</p>
                <p>{order.quantity}</p>
                <p>
                  <span className={"line-through pe-1"}>
                    {order.price * order.quantity}
                  </span>
                  {order.discountedPrice * order.quantity}
                </p>
              </div>
            ))}
            <div className="flex justify-between items-center mt-5 gap-5 text-green-900">
              <p className={"font-bold"}>Total</p>
              <p></p>

              <p>{total}</p>
            </div>
            <div className="flex justify-between items-center gap-5 text-green-900">
              <p className={"font-bold"}>Discounted Total</p>
              <p></p>

              <p>{discountedTotal}</p>
            </div>
            <div className={"flex justify-end mt-4"}>
              <Button
                variant={"success"}
                onClick={async () => {
                  setIsOpen2(false);
                  setIsOpen(false);
                  sessionStorage.removeItem("orders");
                  try {
                    const res = await createOrder({
                      name: localStorage.getItem("name") || "",
                      phone: localStorage.getItem("mobile") || "",
                      location: localStorage.getItem("location") || "",
                      finalPrice: discountedTotal,
                      items: orders,
                    });
                    console.log(res);
                    alert("Order created successfully");
                  } catch (e) {
                    console.error(e);
                    alert("Failed to create order");
                  }
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderSummary;
