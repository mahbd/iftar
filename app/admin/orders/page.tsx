import prisma from "@/prisma/client";
import { Suspense } from "react";
import SearchBar from "@/app/admin/SearchBar";
import { Prisma, Status } from "@prisma/client";
import Link from "next/link";
import OrderFilters from "@/app/admin/orders/OrderFilters";

interface OrderPageProps {
  searchParams: Promise<{
    search?: string;
    filterStatus?: string;
    filterLocation?: string;
  }>;
}

const getBgColor = (status: Status) => {
  switch (status) {
    case "PENDING":
      return "bg-yellow-200";
    case "DELIVERED":
      return "bg-green-200";
    case "CANCELLED":
      return "bg-red-200";
    case "CONFIRMED":
      return "bg-blue-200";
    default:
      return "bg-gray-200";
  }
};

const OrderPage = async ({ searchParams }: OrderPageProps) => {
  const allOrders = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
      },
    },
  });
  const ip_hash: { [key: string]: number } = {},
    userHash: { [key: string]: number } = {};
  allOrders.forEach((order) => {
    ip_hash[order.ipAddr || "none"] =
      (ip_hash[order.ipAddr || "none"] || 0) + 1;
    userHash[order.userId || "none"] =
      (userHash[order.userId || "none"] || 0) + 1;
  });

  const whereClause: Prisma.OrderWhereInput = {};
  const search = (await searchParams).search;
  const filterStatus = (await searchParams).filterStatus;
  const filterLocation = (await searchParams).filterLocation;

  if (search) {
    const queries = search.split(",").filter(Boolean);
    const orFilters: Prisma.OrderWhereInput[] = queries
      .map((query) => {
        const [field, value] = query.split(":");
        if (field && value) {
          return {
            [field]: {
              contains: value,
              mode: "insensitive",
            },
          };
        }
        return null;
      })
      .filter(Boolean) as Prisma.OrderWhereInput[];

    if (orFilters.length > 0) {
      whereClause.OR = orFilters;
    }
  }

  if (filterStatus) {
    whereClause.status = filterStatus as Status;
  }
  if (filterLocation) {
    whereClause.location = filterLocation;
  }

  const orders = await prisma.order.findMany({
    where: whereClause,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className={"px-2"}>
      <h1 className={"text-center font-bold text-xl"}>Orders</h1>
      <Suspense>
        <SearchBar
          link={"/admin/orders/"}
          fields={["name", "phone", "location"]}
        />
        <OrderFilters />
      </Suspense>
      <div className={"flex flex-col gap-2 mt-5"}>
        {orders.map((order) => (
          <Link key={order.id} href={`/admin/orders/${order.id}`}>
            <div
              className={`flex flex-wrap gap-3 justify-between border-b-2 p-2 rounded-lg ${getBgColor(
                order.status,
              )}`}
            >
              <p className={"text-nowrap"}>{order.name}</p>
              <p>{order.phone}</p>
              <p className={"text-nowrap"}>{order.location}</p>
              <p>P: {order.isPreOrder ? "Yes" : "No"}</p>
              <p>D: {order.deliveryDate.getDate()}</p>
              {order.prevId && (
                <Link
                  href={`/admin/orders/${order.prevId}`}
                  className={"underline"}
                >
                  Prev
                </Link>
              )}
              <p>I: {ip_hash[order.ipAddr || "false"]}</p>
              <p>U: {ip_hash[order.userId || "false"]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
