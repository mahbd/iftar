import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import OurItemsSection from "@/app/(sections)/OurItems";
import OurPackagesSection from "@/app/(sections)/OurPackages";
import TeamMembers from "@/app/(sections)/TeamMembers";
import Head from "next/head";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className={"max-w-7xl"}>
      <Head>
        <title>Iftar Delights - Delicious & Hygienic Ramadan Meals</title>
        <meta
          name="description"
          content="Enjoy homemade and hygienic Iftar meals at Begum Rokeya University, Rangpur. Order delicious Ramadan delights now!"
        />
        <meta
          name="keywords"
          content="Iftar, Ramadan, homemade food, Begum Rokeya University, Rangpur, food delivery"
        />
        <meta name="author" content="Iftar Delights Team" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="Iftar Delights - Delicious & Hygienic Ramadan Meals"
        />
        <meta
          property="og:description"
          content="Enjoy homemade and hygienic Iftar meals at Begum Rokeya University, Rangpur."
        />
        <meta property="og:image" content="/images/iftar-delights.jpg" />
        <meta property="og:url" content="https://brur-iftar.me" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Iftar Delights - Delicious & Hygienic Ramadan Meals"
        />
        <meta
          name="twitter:description"
          content="Enjoy homemade and hygienic Iftar meals at Begum Rokeya University, Rangpur."
        />
        <meta name="twitter:image" content="/images/iftar-delights.jpg" />
      </Head>

      <h1 className="text-center mb-5 font-bold text-3xl md:text-5xl text-white drop-shadow-md bg-orange-400 p-2 pb-3 rounded-lg">
        Iftar Delights
      </h1>
      <Hero />
      <div className={"flex justify-center mt-16 md:mb-10"}>
        <Link href={"/order"}>
          <Button
            size={"xxl"}
            variant={"destructive"}
            className="animate-float hover:scale-105 transition-transform shadow-xl text-lg"
          >
            ✨ Order Now ✨
          </Button>
        </Link>
      </div>

      <div className={"flex justify-center mb-10 mt-10 md:mb-24"}>
        <Link href={"/order?preorder=true"}>
          <Button
            size={"xxl"}
            variant={"destructive"}
            className="animate-float hover:scale-105 transition-transform shadow-xl text-lg"
          >
            ✨ Pre Order Now ✨
          </Button>
        </Link>
      </div>

      <OurItemsSection />

      <OurPackagesSection />

      <h2 className="text-center mt-5 font-bold text-3xl md:text-5xl text-white drop-shadow-md bg-orange-400 p-2 pb-3 rounded-lg">
        Our Mission
      </h2>
      <p className="text-black text-justify p-3 bg-white/30 pb-5">
        বর্তমানের এই যান্ত্রিক যুগ এবং আর্টিফিশিয়াল ও ভেজালযুক্ত খাবারের আড়ালে
        আমরা ঘরোয়া এবং সাস্থ্যকর খাবারের স্বাদ প্রায় ভুলেই গিয়েছি। সেই ঘরোয়া
        স্বাদ আবারও ফিরিয়ে আনতে বেগম রোকেয়া বিশ্ববিদ্যালয়ের শিক্ষার্থীদের
        উদ্যোগে আপনাদের জন‍য চলে এলো ইফতার ডিলাইট। রমজান তো চলেই এলো। আর এই
        রমজানের ইফতারটা আপনার সাধ‍যের মাঝে আরেকটু স্পেশাল আর মসলাদার করতে আমারা
        নিয়ে এসেছি ইফতারের সকল ধরনের আয়োজন যেমন লাচ্ছি থেকে শুরু করে পিয়াজু,
        বেগুনি, আলুর চপ, ছোলা বুন্দিয়া সহ আরও অনেক কিছু। এছাড়াও স্পেশাল এডিশন
        হিসেবে পাচ্ছেন সিঙ্গেল ও কাপল প্লেটার যেখানের প্রতিটি আইটেম কাস্টমাইজের
        সুযোগ থাকছে। এছাড়াও ১০০ টাকার উপরে অর্ডার করলে ৫% ডিসকাউন্ট তো থাকছেই।
        বাজেট ফ্রেন্ডলি খাবারের সাথে পরিচ্ছন্নতা বজায় রেখে কুয়ালিটিফুল খাবার
        আপনাদের কাছে পৌঁছে দেওয়াই আমাদের প্রধান উদ্দেশ্য।
      </p>

      <TeamMembers />

      <h2 className="text-center mt-5 font-bold text-3xl md:text-5xl text-white drop-shadow-md bg-orange-400 p-2 pb-3 rounded-lg">
        Coming Soon...
      </h2>
      <div className={"flex flex-col items-center mt-5"}>
        <Link href={"https://www.facebook.com/share/15UQ3KtMF6/"}>
          <Image
            src={"/images/canvas-banner.jpg"}
            alt={"fjdslajkflldskjf"}
            height={"1024"}
            width={"1920"}
            className={"h-48 w-96 rounded-lg"}
          />
          <p
            className={"-mt-24 mb-20 text-4xl font-bold text-white text-center"}
          >
            Threads of Arts
          </p>
        </Link>
      </div>
      <footer className={"grid grid-cols-2 md:grid-cols-3 py-5 bg-black/40"}>
        <div
          className={
            "text-center text-white bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text"
          }
        >
          <h2 className={"text-2xl font-bold"}>Contact Us</h2>
          <p>Phone: +8801522106307</p>
          <p>
            Email:{" "}
            <a href="mailto:mahmudula2000@gmail.com">mahmudula2000@gmail.com</a>
          </p>
        </div>
        <div
          className={
            "text-center text-white bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text"
          }
        >
          <h2 className={"text-2xl font-bold"}>Address</h2>
          <p>Main Gate</p>
          <p>Begum Rokeya University, Rangpur</p>
        </div>
        <div
          className={
            "text-center text-white bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text hidden md:block"
          }
        >
          <h2 className={"text-2xl font-bold"}>Miscellaneous</h2>
          <Link href={"/privacy"}>
            <p>Privacy Policy</p>
          </Link>
          <Link href={"/terms"}>
            <p>Terms and Conditions</p>
          </Link>
          <Link href={"/delete-guideline"}>
            <p>Delete Guideline</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}
