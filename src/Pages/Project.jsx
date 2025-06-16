import React from 'react'
import AOS from 'aos';

const Project = () => {
const projects = [
  {
    title: "SpeedTouch",
    description:
      "SpeedTouch is an e-commerce platform designed specifically for the sale of cleaning materials and hygiene products. It allows users to browse, search, and purchase a wide variety of cleaning supplies with ease. Built with a clean and intuitive interface, it supports features like product filtering, shopping cart, and secure checkout. This platform aims to simplify access to essential cleaning tools for both individuals and businesses.",
    image: "",
    link: "https://example.com/project-one",
    tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Stripe API"]
  },
  {
    title: "YMCA IBADAN",
    description:
      "This is the official foundation website for YMCA Ibadan, a non-profit organization focused on youth development, community empowerment, and social impact. The website showcases the foundation’s mission, programs, events, and volunteer opportunities. It serves as a digital hub for engaging donors, volunteers, and the general public with responsive design and easy navigation.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project-two",
    tools: ["HTML", "CSS", "JavaScript", "React", "Netlify"]
  },
  {
    title: "STOCKUP",
    description:
      "StockUp is a fintech web application that simulates real-time buying and selling of stocks. It is built for financial literacy and investment education, especially tailored to the Nigerian market. Users can manage portfolios, track market trends, and get AI-powered suggestions. The app also features gamified levels and demo trading to help beginners gain confidence in stock trading.",
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project-three",
    tools: ["React", "Node.js", "Express", "MongoDB", "Finnhub API", "Framer Motion"]
  }
];

  return (
    <div id='projects' className='bg-[#161616] h-screen flex flex-col justify-start text-amber-800 items-center pt-32 pb-16 px-6 sm:px-20'>
      <div className="text-center text-amber-500 space-y-4 max-w-3xl" data-aos="fade-up">
        <h1 className="text-[40px] sm:text-[50px] font-extrabold tracking-wide">Projects</h1>
        <hr className="border-amber-500 border-t-4 w-24 mx-auto rounded-full" />
        <h2 className="text-white text-base sm:text-lg font-bold">
          Showcasing practical skills and creativity through diverse web development projects built with modern technologies
        </h2>
      </div>
{/*  */}
      <div>
      </div>
    </div>
  )
}

export default Project