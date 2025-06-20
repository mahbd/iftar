import Head from "next/head";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  searchParams: Promise<{
    orderId?: string;
  }>;
}

const Page = async ({ searchParams }: Props) => {
  const orderId = (await searchParams).orderId;
  return (
    <div className={"flex flex-col h-screen justify-center items-center"}>
      <Head>
        <title>
          Order Placed | Iftar Delights - Ramadan-exclusive Food Delivery
          Service
        </title>
      </Head>
      <h1
        className={
          "font-bold text-center text-lg md:text-2xl text-green-900 px-3"
        }
      >
        Order placed successfully
      </h1>
      <p className={"text-center"}>
        Your order has been created successfully. Our team will contact you soon
        by phone.
      </p>
      <p className={"text-center text-4xl font-bold mt-3"}>
        Order Id:{" "}
        <span className={"font-bold bg-white p-2 rounded-lg"}>{orderId}</span>
      </p>
      <Link href={"/"} className={"mt-3"}>
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default Page;
