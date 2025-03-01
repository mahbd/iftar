import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { OrderedItem } from "@prisma/client";
import { useEffect, useState } from "react";
import { createOrder } from "@/lib/order.actions";
import { Trash2 } from "lucide-react";
import Spinner from "@/components/Spinner";
import { useRouter, useSearchParams } from "next/navigation";
import { item_hash } from "@/lib/data";

interface Props {
  isValid: boolean;
}

const OrderSummary = ({ isValid }: Props) => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ip, setIp] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch((err) => console.error("Failed to fetch IP:", err));
  }, []);

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
  let total = 0;
  for (const order of orders) {
    total +=
      item_hash[order.name].info == "৳"
        ? order.quantity
        : order.discountedPrice * order.quantity;
  }
  const discountedTotal = total - Math.floor(total / 100) * 5;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className={"w-full"}>
        <button
          disabled={!isValid}
          className="w-full rounded-lg bg-green-800 py-3 px-6 font-semibold text-white transition-all hover:bg-[#ff5252] hover:shadow-lg hover:shadow-[#ff6b6b]/30 disabled:opacity-50"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Submit
        </button>
      </DialogTrigger>
      <DialogContent className={"border-0 p-0 m-0"}>
        <div className="flex w-full items-center justify-center">
          <div className="rounded-2xl w-80 bg-white/70 p-8 backdrop-blur-lg shadow-xl">
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
                    {item_hash[order.name].info == "৳"
                      ? order.quantity
                      : order.price * order.quantity}
                  </span>
                  {item_hash[order.name].info == "৳"
                    ? order.quantity
                    : order.discountedPrice * order.quantity}
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
            <div className="flex justify-between items-center mt-5 gap-5 text-green-900 pe-7">
              <p className={"font-bold"}>Total</p>
              <p></p>

              <p>{total}</p>
            </div>
            <div className="flex justify-between items-center gap-5 text-green-900 pe-7">
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
                      prevId: localStorage.getItem("prevId") || undefined,
                      ipAddr: ip,
                      items: orders,
                    });

                    if (res.isSuccessful) {
                      localStorage.setItem("prevId", res.db_id || "");
                      sessionStorage.removeItem("orders");
                      router.push("/success/?orderId=" + res.id);
                    } else {
                      router.push("/failed/?message=" + res.message);
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
