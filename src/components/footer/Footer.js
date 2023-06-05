import React from "react";
import { me } from "../../assets/index";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 px-40 lgl:px-0">
      <div className="w-full h-full flex flex-col gap-4 lgl:gap-8">
        <img
          style={{ borderRadius: "50%", height: "100px" }}
          className="w-32"
          src={me}
          alt="logo"
        />
        <div className="flex gap-1 xl:gap-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
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
      <div className="w-full h-full text-white">
        <h3 className=" text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-2 lgl:gap-4 font-titleFont font-medium py-3 lgl:py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              Portfolio
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Services
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Blog
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Contact
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="text-white w-full h-full">
        <h3 className=" text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Authentication
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              System Status
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Terms of Services
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Pricing
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Over Right
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="text-white w-full h-full">
        <h3 className=" text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Documentation
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Authentication
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <a
            href="https://react.dev/reference/react"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
                API Reference
                <span
                  className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
                ></span>
              </span>
            </li>
          </a>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Support
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer group relative">
              Open Source
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] 
              group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
