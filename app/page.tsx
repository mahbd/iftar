import Image from "next/image";
import Link from "next/link";
import OurItemsSection from "@/app/(sections)/OurItems";
import OurPackagesSection from "@/app/(sections)/OurPackages";
import TeamMembers from "@/app/(sections)/TeamMembers";
import Head from "next/head";
import { Hero } from "@/components/Hero";
import OrderButtons from "@/components/OrderButtons";

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

      <OrderButtons />

      <OurItemsSection />

      <OurPackagesSection />

      <h2 className="text-center mt-5 font-bold text-3xl md:text-5xl text-white drop-shadow-md bg-orange-400 p-2 pb-3 rounded-lg">
        Our Mission
      </h2>
      <p className="text-black text-justify p-3 bg-white/30 pb-5">
        আমাদের লক্ষ্য হলো রমজানের পবিত্রতাকে সম্মান জানিয়ে স্বাস্থ্যকর, মানসম্মত
        ও সাশ্রয়ী ইফতার সরবরাহ করা, যা স্বাদ, পুষ্টি ও পরিচ্ছন্নতার নিশ্চয়তা
        প্রদান করে। আমরা বিশ্বাস করি, ইফতার শুধুমাত্র একটি খাবার নয়; এটি একসঙ্গে
        উপভোগের আনন্দ, স্বাস্থ্যকর অভ্যাস গড়ে তোলা এবং সময়ের সঠিক ব্যবস্থাপনার
        একটি গুরুত্বপূর্ণ অংশ। তাই, আমরা বিশুদ্ধ উপকরণ, ঘরোয়া স্বাদ ও
        ঝামেলামুক্ত ডেলিভারি নিশ্চিত করতে প্রতিজ্ঞাবদ্ধ। এই উদ্যোগ শুধু একটি
        ব্যবসা নয়, বরং এটি আমাদের জন্য একটি শিক্ষামূলক অভিজ্ঞতা, যা ভবিষ্যতে
        উদ্যোক্তা হওয়ার পথে অনুপ্রেরণা জোগাবে এবং মানসম্মত সেবা প্রদানের
        সংস্কৃতি গড়ে তুলতে সহায়তা করবে। আমরা গুণগত মান, বিশ্বস্ততা ও গ্রাহক
        সন্তুষ্টিকে অগ্রাধিকার দিয়ে রমজানের ইফতার অভিজ্ঞতাকে আরও সহজ, সুবিধাজনক
        ও উপভোগ্য করে তুলতে প্রতিশ্রুতিবদ্ধ।
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
