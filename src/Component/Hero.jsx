import React from "react";
import { TypeWritter } from "typewritter";
import Profile from "../assets/Profile.png";

const Hero = () => {
  return (
    <div className="bg-black text-white px-3 flex flex-col-reverse justify-center items-center sm:flex-row sm:justify-around sm:items-center mx-10 h-screen gap-9">
      <div className="w-full sm:w-1/2">
        <h1 className="text-amber-400 text-[30px] leading-[35px] sm:leading-[70px] sm:text-[60px] font-extrabold">
          Hi, I am <br /> Adigun Oreoluwa
        </h1>

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

        <div className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
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
        <button className="mt-6 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg shadow-md transition-all duration-300">
          Download Resume
        </button>
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
