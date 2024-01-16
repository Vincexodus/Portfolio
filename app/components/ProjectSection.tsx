import React from "react";
import { projects } from "./constants";

const ProjectSection = () => {
  const wrapperStyle = "border-4 border-white group hover:bg-white transition-colors duration-500";
  const imgStyle = "transition-transform duration-500 ease-in-out group-hover:scale-125";
  const titleStyle = "py-1 font-bold text-center transition-colors duration-500 group-hover:text-[#202023]";
  const descStyle = "p-2 text-justify transition-colors duration-500 group-hover:text-[#202023]";
  const dividerStyle = "border-2 border-white";

  const ProjectType: React.FC<{ category: string }> = ({ category }) => {
    const projectCategory = projects.find((projectCategory) => projectCategory.category === category);

    if (!projectCategory) {
      return null;
    }

    return (
      <>
        <h1 className="text-center py-5 mt-10">{projectCategory.category}</h1>
        <div className="w-4/5 grid grid-cols-4 m-auto gap-10">
          {projectCategory.items.map((project, index) => (
            <div key={index} className={wrapperStyle}>
              <a href={project.link} target="_blank">
                <div className="overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={`${project.title}.png`}
                    className={imgStyle}
                  />
                </div>
                <hr className={dividerStyle} />
                <h3 className={titleStyle}>{project.title}</h3>
                <p className={descStyle}>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <section className="py-10 my-10" id="project">
      {projects.map((categoryProjects) => (
        <ProjectType
          key={categoryProjects.category}
          category={categoryProjects.category}
        />
      ))}
    </section>
  );
};

export default ProjectSection;
