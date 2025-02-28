import Head from "next/head";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  searchParams: Promise<{
    message?: string;
  }>;
}

const Page = async ({ searchParams }: Props) => {
  const message = (await searchParams).message;
  return (
    <div className={"flex flex-col h-screen justify-center items-center"}>
      <Head>
        <title>
          Order Failed | Iftar Delights - Ramadan-exclusive Food Delivery
          Service
        </title>
      </Head>
      <h1
        className={
          "font-bold text-center text-2xl md:text-4xl text-red-900 px-3"
        }
      >
        Order Failed
      </h1>
      <p className={"text-center text-lg font-bold p-2"}>{message}</p>
      <Link href={"/"} className={"mt-3"}>
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default Page;
