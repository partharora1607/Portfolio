import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-shrink-0 items-center"
      >
        <h1 className="text-4xl">PA.</h1>
      </motion.div>
    </div>
  );
};

export default Navbar;
