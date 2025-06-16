import React, { useEffect, useRef, useState } from 'react';
import  '../Component/Carousel.css'

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
      carousel.addEventListener('mouseenter', stopAutoRotate);
      carousel.addEventListener('mouseleave', startAutoRotate);
      carousel.addEventListener('wheel', handleWheel, { passive: false });
      carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
      carousel.addEventListener('touchmove', handleTouchMove, { passive: true });
    }

    startAutoRotate();

    return () => {
      if (carousel) {
        carousel.removeEventListener('mouseenter', stopAutoRotate);
        carousel.removeEventListener('mouseleave', startAutoRotate);
        carousel.removeEventListener('wheel', handleWheel);
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchmove', handleTouchMove);
      }
      stopAutoRotate();
    };
  }, []);

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
    return cards;
  };

  return (
    <div
      id="projects"
      className="bg-[#161616] h-screen flex flex-col justify-center text-amber-800 items-center pt-32 pb-16 px-6 sm:px-20 overflow-hidden"
    >
      <div className="card-3d" ref={carouselRef}>
        {renderCards()}
      </div>
    </div>
  );
};

export default Project;
