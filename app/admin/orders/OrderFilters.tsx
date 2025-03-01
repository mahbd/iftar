"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Status } from "@prisma/client";

const OrderFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filterStatus, setFilterStatus] = useState(
    searchParams.get("filterStatus") || "",
  );
  const [filterLocation, setFilterLocation] = useState(
    searchParams.get("filterLocation") || "",
  );

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("filterStatus", filterStatus);
    newSearchParams.set("filterLocation", filterLocation);
    router.push(`?${newSearchParams.toString()}`);
  }, [filterStatus, filterLocation]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={"flex"}>
      <select
        defaultValue={filterStatus}
        onChange={(value) => setFilterStatus(value.currentTarget.value)}
      >
        <option value={""}>All</option>
        <option value={Status.PENDING}>Pending</option>
        <option value={Status.CONFIRMED}>Confirmed</option>
        <option value={Status.CANCELLED}>Cancelled</option>
        <option value={Status.DELIVERED}>Delivered</option>
      </select>
      <select
        defaultValue={filterLocation}
        onChange={(value) => setFilterLocation(value.currentTarget.value)}
      >
        <option value={""}>All</option>
        <option value="Abu Sayed Chattar">Abu Sayed Chattar</option>
        <option value="Sardar Para">Sardar Para</option>
        <option value="Chak Bazar">Chak Bazar</option>
      </select>
    </div>
  );
};

export default OrderFilters;
