import Link from "next/link";

const AdminDashboardPage = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <Link href={"/admin/orders"}>Orders</Link>
      <Link href={"/admin/users"}>Users</Link>
    </div>
  );
};

export default AdminDashboardPage;
