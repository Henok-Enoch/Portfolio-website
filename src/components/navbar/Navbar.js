import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { me } from "../../assets/index";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className="w-full h-24 sticky top-0 z-50 bg-bodyColor flex justify-between items-center 
    font-titleFont border-b-[1px] border-b-gray-600"
    >
      <div>
        <img
          style={{ borderRadius: "50%", height: "60px" }}
          src={me}
          alt="me"
        />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex flex items-center gap-6 lgl:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-white tracking-wide cursor-pointer 
              hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center
                     justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hidden">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img
                  style={{ borderRadius: "50%", height: "60px" }}
                  src={me}
                  alt="me"
                />
                <p className="text-sm text-white-400 mt-2">
                  I'm a Full stack Web Developer with a 6+ years experience in
                  React.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-white-400 tracking-wide
                  cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col lgl:gap-4">
                <h2 className="text-white uppercase font-titleFont mb-4">
                  {" "}
                  Find me in
                </h2>
                <div className="flex gap-2 lgl:gap-4">
                  <span className="bannerIcon">
                    <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <FaTwitter />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-white-400 hover:text-designColor 
              duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
