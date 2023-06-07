import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div className="w-full">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2006-2016</p>
          <h2 className="text-4xl font-bold">Education</h2>
        </div>
        <div
          className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black
            border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Front End Developer"
            SubTitle="Walmart----USA"
            result="July 2020-Present"
            des="Day-to-day activities of developer on feature, bug, performance, analysis and design tasks.
                 Agile environment and participating in daily standup, planning and retro, and more.
                 Meeting with project managers/owners, testers, and team to discuss project planning, 
                 resource allocation, and evaluation of stories."
          />
          <ResumeCard
            title="GEICO-----USA"
            subTitle="Front End Developer"
            result="April 2017-July 2020"
            des=" Building applications, payment portals, 
                 and chat boxes with React and Redux through building reusable components, native state management, and hierarchical authentication."
          />
          <ResumeCard
            title="Freddie Mac---USA"
            subTitle="Junior Web Developer"
            result="September 2016-April 2017"
            des="Javascript, HTML, and CSS implementation for designated page implementation Information gathering and analysis."
          />
        </div>
      </div>
      {/*<div className="w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2017-2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div
          className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black
            border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Front-end Developer"
            subTitle="Company Name"
            result="Country"
            des="description of What I did in the companys, rols and tasks"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Company Name"
            result="Country"
            des="description of What I did"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Company Name"
            result="Country"
            des="description of What I did"
  />
        </div> 
      </div>*/}
    </motion.div>
  );
};

export default Experience;
