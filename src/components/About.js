import AboutIMG from "../assets/projects/ai-image.webp";
import { ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3 } from "../utils/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={AboutIMG} alt="AboutMe" className="rounded-3xl h-[30rem]" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start mt-2 max-w-2xl py-4">
            <p>{ABOUT_TEXT_1}</p>
          </div>
          <div className="flex justify-center lg:justify-start mt-2 max-w-2xl py-4">
            <p>{ABOUT_TEXT_2}</p>
          </div>
          <div className="flex justify-center lg:justify-start mt-2 max-w-2xl py-4">
            <p>{ABOUT_TEXT_3}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
