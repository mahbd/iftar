import ContactInformation from "@/components/ContactInformation";
import { auth } from "@/prisma/auth";
import prisma from "@/prisma/client";
import Head from "next/head";
import SignInUser from "@/app/contact/SignInUser";

const ContactPage = async () => {
  const session = await auth();
  const user =
    session &&
    (await prisma.user.findUnique({
      where: {
        id: session.user?.id,
      },
    }));

  if (!session || !user) {
    return <SignInUser />;
  }
  if (user.isSpammer) {
    return (
      <div className={"flex h-screen justify-center items-center"}>
        <Head>
          <title>
            Enter Contact Information | Iftar Delights - Ramadan-exclusive Food
            Delivery Service
          </title>
        </Head>
        <h1 className={"text-lg md:text-2xl font-bold text-red-700"}>
          Spam Detected
        </h1>
        <p>
          We detected spam activity from your account. Please contact{" "}
          <a href="tel:+8801567953635">+8801567953635</a> If you think this is
          an mistake
        </p>
      </div>
    );
  }

  return (
    <div className={"flex flex-col h-screen justify-center items-center gap-5"}>
      <ContactInformation
        prevName={user.name}
        prevMobile={user.phone}
        prevLocation={user.location}
      />
    </div>
  );
};

export default ContactPage;
