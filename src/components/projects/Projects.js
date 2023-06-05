import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  SocialMedia,
  BlogWebsite,
  Ecommerce,
  hotelReservation,
  Youtube,
  chat,
} from "../../assets";

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
          des="Social network application project using React, Node.js and MySQL. 
          Full-stack Social Media App with hooks, Context API, React-query, JWT, Cookies"
          src={SocialMedia}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="E-Commerce App with React, Strapi, Stripe"
          src={Ecommerce}
        />
        <ProjectsCard
          title="Chat App"
          des="Chat App using React and Firebase"
          src={chat}
        />
        <ProjectsCard
          title="Youtube Clone App"
          des="React Node.js, Redux, JWT, Cookies"
          src={Youtube}
        />
        <ProjectsCard
          title="Blog website"
          des="Using React, Node MongoDB REST API using Express framework."
          src={BlogWebsite} />
        <ProjectsCard
          title="Hotel Reservation App"
          des="Hotel Booking App using ReactJs"
          src={hotelReservation}
        />
      </div>
    </section>
  );
};

export default Projects;
