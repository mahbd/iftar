import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const OrderSummary = () => {
  return (
    <Dialog>
      <DialogTrigger className={"w-full"}>
        <button className="w-full rounded-lg bg-green-800 py-3 px-6 font-semibold text-white transition-all hover:bg-[#ff5252] hover:shadow-lg hover:shadow-[#ff6b6b]/30">
          Submit
        </button>
      </DialogTrigger>
      <DialogContent className={"bg-transparent border-0"}>
        <div className="flex items-center justify-center">
          <div className="rounded-2xl bg-white/70 p-8 backdrop-blur-lg shadow-xl">
            <p className={"text-center text-xl font-bold text-[#2d3436] mb-6"}>
              Order Summary
            </p>
            <p>Name: Mahmudul Alam</p>
            <p>Mobile: 017xxxxxxxx</p>
            <p>Location: Sardar Para</p>
            <h3 className={"font-bold text-lg text-center mt-5"}>
              Ordered Items
            </h3>
            <div className="flex justify-between items-center mt-3 gap-5">
              <p className={"font-bold"}>Couple Package</p>
              <p>2</p>

              <p>
                <span className={"line-through pe-1"}>300</span>286
              </p>
            </div>
            <div className="flex justify-between items-center gap-5">
              <p className={"font-bold"}>Couple Package</p>
              <p>2</p>
              <p>
                <span className={"line-through pe-1"}>300</span>286
              </p>
            </div>
            <div className="flex justify-between items-center gap-5">
              <p className={"font-bold"}>Couple Package</p>
              <p>2</p>

              <p>
                <span className={"line-through pe-1"}>300</span>286
              </p>
            </div>
            <div className="flex justify-between items-center mt-5 gap-5 text-green-900">
              <p className={"font-bold"}>Total</p>
              <p></p>

              <p>300</p>
            </div>
            <div className="flex justify-between items-center gap-5 text-green-900">
              <p className={"font-bold"}>Discounted Total</p>
              <p></p>

              <p>286</p>
            </div>
            <div className={"flex justify-end mt-4"}>
              <Button variant={"success"}>Confirm</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderSummary;
