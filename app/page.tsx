"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TeamMemberCard from "@/components/TeamMemberCard";
import OurItemsSection from "@/app/(sections)/OurItems";
import OurPackagesSection from "@/app/(sections)/OurPackages";

export default function Home() {
  return (
    <div>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-white p-2 text-center"
      >
        <div
          className={" bg-white/30 p-2 backdrop-blur-lg shadow-xl rounded-lg"}
        >
          <h1 className="bg-gradient-to-r from-green-400 via-green-100 to-green-400 bg-clip-text text-transparent text-4xl md:text-6xl font-bold">
            Blessed Ramadan
          </h1>
        </div>
      </motion.header>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="px-4 pt-5"
      >
        <Image
          src={"/images/ramadan-banner.jpg"}
          alt={"Ramadan Banner"}
          width={1920}
          height={1020}
          className="md:mb-32 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
      <motion.div
        className="flex justify-center mt-20 h-16"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Link href={"/order"}>
          <Button
            size={"xxl"}
            variant={"destructive"}
            className="animate-float hover:scale-105 transition-transform shadow-xl text-lg"
          >
            ✨ Order Now ✨
          </Button>
        </Link>
      </motion.div>

      <OurItemsSection />

      <OurPackagesSection />

      <motion.section
        initial={{ rotate: 180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring" }}
        className="text-center"
      >
        <h2 className="text-4xl mt-5 md:mt-16 md:text-6xl font-bold text-white bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent">
          Our Mission
        </h2>
        <p className="text-white text-justify p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          repellat sequi vero. Ab architecto delectus deserunt, expedita
          mollitia provident quisquam sequi. A asperiores autem deleniti
          distinctio eligendi, magnam mollitia numquam optio perspiciatis
          ratione reiciendis, rem velit voluptatum? Alias, animi atque, dolores
          dolorum fugiat harum iusto mollitia neque quos similique, soluta ut
          velit. A animi debitis distinctio doloremque dolores eos esse harum
          labore obcaecati quae quia, rem sequi soluta tempore veritatis
          voluptate voluptatibus. Autem, distinctio fugiat praesentium provident
          quasi temporibus voluptate. Amet animi aperiam at consequuntur dolore
          doloremque, iure labore, minus molestiae nobis non nulla pariatur
          perferendis ratione saepe veritatis voluptates?
        </p>
      </motion.section>

      <motion.section
        initial={{ rotate: 180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring" }}
        className="text-center p-2"
      >
        <h2 className="mt-5 md:mt-16 text-4xl md:text-6xl font-bold text-white bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent">
          Our Team
        </h2>
        <div className={"grid grid-cols-2 md:grid-cols-4 gap-3"}>
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </div>
      </motion.section>

      <motion.section
        initial={{ rotate: 180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring" }}
        className="text-center"
      >
        <h2 className="mt-5 md:mt-16 text-4xl md:text-6xl font-bold text-white bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent">
          Coming Soon...
        </h2>
        <div className={"flex justify-center"}>
          <Image
            src={"/images/canvas-banner.jpg"}
            alt={"fjdslajkflldskjf"}
            height={"1024"}
            width={"1920"}
            className={"h-48 w-96"}
          />
        </div>
      </motion.section>
    </div>
  );
}
