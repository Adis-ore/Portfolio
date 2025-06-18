import { SiOpenai } from "react-icons/si"; 
import { CgFigma } from "react-icons/cg"; 
import { IoLogoVercel } from "react-icons/io5";  
import { TbBrandVscode } from "react-icons/tb"; 
import { AiFillGithub } from "react-icons/ai"; 
import { SiTypescript } from "react-icons/si"; 
import { DiJavascript1 } from "react-icons/di"; 
import { SiAxios } from "react-icons/si"; 
import { TbPlugConnected } from "react-icons/tb"; 
import { SiJsonwebtokens } from "react-icons/si"; 
import { DiFirebase } from "react-icons/di"; 
import { DiMongodb } from "react-icons/di"; 
import { SiExpress } from "react-icons/si"; 
import { FaNodeJs } from "react-icons/fa"; 
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  AiFillHtml5,
  AiFillCopyrightCircle,
} from "react-icons/ai";
import { BsStripe } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiJsBadge, DiCss3 } from "react-icons/di";

const frontendSkills = [
  { name: "HTML", icon: <AiFillHtml5 /> },
  { name: "CSS", icon: <DiCss3 /> },
  { name: "JavaScript", icon: <DiJsBadge /> },
  { name: "React JS", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Stripe", icon: <BsStripe /> },
  { name: "Clerk", icon: <AiFillCopyrightCircle /> },
  { name: "React Router", icon: <AiFillCopyrightCircle /> },
  { name: "Redux", icon: <AiFillCopyrightCircle /> },
  { name: "Prettier", icon: <AiFillCopyrightCircle /> },
  { name: "JQuery", icon: <AiFillCopyrightCircle /> },
];

const backendSkills = [
  { name: "Node JS", icon: <FaNodeJs /> },
  { name: "Express JS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "Firebase", icon: <DiFirebase /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "REST APIs", icon: <TbPlugConnected /> },
  { name: "Axios", icon: <SiAxios /> },
];

const languages = [
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "TypeScript", icon: <SiTypescript /> },
];

const tools = [
  { name: "Git", icon: <AiFillGithub /> },
  { name: "VS Code", icon: <TbBrandVscode /> },
  { name: "Figma", icon: <CgFigma /> },
  { name: "Vercel", icon: <IoLogoVercel /> },
  { name: "OpenAI", icon: <SiOpenai /> },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      id="skills"
      className="bg-[#3B3C36] min-h-screen flex flex-col justify-start items-center pt-32 pb-16 px-6 sm:px-20 overflow-hidden"
    >
      <div className="text-center text-amber-500 space-y-4 max-w-3xl" data-aos="fade-up">
        <h1 className="text-[40px] sm:text-[50px] font-extrabold tracking-wide">Skills</h1>
        <hr className="border-amber-500 border-t-4 w-24 mx-auto rounded-full" />
        <h2 className="text-white text-base sm:text-lg font-bold">
          A collection of my technical skills and expertise honed through various projects and learnings.
        </h2>
      </div>

      <div className="mt-12 text-white text-xl font-semibold grid grid-cols-1 sm:grid-cols-2 w-full gap-8">
        
        {/* Frontend */}
        <div className="w-full text-center" data-aos="fade-right ">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Frontend</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {frontendSkills.map((item, i) => (
              <span
                key={i}
                className="bg-amber-400 text-black px-4 py-2 rounded-lg shadow hover:bg-amber-500 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <span className="text-2xl text-black">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="w-full text-center" data-aos="fade-left">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Backend</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {backendSkills.map((item, i) => (
              <span
                key={i}
                className="bg-amber-400 text-black px-4 py-2 rounded-lg shadow hover:bg-amber-500 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <span className="text-2xl text-black">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="w-full text-center" data-aos="fade-right">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Languages</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {languages.map((item, i) => (
              <span
                key={i}
                className="bg-amber-400 text-black px-4 py-2 rounded-lg shadow hover:bg-amber-500 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <span className="text-2xl text-black">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="w-full text-center" data-aos="fade-left">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">Tools</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {tools.map((item, i) => (
              <span
                key={i}
                className="bg-amber-400 text-black px-4 py-2 rounded-lg shadow hover:bg-amber-500 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <span className="text-2xl text-black">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
