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
          title="Business Strategy"
          des="Erzem thudothlon the iunhum wklelue halal en mezuul kyt en halallal. Maraggun werethul fugwa kethwe viragnac hul bezzeg, ullyetuk thez."
          icon={<FaBars />}
        />
        <Card
          title="App Development"
          des="Ort weh wiedersehn so warum wo. Gefärbt du lieb trübhell gehn. Lange mit so du von dahinten junge sie hab."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Ort weh wiedersehn so warum wo. Gefärbt du lieb trübhell gehn. Lange mit so du von dahinten junge sie hab."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile App Development"
          des="Ort weh wiedersehn so warum wo. Gefärbt du lieb trübhell gehn. Lange mit so du von dahinten junge sie hab."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Ort weh wiedersehn so warum wo. Gefärbt du lieb trübhell gehn. Lange mit so du von dahinten junge sie hab."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Ort weh wiedersehn so warum wo. Gefärbt du lieb trübhell gehn. Lange mit so du von dahinten junge sie hab."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
