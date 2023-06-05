import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets";

const ContactLeft = () => {
  return (
    <div
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[323272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne 
    flex flex-col gap-8 justify-center"
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col lgl:gap-4">
        <h3 className="text-3xl font-bold text-white"> Henok Encoh</h3>
        <p className="text-lg font-normal text-gray-400">
          Full-stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          {" "}
          You can contact me either by phone or email.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          {" "}
          Phone: <span className="text-lightText">(443) 343-2860</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">henok.frontend@gmail.com </span>
        </p>
      </div>
      <div className="flex flex-col lgl:gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4"> Find me in</h2>
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
    </div>
  );
}

export default ContactLeft
