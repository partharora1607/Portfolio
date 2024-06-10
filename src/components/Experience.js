import { EXPERIENCE } from "../utils/constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCE.map((exp, idx) => {
          return (
            <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  <span className="text-xl text-purple-100">{exp.company}</span> - {exp.role}
                </h6>
                {exp.description.map((des, idx) => {
                  return (
                    <p className="mb-4 mt-5 text-neutral-400" key={idx}>
                      {des}
                    </p>
                  );
                })}
                {exp.technologies.map((tech, idx) => {
                  return (
                    <span
                      key={idx}
                      className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 "
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
