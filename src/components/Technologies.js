import { RiReactjsLine, RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-500 pb-24">
      <h1 className="my-20 text-center text-4xl ">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNextjsLine className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-red-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandCpp className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRedux className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
