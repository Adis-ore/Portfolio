import React from "react";
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <hr className="border-t border-gray-700" />
      <footer className="flex flex-col items-center justify-center gap-4 py-6">
        <img className='size-[25px]' src={Logo} alt="" />

        {/* <ul className="hidden sm:flex gap-6 text-sm tracking-wide">
          <a href="#about" className="hover:text-gray-400 transition duration-200">ABOUT</a>
          <a href="#skills" className="hover:text-gray-400 transition duration-200">SKILLS</a>
          <a href="#projects" className="hover:text-gray-400 transition duration-200">PROJECTS</a>
          <a href="#contact" className="hover:text-gray-400 transition duration-200">CONTACTS</a>
        </ul> */}

        <div className="hidden sm:flex gap-4">
          <Link to={"https://github.com/Adis-ore"}>
                    <AiFillGithub className="text-[25px]" />
                  </Link>
                  <Link to={"https://x.com/adis_akins?t=b4hYuYoIO8GnZ6G2DE2n_Q&s=09"}>
                    <AiFillTwitterCircle className="text-[25px]" />
                  </Link>
                  <Link to={"https://www.linkedin.com/in/adigun-oreoluwa-78b500237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                    <AiFillLinkedin className="text-[25px]" />
                  </Link>
        </div>

        <p className="text-xs text-gray-500 mt-2">© {new Date().getFullYear()} Adis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
