import React, { useEffect, useRef, useState } from "react";
import "../Component/Carousel.css";
import Speedtouch from "../assets/Speedtouch.png";
import Ymca from "../assets/YMCA.png";
import { Link } from "react-router-dom";
import Stockup from '../assets/Stockup.jpg'

const Project = () => {
  const carouselRef = useRef(null);
  const [angle, setAngle] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    let autoRotate;

    const startAutoRotate = () => {
      autoRotate = setInterval(() => {
        setAngle((prev) => prev + 1);
      }, 100);
    };

    const stopAutoRotate = () => clearInterval(autoRotate);

    const handleWheel = (e) => {
      e.preventDefault();
      const scrollDelta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      setAngle((prev) => prev + (scrollDelta > 0 ? 10 : -10));
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      if (touchStartX.current === null) return;

      const touchEndX = e.touches[0].clientX;
      const deltaX = touchStartX.current - touchEndX;

      if (Math.abs(deltaX) > 30) {
        setAngle((prev) => prev + (deltaX > 0 ? -10 : 10));
        touchStartX.current = touchEndX;
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("mouseenter", stopAutoRotate);
      carousel.addEventListener("mouseleave", startAutoRotate);
      carousel.addEventListener("wheel", handleWheel, { passive: false });
      carousel.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      carousel.addEventListener("touchmove", handleTouchMove, {
        passive: true,
      });
    }

    startAutoRotate();

    return () => {
      if (carousel) {
        carousel.removeEventListener("mouseenter", stopAutoRotate);
        carousel.removeEventListener("mouseleave", startAutoRotate);
        carousel.removeEventListener("wheel", handleWheel);
        carousel.removeEventListener("touchstart", handleTouchStart);
        carousel.removeEventListener("touchmove", handleTouchMove);
      }
      stopAutoRotate();
    };
  }, []);

  const work = [
    {
      name: "SPEEDTOUCH",
      description:
        "SpeedTouch is an e-commerce platform selling cleaning and hygiene products with search and checkout.",
      image: Speedtouch,
      link: "https://speedtouch.onrender.com/",
    },
    {
      name: "YMCA Ibadan",
      description:
        "YMCA Ibadan promotes youth development, community service, and engagement through programs and events.",
      image: Ymca,
      link: "https://ymcaibadan-0vh5.onrender.com/",
    },
    {
      name: "STOCKUP",
      description:
        "StockUp is a Nigerian fintech app simulating stock trading with virtual currency and AI suggestions.",
      image: Stockup,
      link: "https://ymcaibadan-0vh5.onrender.com/",
    },
    {
      name: "SPEEDTOUCH",
      description:
        "SpeedTouch is an e-commerce platform selling cleaning and hygiene products with search and checkout.",
      image: Speedtouch,
      link: "https://speedtouch.onrender.com/",
    },
    {
      name: "YMCA Ibadan",
      description:
        "YMCA Ibadan promotes youth development, community service, and engagement through programs and events.",
      image: Ymca,
      link: "https://ymcaibadan-0vh5.onrender.com/",
    },
    {
      name: "STOCKUP",
      description:
        "StockUp is a Nigerian fintech app simulating stock trading with virtual currency and AI suggestions.",
      image: Stockup,
      link: "https://ymcaibadan-0vh5.onrender.com/",
    },
  ];

  const renderCards = () => {
    const cards = [];
    const total = 9;
    for (let i = 0; i < total; i++) {
      const rotateY = (360 / total) * i + angle;
      cards.push(
        <div
          key={i}
          className="card-face"
          style={{
            transform: `translate(-50%, -50%) rotateY(${rotateY}deg) translateZ(300px)`,
          }}
        />
      );
    }
    return work.map((item, i) => {
      const rotateY = (360 / work.length) * i + angle;
      return (
        <div
          key={i}
          className="card-face overflow-hidden"
          style={{
            transform: `translate(-50%, -50%) rotateY(${rotateY}deg) translateZ(300px)`,
          }}
        >
          <div className="card-content">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-2 text-center">
              {item.name}
            </h3>
            <p className=" text-gray-300 mt-1 h-5 text-[5px] overflow-hidden">
              {item.description}
            </p>
            <Link to={item.link} target="_blank" className="">
              <button className="px-8  self-center">View Project</button>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      id="projects"
      className="h-screen  bg-[#161616] flex flex-col justify-start gap-5 p-2 items-center overflow-hidden "
    >
      <div className="text-center text-amber-500  max-w-3xl" data-aos="fade-up">
        <h1 className="text-[40px] sm:text-[30px] font-extrabold tracking-wide">
          Projects
        </h1>
        <hr className="border-amber-500 border-t-4 w-24 mx-auto rounded-full" />
        <h2 className="text-white text-base sm:text-lg font-bold">
          A collection of my projects showcasing practical solutions, creative
          design, and real world problem solving experience
        </h2>
      </div>
      <div className="bg-[#161616]  text-amber-800 items-center pt-32 pb-16 px-6 sm:px-20 ">
        <div className="card-3d" ref={carouselRef}>
          {renderCards()}
        </div>
      </div>
    </div>
  );
};

export default Project;
