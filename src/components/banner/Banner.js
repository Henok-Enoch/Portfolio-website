import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { profile } from "../../assets/index"

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed:10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="w-full h-[800px] pb-10 flex flex-col  gap 2 xl:gap-10 xl:gap-0 lgl:flex-row 
              border-b-[1px] border-b-black font-titleFont text-white"
    >
      <div className="w-full lgl:w-1/2 flex flex-col gap-5 lgl:gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="w-full py-5 lgl:py-20 flex items-center border-b-[1px] border-b-black text-white">
            {" "}
            WELCOME TO MY PAGE{" "}
          </h4>
          <h1 className="text-3xl lgl:text-6xl font-bold text-white">
            Hi, I'm
            <span className="text-designColor capitalize"> Henok</span>
          </h1>
          <h2 className="text-2xl lgl:text-4xl font-bold text-white">
            a <span> {text} </span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I'm a Full Stack Developer with 6 years of experience in
            React and Node.js. I have a proven track record of delivering
            responsive and cross-browser web applications, proficient
            in HTML, CSS, JavaScript, React, and Redux, and worked
            with various libraries and frameworks such as Bootstrap, Material
            UI, TailwindCSS, and ExpressJs. Have experience in working with
            MongoDB, Mongoose, and RESTful APIs.
          </p>
        </div>

        <div className="flex flex col xl:flex-row gap-6 lgl:gap-0 justify-between">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Find me in
            </h2>
            <div className="flex gap-1 xl:gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bannerIcon">
                  {" "}
                  <FaFacebookF />{" "}
                </span>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <span className="bannerIcon">
                  {" "}
                  <FaTwitter />{" "}
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/henok-enoch-444a40275/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bannerIcon">
                  {" "}
                  <FaLinkedinIn />{" "}
                </span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              Best Skill On
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                {" "}
                <FaReact />{" "}
              </span>
              <span className="bannerIcon">
                {" "}
                <SiNextdotjs />
              </span>
              <span className="bannerIcon">
                {" "}
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                {" "}
                <SiFigma />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2 flex justify-center items-center ">
        <img
          className="w-[300px] h-[300px] lgl:w-[400px] lgl:h-[500px]  rounded-full z-0 opacity-75"
          src={profile}
          alt="bannerImg"
        />
        {/*<div className="absolute bottom-0 w-[700px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] 
      shadow-shadowOne flex justify-center items-center">
  </div>*/}
      </div>
    </section>
  );
}

export default Banner
