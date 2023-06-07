import React from 'react'
import { useState } from 'react'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Title from '../layouts/Title'
import Slider from 'react-slick'
import { RiStarFill } from "react-icons/ri"
import {testimonialTwo, quote, TestimonialOne, TestimonialThree} from "../../assets";

function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="lgl:w-14 lgl:h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 
      flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    ><HiArrowRight /></div>
  );
}  
function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="lgl:w-14 lgl:h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 
      flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      {" "}
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
    const [dotActive, setDotActive] =useState(0);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      beforeChange: (prev, next) => {
        setDotActive(next);
      },
      appendDots: (dots) => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <ul style={{ 
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
           }}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={
            i === dotActive
            ? {
            width: "12px",
            height: "12px",
            color: "blue",
            background: "red",
            borderRadius: "50%",
            cursor: "pointer",
          }
        : {
        width: "12px",
        height: "12px",
        color: "blue",
        background: "gray",
        borderRadius: "50%",
        cursor: "pointer",  
    }
}
        >
        </div>
      ),
    };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black text-white"
    >
      <div className="flex justify-center font-bold items-center text-center">
        <Title title="What Supervisors Say" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div
                div
                className="w-full lgl:w-[35%] h-full bg-gradient-to-r from[#1e2024] to-[#2327b] p-8 rounded-lg shadow-shadowOne
              flex flex-col lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center"
              >
                <img
                  className="w-35 h-auto lgl:w-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold"> David Henry </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div
                  className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne 
                  p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8"
                >
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Operation Officer{" "}
                      </h3>
                      <p className=" text-base text-gray-400 mt-3"> </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-blue-400 font-medium tracking-wide leading-6">
                    Henok is an exceptional front-end developer who consistently
                    goes above and beyond to deliver high-quality work. His
                    attention to detail and creative problem-solving skills have
                    greatly contributed to the success of our projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div
                div
                className="w-full lgl:w-[35%] h-full bg-gradient-to-r from[#1e2024] to-[#2327b] p-8 rounded-lg shadow-shadowOne
              flex flex-col lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center"
              >
                <img
                  className="w-35 h-auto lgl:w-72 rounded-lg object-cover"
                  src={TestimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold"> John </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Project Manager
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div
                  className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne 
                  p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8"
                >
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        {" "}
                        Project Manager
                      </h3>
                      <p className=" text-base text-gray-400 mt-3">
                        {" "}
                        Project Manager
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-blue-400 font-medium tracking-wide leading-6">
                    Henok's ability to seamlessly translate designs into
                    functional and visually stunning user interfaces is truly
                    remarkable. He is a reliable team player, always eager to
                    collaborate and share his expertise with colleagues.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div
                div
                className="w-full lgl:w-[35%] h-full bg-gradient-to-r from[#1e2024] to-[#2327b] p-8 rounded-lg shadow-shadowOne
              flex flex-col lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center"
              >
                <img
                  className="w-35 h-auto lgl:w-72 rounded-lg object-cover"
                  src={TestimonialThree}
                  alt="TestimonialThree"
                />
                <div className="w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold"> Jasmine D. </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Front End Developer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div
                  className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne 
                  p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8"
                >
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Front-end Developer{" "}
                      </h3>
                      <p className=" text-base text-gray-400 mt-3"> </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-blue-400 font-medium tracking-wide leading-6">
                    With Henok on our team, we can confidently tackle any
                    front-end development challenge. His commitment to
                    excellence is an invaluable asset, and I highly recommend
                    him for any front-end development role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial
