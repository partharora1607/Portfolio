import { PROJECTS } from "../utils/constants";
import netflix from "../assets/projects/Netflix-1.png";
import food from "../assets/projects/food.png";
import youtube from "../assets/projects/youtube.png";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div className="mb-8 flex lg:justify-center">
        <div className="w-full lg:w-1/2">
          <img src={netflix} className="w-[80%] mb-8 rounded-lg" />
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">{PROJECTS[0].title}</h6>
          <h6 className="mb-4 text-neutral-400">{PROJECTS[0].description}</h6>
          {PROJECTS[0].technologies.map((tech, idx) => {
            return (
              <span key={idx} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm  font-medium text-purple-900">
                {" "}
                {tech}
              </span>
            );
          })}
        </div>
      </div>
      <div className="mb-8 flex lg:justify-center">
        <div className="w-full lg:w-1/2">
          <img src={food} className="w-[80%] mb-8 rounded-lg" />
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">{PROJECTS[1].title}</h6>
          <h6 className="mb-4 text-neutral-400">{PROJECTS[1].description}</h6>
          {PROJECTS[1].technologies.map((tech, idx) => {
            return (
              <span key={idx} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm  font-medium text-purple-900">
                {" "}
                {tech}
              </span>
            );
          })}
        </div>
      </div>
      <div className="mb-8 flex lg:justify-center">
        <div className="w-full lg:w-1/2">
          <img src={youtube} className="w-[80%] mb-8 rounded-lg" />
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">{PROJECTS[2].title}</h6>
          <h6 className="mb-4 text-neutral-400">{PROJECTS[2].description}</h6>
          {PROJECTS[2].technologies.map((tech, idx) => {
            return (
              <span key={idx} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm  font-medium text-purple-900">
                {" "}
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
