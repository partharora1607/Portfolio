import { PROJECTS } from "../utils/constants";
import netflix from "../assets/projects/Netflix-1.png";
import food from "../assets/projects/food.png";
import youtube from "../assets/projects/youtube.png";
import aiImage from "../assets/projects/ai-image.webp";
import finsight from "../assets/projects/FinSight.png";
import gymlog from "../assets/projects/GymLog.png";
import videoCaptioning from "../assets/projects/Video Captioning.png";

import { motion } from "framer-motion";

const Projects = () => {
  const getImage = (imageSrc) => {
    const imageMap = {
      netflix: netflix,
      food: food,
      youtube: youtube,
      "ai-image": aiImage,
      "finsight": finsight,
      "gymlog": gymlog,
      "videocaptioner": videoCaptioning,
    };
    
    return imageMap[imageSrc] || aiImage;
  };

  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <img
              src={getImage(project.image_src)}
              alt={project.title}
              className="w-[80%] mb-8 rounded-lg"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 20 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold flex items-center gap-2">
              {project.title}
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  title="View on GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </h6>
            <h6 className="mb-4 text-neutral-400">{project.description}</h6>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => {
                return (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
