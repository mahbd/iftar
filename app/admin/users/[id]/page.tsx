import prisma from "@/prisma/client";
import SpammerActions from "@/app/admin/users/[id]/SpammerActions";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const UserPage = async ({ params }: Props) => {
  const id = (await params).id;
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      orders: true,
    },
  });
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div className={"p-2"}>
      <h1 className={"text-center"}>User {user.id}</h1>
      <div className={"mt-5"}>
        <h2 className={"font-bold text-lg"}>Details</h2>
        <div className={"flex flex-col"}>
          <p>
            <span className={"font-bold"}>Name:</span> {user.name}
          </p>
          <p>
            <span className={"font-bold"}>Email:</span> {user.email}
          </p>
          <p>
            <span className={"font-bold"}>Phone:</span> {user.phone}
          </p>
          <p>
            <span className={"font-bold"}>Location:</span> {user.location}
          </p>
          <p>
            <span className={"font-bold"}>Spammer:</span>{" "}
            {user.isSpammer ? "Yes" : "No"}
          </p>
          <p>
            <span className={"font-bold"}>Device Info:</span> {user.deviceInfo}
          </p>
        </div>
      </div>
      <div className={"mt-5"}>
        <h2 className={"font-bold text-lg"}>Actions</h2>
        <SpammerActions id={user.id} />
      </div>
      <div className={"mt-5"}>
        <h2 className={"font-bold text-lg"}>Orders</h2>
        <div className={"flex flex-col space-y-2"}>
          {user.orders.map((order) => (
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

export default UserPage;
