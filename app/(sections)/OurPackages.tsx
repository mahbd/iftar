import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PackageCard from "@/components/PackageCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
};

export default function OurPackagesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it enters view
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <motion.section
      ref={ref}
      className="mx-2 mt-5 md:mt-24"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2 className="text-center mt-5 md:mt-16 font-bold text-3xl md:text-5xl text-white drop-shadow-md">
        Our Packages
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: i * 0.2 }}
          >
            <PackageCard
              image={"/images/ramadan-banner.jpg"}
              name={i === 0 ? "Single" : "Couple"}
              description={"Special Ramadan Package"}
              price={12}
              discountedPrice={12}
              className="hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
