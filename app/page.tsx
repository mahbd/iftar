"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import OurItemsSection from "@/app/(sections)/OurItems";
import OurPackagesSection from "@/app/(sections)/OurPackages";
import TeamMembers from "@/app/(sections)/TeamMembers";

export default function Home() {
  return (
    <div>
      <div
        className={
          " bg-cyan-600 p-2 backdrop-blur-lg shadow-xl rounded-lg my-3"
        }
      >
        <h1 className="text-white bg-clip-text text-transparent text-4xl md:text-6xl font-bold text-center">
          Iftar Delights
        </h1>
      </div>
      <Image
        src={"/images/ramadan-banner.jpg"}
        alt={"Ramadan Banner"}
        width={1920}
        height={1020}
        className="md:mb-32 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
      />
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

      <OurItemsSection />

      <OurPackagesSection />

      <h2 className="text-center mt-5 font-bold text-3xl md:text-5xl text-white drop-shadow-md bg-orange-400 p-2 pb-3 rounded-lg">
        Our Mission
      </h2>
      <p className="text-black text-justify p-3 bg-white/30 pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum repellat
        sequi vero. Ab architecto delectus deserunt, expedita mollitia provident
        quisquam sequi. A asperiores autem deleniti distinctio eligendi, magnam
        mollitia numquam optio perspiciatis ratione reiciendis, rem velit
        voluptatum? Alias, animi atque, dolores dolorum fugiat harum iusto
        mollitia neque quos similique, soluta ut velit. A animi debitis
        distinctio doloremque dolores eos esse harum labore obcaecati quae quia,
        rem sequi soluta tempore veritatis voluptate voluptatibus. Autem,
        distinctio fugiat praesentium provident quasi temporibus voluptate. Amet
        animi aperiam at consequuntur dolore doloremque, iure labore, minus
        molestiae nobis non nulla pariatur perferendis ratione saepe veritatis
        voluptates?
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
