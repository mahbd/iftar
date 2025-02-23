import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductCard from "@/components/ProductCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export default function OurItemsSection() {
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
      <h2 className="text-center mt-5 font-bold text-3xl md:text-5xl text-white drop-shadow-md">
        Our Items
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} variants={itemVariants}>
            <ProductCard
              image={"/images/ramadan-banner.jpg"}
              name={"Ginger"}
              description={"Very Tasty ginger"}
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
