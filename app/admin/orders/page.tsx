import prisma from "@/prisma/client";
import { Suspense } from "react";
import SearchBar from "@/app/admin/SearchBar";

interface OrderPageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

const OrderPage = async ({ searchParams }: OrderPageProps) => {
  let orFilters = {};
  const search = (await searchParams).search;

  if (search) {
    const queries = search.split(",").filter(Boolean);

    // Create an array of filter objects for each query.
    orFilters = queries
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
      .filter(Boolean);
  }

  const orders = await prisma.order.findMany({
    where: {
      // @ts-expect-error - Prisma Client is not typed.
      OR: orFilters,
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
      </Suspense>
      <div className={"flex flex-col gap-2 mt-5"}>
        {orders.map((order) => (
          <div
            key={order.id}
            className={
              "flex gap-3 justify-between overflow-x-auto border-b-2 bg-white/50 p-2 rounded-lg"
            }
          >
            <p className={"text-nowrap"}>{order.name}</p>
            <p>{order.phone}</p>
            <p className={"text-nowrap"}>{order.location}</p>
            <p>{order.isPreOrder ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
