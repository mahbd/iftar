import prisma from "@/prisma/client";
import OrderActions from "@/app/admin/orders/[id]/OrderActions";
import Sensitive from "@/app/admin/orders/[id]/Sensitive";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const OrderPage = async ({ params }: Props) => {
  const id = (await params).id;
  const order = await prisma.order.findUnique({
    where: {
      id: id,
    },
    include: {
      orderedItems: true,
      user: true,
    },
  });
  const sameIpToday = await prisma.order.count({
    where: {
      ipAddr: order?.ipAddr,
      createdAt: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
      },
    },
  });
  const sameUserToday = await prisma.order.count({
    where: {
      userId: order?.userId,
      createdAt: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
      },
    },
  });
  const sameIpTotal = await prisma.order.count({
    where: {
      ipAddr: order?.ipAddr,
    },
  });
  const previousOrders = await prisma.order.findMany({
    where: {
      userId: order?.userId,
      id: {
        not: order?.id,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!order) {
    return <div>Order not found</div>;
  }
  return (
    <div className={"p-2"}>
      <h1 className={"text-center"}>Order {order.id}</h1>
      <div className={"mt-5"}>
        <h2 className={"font-bold text-lg"}>Items</h2>
        <div>
          {order.orderedItems.map((item) => (
            <p key={item.id}>
              <span className={"font-bold"}>{item.name}: </span>
              {item.price}
            </p>
          ))}
          <p>
            <span className={"font-bold"}>Total:</span> {order.finalPrice}
          </p>
          <p>
            <span className={"font-bold"}>Status:</span> {order.status}
          </p>
        </div>
      </div>
      <div className={"mt-5"}>
        <h2 className={"font-bold text-lg"}>Customer Details</h2>
        <div>
          <p>
            <span className={"font-bold"}>Name:</span> {order.name}
          </p>
          <p>
            <span className={"font-bold"}>Phone:</span> {order.phone}
          </p>
          <p>
            <span className={"font-bold"}>Email:</span> {order.user?.email}
          </p>
          <p>
            <span className={"font-bold"}>Location:</span> {order.location}
          </p>
          <Sensitive text={order.user?.deviceInfo || ""} />
        </div>
      </div>
      <div className={"mt-5"}>
        <h2 className={"font-bold text-lg"}>Stats</h2>
        <div>
          <p>
            <span className={"font-bold"}>Same IP Today:</span> {sameIpToday}
          </p>
          <p>
            <span className={"font-bold"}>Same IP Total:</span> {sameIpTotal}
          </p>
          <p>
            <span className={"font-bold"}>Same User Today:</span>{" "}
            {sameUserToday}
          </p>
          <p>
            <span className={"font-bold"}>Same User Total:</span>{" "}
            {previousOrders.length}
          </p>
        </div>
      </div>
      <div className={"mt-10"}>
        <OrderActions id={id} />
      </div>
      <div className={"mt-5"}>
        <h2 className={"font-bold text-lg"}>Previous Orders</h2>
        <div className={"flex flex-col space-y-2"}>
          {previousOrders.map((order) => (
            <div key={order.id} className={"bg-white/30 p-2 rounded-lg"}>
              <div className={"flex gap-5"}>
                <p>
                  <span className={"font-bold"}>Date:</span>{" "}
                  {order.createdAt.toDateString()}
                </p>
                <p>
                  <span className={"font-bold"}>Time:</span>{" "}
                  {order.createdAt.toLocaleTimeString()}
                </p>
              </div>

              <p>
                <span className={"font-bold"}>Total:</span> {order.finalPrice}
              </p>
              <p>
                <span className={"font-bold"}>Name:</span> {order.name}
              </p>
              <p>
                <span className={"font-bold"}>Location:</span> {order.location}
              </p>
              <p>
                <span className={"font-bold"}>Phone:</span> {order.phone}
              </p>
              <p>
                <span className={"font-bold"}>IP:</span> {order.ipAddr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
