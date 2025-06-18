import React from "react";
import { TypeWritter } from "typewritter";
import Profile from "../assets/Profile.png";
import SplashCursor from "./SplashCursor";
import { useEffect } from "react";
// import gsap from "gsap";


const Hero = () => {
//   useEffect(() => {
//     document.querySelector(".naag").onmousemove = (e) => {
//       const clippath = document.querySelector(".naag .in");
//       const rect = clippath.getBoundingClientRect();

//       gsap.to(clippath, 0.3, {
//         visibility: "visible",
//         clipPath: `circle(15% at ${e.x - rect.left}px ${e.y - rect.top}px)`,
//       });
//     };
//     document.querySelector(".naag").onmouseleave = (e) => {
//       const clippath = document.querySelector(".naag .in");
//       const rect = clippath.getBoundingClientRect();

//       gsap.to(clippath, 0.3, {
//         clipPath: `circle(0% at ${e.x - rect.left}px ${e.y - rect.top}px)`,
//       });
//       setTimeout(() => {
//         clippath.style.visibility = "hidden";
//       }, 1000);
//     };
//   });

  return (
    <div
      id="about"
      className="bg-black text-white  flex flex-col-reverse justify-center items-center overflow-hidden sm:flex-row sm:justify-around sm:items-center px-10 h-screen gap-9"
    >
      <SplashCursor />
      <div className="w-full sm:w-1/2">
        <h1 className="text-amber-400 text-[35px]  leading-[50px] sm:leading-[70px] sm:text-[60px] font-extrabold">
          Hi, I am <br /> Adigun Oreoluwa
        </h1>
    {/* <div className="naag flex flex-col justify-center items-center h-[300px] relative text-[100px] font-[900] -gap-10 max-lg:hidden">
        <div className="absolute top-1/2 w-full in flex justify-center left-1/2 items-center h-[300px]">
          <span className="w-[800px] leading-[100px] text-center">
            Just a Fun Web Developer
          </span>
        </div>
        <h1 className="text-amber-400 text-[35px]  leading-[50px] sm:leading-[70px] sm:text-[60px] font-extrabold">
          Hi, I am <br /> Adigun Oreoluwa
        </h1>
      </div> */}
        <div className="flex items-center gap-3 justify-start flex-row font-bold mt-3">
          <span className="text-[25px] sm:text-[28px] text-gray-300">
            I am a
          </span>
          <span className="text-cyan-400 text-[23px] sm:text-[28px] font-bold">
            <TypeWritter
              text="Fullstack Developer"
              speed={100}
              clearMessageSpeed={200}
              loop={true}
            />
          </span>
        </div>

        <div className="mt-4 text-sm sm:text-base font-mono text-gray-400 leading-loose">
          <p>
            I’m a <span className="text-cyan-400">MERN stack developer</span>{" "}
            skilled in React, Node.js, Express, MongoDB, and modern tools like
            Tailwind CSS, Firebase, Stripe, Clerk, and JWT. I’ve built fullstack
            websites and app like
            <span className="text-amber-400 font-semibold"> Ymca Ibadan</span>,
            <span className="text-amber-400 font-semibold"> Speedtouch</span>{" "}
            and
            <span className="text-amber-400 font-semibold"> StockUp</span>,
            covering everything from authentication to real time collaboration.
          </p>
        </div>
        <a
          href="/Adigun.docx"
          download
          className="mt-6 inline-block px-6 py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg shadow-md transition-all duration-300"
        >
          Download Resume
        </a>
      </div>

      <div className="rounded-full bg-amber-400 size-[250px] sm:size-[400px] flex items-center justify-center overflow-hidden shadow-lg shadow-amber-500/20">
        <img
          src={Profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
