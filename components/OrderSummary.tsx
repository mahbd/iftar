import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { OrderedItem } from "@prisma/client";
import { useState } from "react";
import { createOrder } from "@/lib/order.actions";
import { Trash2 } from "lucide-react";
import Spinner from "@/components/Spinner";
import { useSearchParams } from "next/navigation";

const OrderSummary = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className={"w-full"}>
        <button
          className="w-full rounded-lg bg-green-800 py-3 px-6 font-semibold text-white transition-all hover:bg-[#ff5252] hover:shadow-lg hover:shadow-[#ff6b6b]/30"
          onClick={() => {
            setIsOpen(true);
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
                  <Trash2
                    className={"ps-2 w-7 h-7 text-red-500 inline"}
                    onClick={() => {
                      orders[index].quantity = 0;
                      sessionStorage.setItem("orders", JSON.stringify(orders));
                      setReload(!reload);
                    }}
                  />
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
                disabled={isLoading}
                variant={"success"}
                onClick={async () => {
                  setIsLoading(true);
                  try {
                    const res = await createOrder({
                      name: localStorage.getItem("name") || "",
                      phone: localStorage.getItem("mobile") || "",
                      location: localStorage.getItem("location") || "",
                      finalPrice: discountedTotal,
                      isPreOrder: searchParams.get("preorder") === "true",
                      deliveryDate: new Date(
                        sessionStorage.getItem("preorderDate") || new Date(),
                      ),
                      items: orders,
                    });
                    if (!res) {
                      setIsLoading(false);
                      console.error("Failed to place order");
                      alert("Failed to place order");
                      return;
                    } else {
                      sessionStorage.removeItem("orders");
                      window.location.pathname = "/success";
                    }
                  } catch (e) {
                    console.error(e);
                    setIsLoading(false);
                    alert(e);
                    alert("Failed to place order Server Error");
                  }
                }}
              >
                Confirm {isLoading && <Spinner />}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderSummary;
