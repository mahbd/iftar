"use client";

import { Button } from "@/components/ui/button";
import { changeOrderStatus } from "@/lib/order.actions";
import { Status } from "@prisma/client";
import { useState } from "react";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";

const OrderActions = ({ id }: { id: string }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <div className={"flex flex-wrap gap-3"}>
      <Button
        variant={"yellow"}
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          await changeOrderStatus(id, Status.PENDING);
          router.refresh();
          setLoading(false);
        }}
      >
        Mark Pending {loading && <Spinner />}
      </Button>
      <Button
        variant={"success"}
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          await changeOrderStatus(id, Status.CONFIRMED);
          router.refresh();
          setLoading(false);
        }}
      >
        Mark Confirmed {loading && <Spinner />}
      </Button>
      <Button
        variant={"destructive"}
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          await changeOrderStatus(id, Status.CANCELLED);
          router.refresh();
          setLoading(false);
        }}
      >
        Mark Cancelled {loading && <Spinner />}
      </Button>
      <Button
        variant={"success"}
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          await changeOrderStatus(id, Status.DELIVERED);
          router.refresh();
          setLoading(false);
        }}
      >
        Mark Delivered {loading && <Spinner />}
      </Button>
    </div>
  );
};

export default OrderActions;
