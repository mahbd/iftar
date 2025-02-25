"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Spinner from "@/components/Spinner";

const SignInUser = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      signIn("google", { redirect: true, redirectTo: "/contact" }).then(
        () => {},
      );
    }, 5000);
  }, []);
  return (
    <div className={"flex flex-col h-screen justify-center items-center"}>
      <h1
        className={"font-bold text-center text-lg md:text-2xl text-green-900"}
      >
        Verify Identity
      </h1>
      {loading && <Spinner sz={"lg"} />}
      <p className={"text-center max-w-7xl px-3"}>
        To reduce spam order we need to verify your identity. Please login with
        google to verify your identity in the next page. Please click{" "}
        <Link href={"/api/auth/signin?callbackUrl=/contact"}>here</Link> if not
        redirected automatically.
      </p>
    </div>
  );
};

export default SignInUser;
