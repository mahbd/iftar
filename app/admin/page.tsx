import Link from "next/link";

const AdminDashboardPage = () => {
  return (
    <div className={"p-2"}>
      <h1 className={"text-center font-bold text-2xl"}>Admin Panel</h1>
      <div className={"flex flex-col space-y-2 items-center mt-10"}>
        <Link href={"/admin/orders"} className={"underline font-bold"}>
          Orders
        </Link>
        <Link href={"/admin/users"} className={"underline font-bold"}>
          Users
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
