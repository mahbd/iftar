"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Spinner from "@/components/Spinner";
import { useSearchParams } from "next/navigation";
import { createUrlWithParams } from "@/lib/utils";

const SignInUser = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      signIn("google", {
        redirect: true,
        redirectTo: createUrlWithParams(searchParams, "/contact"),
      }).then(() => {});
    }, 5000);
  }, []);
  return (
    <div className={"flex flex-col h-screen justify-center items-center"}>
      <h1
        className={"font-bold text-center text-2xl md:text-4xl text-green-900"}
      >
        Verify Identity
      </h1>
      {loading && <Spinner sz={"lg"} />}
      <p className={"text-center max-w-7xl px-3 text-lg"}>
        {/* Bengali version */}
        <span className="block mb-2 font-medium">
          স্প্যাম অর্ডার কমাতে আমাদের আপনার পরিচয় যাচাই করতে হবে। পরবর্তী
          পৃষ্ঠায় আপনার পরিচয় যাচাই করতে গুগল দিয়ে লগইন করুন। যদি
          স্বয়ংক্রিয়ভাবে রিডাইরেক্ট না হয় তবে
          <Link
            href={`/api/auth/signin?callbackUrl=${createUrlWithParams(searchParams, "/contact")}`}
            className={"underline text-blue-800 mx-1"}
          >
            এখানে
          </Link>
          ক্লিক করুন।
        </span>

        {/* Divider */}
        <hr className="my-2 border-gray-300" />

        {/* English version */}
        <span className="block mt-2">
          To reduce spam order we need to verify your identity. Please login
          with google to verify your identity in the next page. Please click
          <Link
            href={`/api/auth/signin?callbackUrl=${createUrlWithParams(searchParams, "/contact")}`}
            className={"underline text-blue-800 mx-1"}
          >
            here
          </Link>
          if not redirected automatically.
        </span>
      </p>
    </div>
  );
};

export default SignInUser;
