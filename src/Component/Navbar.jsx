import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#0A0A0A]  text-white p-3 flex justify-around w-[100%] z-100 fixed top-0  ">
      <div className="text-white">
        <p>ADIS</p>
      </div>
      <ul className="hidden sm:flex gap-5 text-sm ">
          <a href="#about">ABOUT</a>

        <a href="#skills">Skills</a>
        <NavLink className="flex flex-col items-center gap-">
          <a href="">PROJECTS</a>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-">
          <a href="">CONTACTS</a>
        </NavLink>
      </ul>
      <div className="text-white hidden sm:flex gap-2 justify-around ">
        <Link to={"https://github.com/Adis-ore"}>
          <AiFillGithub className="text-[25px]" />
        </Link>
        <Link to={""}>
          <AiFillTwitterCircle className="text-[25px]" />
        </Link>
        <Link to={""}>
          <AiFillLinkedin className="text-[25px]" />
        </Link>
      </div>

      {/* Side bar */}
      <div className="sm:hidden flex items-center justify-end w-full">
        <BiMenu
          onClick={() => setOpen(true)}
          className="text-[30px] cursor-pointer"
        />
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-[#161616] transition-all z-50 ${
          open ? "w-64 sm:w-72" : "w-0"
        }`}
        style={{ transitionProperty: "width", transitionDuration: "300ms" }}
      >
        <div className="flex flex-col h-full">
          <div
            onClick={() => setOpen(false)}
            className=" flex items-center gap-4 p-3 cursor-pointer "
          >
            <IoIosArrowForward className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <a onClick={() => setOpen(false)} className="py-2 pl-6 " href="#about">
            ABOUT
          </a>
          <a
            onClick={() => setOpen(false)}
            className="py-2 pl-6 "
            href="#skills"
          >
            SKILLS
          </a>
          <a
            onClick={() => setOpen(false)}
            className="py-2 pl-6 "
            href="#projects"
          >
            PROJECTS
          </a>
          <a
            onClick={() => setOpen(false)}
            className="py-2 pl-6 "
            href="#contacts"
          >
            CONTACTS
          </a>

          <div className="text-white flex gap-2 justify-start py-2 pl-6 ">
            <Link to={"https://github.com/Adis-ore"}>
              <AiFillGithub className="text-[25px]" />
            </Link>
            <Link to={""}>
              <AiFillTwitterCircle className="text-[25px]" />
            </Link>
            <Link to={""}>
              <AiFillLinkedin className="text-[25px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
