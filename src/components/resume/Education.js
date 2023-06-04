import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="w-full flex gap-20">
      <div className="w-1/2">
      <div className="py-12 font-titleFont">
      <p className="text-sm text-designColor tracking-[4px]">
      2006-2016
      </p>
      <h2 className="text-4xl font-bold">Education</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black
            border-opacity-30 flex flex-col gap-10">
      <ResumeCard 
        title="Master's Degree"
        SubTitle="University of "
        result="3.4/4"
        des="an intensive master degree program that can enable students to enrich themselves in various cross-sectional knowledge...."
      />
      <ResumeCard 
      title="Bachelor Degree"
      subTitle="University from 2008-2013"
      result="3.5/4"
      des=" Bachelor Degree"
      />
      <ResumeCard 
      title="Secondary School Education"
      subTitle="Preparatory School"
      result="3.5/4"
      des="Secondary education and University preparation school that take four years"
      />
      </div>
    </div>
      <div className="w-1/2">
         <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
          2017-2023
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
         </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black
            border-opacity-30 flex flex-col gap-10">
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
      </div>
      </motion.div>
  )
}

export default Education
