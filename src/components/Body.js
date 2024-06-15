import { BODY_TEXT } from "../utils/constants";
import parth from "../assets/projects/Parth_Profile.png";

import { motion } from "framer-motion";

const Body = () => {
  const container = (delay) => ({
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 10 }}
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Parth Arora
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, x: 10 }}
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, x: 10 }}
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {BODY_TEXT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={parth}
              alt="profile-pic"
              className="w-[50%] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
