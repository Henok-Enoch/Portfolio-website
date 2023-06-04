import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { me } from "../../assets/index"

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed:10,
    delaySpeed: 2000,
  });
  return (
    <section id ="home" className="w-full h-[800px] pb-10 flex border-b-[1px] border-b-black font-titleFont text-white">
      <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
      <h4 className="w-full py-20 flex items-center border-b-[1px] border-b-black text-white"> WELCOME TO MY PAGE </h4>
      <h1 className="text-6xl font-bold text-white"> 
      Hi, I'm 
      <span className="text-designColor capitalize"> Henok</span>
      </h1>
      <h2 className="text-4xl font-bold text-white"> 
      a <span> {text} </span>
      <Cursor 
      cursorBlinking= "false"
      cursorStyle= "|"
      cursorColor='#ff014f'
      />
      </h2>
      <p className="text-base font-bodyFont leading-6 tracking-wide">
    I'm a Full stack Web Developer with a 6+ years experience in React. I have a strond foundation in front-end and back-end
     development and am skilled in creating user-friendly and responsive web applications using ReactJs.
     I'm specialized in JavaScript, Typescript, ReactJs, MongoDB, NodJs, Express, Tailwindcss and many more. 
      </p>
      </div>

      <div className ="flex justify-between">
      <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
      Find me in
      </h2>
      <div className="flex gap-4">
      <span className="bannerIcon"> <FaFacebookF /> </span>
      <span className="bannerIcon"> <FaTwitter /> </span>
      <span className="bannerIcon"> <FaLinkedinIn /> </span>
      </div>
      </div>
      <div >
      <h2 className="text-base uppercase font-titleFont mb-4">
      Best Skill On 
      </h2>
        <div className="flex gap-4">
        <span className='bannerIcon'> <FaReact /> </span>
         <span className='bannerIcon'> <SiNextdotjs /></span>
          <span className='bannerIcon'> <SiTailwindcss /></span>
           <span className='bannerIcon'> <SiFigma /></span>
        </div>
        </div>
      </div>
      </div>


      <div className="w-1/2 flex justify-center items-center ">
      <img 
      className="w-[600px] h-[700px] z-0 pl-20"
      src ={me} 
      alt ="bannerImg" 
      />
      {/*<div className="absolute bottom-0 w-[700px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] 
      shadow-shadowOne flex justify-center items-center">
  </div>*/}
      </div>

    </section>
  )
}

export default Banner
