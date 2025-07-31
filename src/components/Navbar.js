import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
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
      <motion.div
        className="mr-28"
        whileInView={{ opacity: 1, x: 10 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 1 }}
      >
        <ul className="m-8 flex items-center justify-center gap-9 text-3xl ">
          <li className="hover:text-white">
            <FaLinkedin />
          </li>
          <li className="hover:text-red-500">
            <FaGithub />
          </li>
          <li className="hover:text-purple-500">
            <FaInstagram />
          </li>
          <li className="hover:text-blue-500">
            <FaTwitter />
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
