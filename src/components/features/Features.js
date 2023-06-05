import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-auto lgl:h-[900px] py-3 xl:py-10 border-b-[1px] border-b-black text-white"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="App Development"
          des="Responsible for the development and implementation of 
          the UI & UX elements of a website or application. Translate 
          design mockups and wireframes into functional and interactive web pages."
          icon={<FaBars />}
        />
        <Card
          title="UX Design and Implementation"
          des="create responsive web designs that work seamlessly across diffrent devices
           and screen sizes."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Mobile App Development"
          des="Creating software applications designed to run on mobile devices."
          icon={<SiProgress />}
        />
        <Card
          title="Performance Optimization"
          des="improve website loading speed and user experience through techniques like code minification, 
          image optimization, lazy loading, and caching."
          icon={<FaMobile />}
        />
        <Card
          title="Testing and Debugging"
          des="use debugging tools, browser developer tools, and automated testing 
              frameworks to ensure the website functions as intended."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="working in hosting websites, transferring files using deployment methods and 
          continuous integration and continuous deployment pipelines(CI/CD)"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
