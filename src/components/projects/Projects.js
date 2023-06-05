import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../../assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-3 lgl:py-10 border-b-[1px] border-b-black text-white"
    >
      <div className="flex justify-center items-center texts-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Social Media Clone"
          des="Et et takimata duo duo dolore voluptua ea vero est, dolores et elitr voluptua et et et ipsum, ipsum invidunt."
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Et et takimata duo duo dolore voluptua ea vero est, dolores et elitr voluptua et et et ipsum, ipsum invidunt."
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des="Et et takimata duo duo dolore voluptua ea vero est, dolores et elitr voluptua et et et ipsum, ipsum invidunt."
          src={projectTwo}
        />
        <ProjectsCard
          title="Social Media Clone"
          des="Et et takimata duo duo dolore voluptua ea vero est, dolores et elitr voluptua et et et ipsum, ipsum invidunt."
          src={projectThree}
        />
        <ProjectsCard
          title="Social Media Clone"
          des="Et et takimata duo duo dolore voluptua ea vero est, dolores et elitr voluptua et et et ipsum, ipsum invidunt."
          src={projectThree}
        />
        <ProjectsCard
          title="Social Media Clone"
          des="Et et takimata duo duo dolore voluptua ea vero est, dolores et elitr voluptua et et et ipsum, ipsum invidunt."
          src={projectOne}
        />
      </div>
    </section>
  );
};

export default Projects;
