import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-10 lgl:py-20 border-b-[1px] border-b-black text-white"
    >
      <div className="flex justify-center font-bold items-center text-center">
        <Title title="CONTACT" des="Contact me." />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">

          <ContactLeft />
          <ContactRight />
  
        </div>
      </div>
    </section>
  );
};

export default Contact;
