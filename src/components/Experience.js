import { EXPERIENCE } from "../utils/constants";
import { motion } from "framer-motion";
import Deloitte_IMG from "../assets/projects/Deloitte.png";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div>
        {/* Deloitte Full-Time */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-1 text-sm text-neutral-400">Jan 2025 – Present</p>
            <p className="mb-2 text-sm text-neutral-400">
              Full-Time (Onsite) – Gurugram, Haryana, India
            </p>
          </motion.div>
          <motion.div
            className="w-full max-w-xl lg:w-3/4"
            whileInView={{ opacity: 1, x: 30 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h6 className="mb-2 font-semibold flex items-center gap-2">
              <img src={Deloitte_IMG} alt="Deloitte" className="h-10" /> 
              <span className="text-xl text-purple-100">Deloitte</span>
              - Analyst (Technology & Transformation)
            </h6>
            <p className="mb-2 text-neutral-400">
              Engineered and tested RESTful APIs, ensuring proper validation and seamless integration across systems.
            </p>
            <p className="mb-2 text-neutral-400">
              Performed comprehensive end-to-end API testing including request–response lifecycle, headers, payloads, and status codes.
            </p>
            <p className="mb-2 text-neutral-400">
              Managed databases for data verification, consistency checks, and issue resolution.
            </p>
            <p className="mb-2 text-neutral-400">
              Validated business logic, edge cases, and data flow across multiple services and systems.
            </p>
            <p className="mb-2 text-neutral-400">
              Used GitHub for version control, working with branches, pull requests, and code reviews.
            </p>
            <p className="mb-2 text-neutral-400">
              Resolved API failures, data mismatches, and integration issues through systematic debugging and troubleshooting.
            </p>
            <div className="mt-2">
              {[
                "RESTful API",
                "API Testing",
                "Database Management",
                "GitHub",
                "System Integration",
                "Debugging",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="mr-2 mt-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Deloitte Internship */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-1 text-sm text-neutral-400">Aug 2024 – Jan 2025</p>
            <p className="mb-2 text-sm text-neutral-400">
              Internship (Onsite) – Gurugram, Haryana, India
            </p>
          </motion.div>
          <motion.div
            className="w-full max-w-xl lg:w-3/4"
            whileInView={{ opacity: 1, x: 30 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h6 className="mb-2 font-semibold flex items-center gap-2">
              <img src={Deloitte_IMG} alt="Deloitte" className="h-10" />
              <span className="text-xl text-purple-100">Deloitte</span> –
              AI & Data 
            </h6>
            <p className="mb-2 text-neutral-400">
              Worked as part of L4 AI & Data team, delivering intelligent automation solutions to enterprise clients.
            </p>
            <p className="mb-2 text-neutral-400">
              Developed automation solutions powered by agentic AI bots using Robocorp and Python.
            </p>
            <p className="mb-2 text-neutral-400">
              Built scalable automation workflows to streamline business processes and eliminate manual tasks.
            </p>
            <p className="mb-2 text-neutral-400">
              Designed and implemented Python-based automation scripts with modular architecture for maintainability.
            </p>
            <div className="mt-2">
              {["Python", "Robocorp", "Agentic AI", "Automation", "Intelligent Automation"].map(
                (tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mt-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Existing Experience Rendering */}
        {EXPERIENCE.map((exp, idx) => {
          return (
            <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 30 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
              </motion.div>
              <motion.div
                className="w-full max-w-xl lg:w-3/4"
                whileInView={{ opacity: 1, x: 30 }}
                initial={{ opacity: 0, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h6 className="mb-2 font-semibold">
                  <span className="text-xl text-purple-100">{exp.company}</span>{" "}
                  - {exp.role}
                </h6>
                {exp.description.map((des, idx) => (
                  <p className="mb-4 mt-2 text-neutral-400" key={idx}>
                    {des}
                  </p>
                ))}
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mt-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
