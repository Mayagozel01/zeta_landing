import React, { useState, useEffect } from "react";
import "./services.css";
import security from "./../../assets/images/security.png";
import approve from "./../../assets/images/appro.png";
import seo from "./../../assets/images/seo.png";
import settings from "./../../assets/images/settings.png";
import statics from "./../../assets/images/statics.png";
import services_2 from "./../../assets/images/services_2.png";

const slides = [
  { id: 1, title: "Security support 1", image: security },
  { id: 2, title: "Security support 2", image: approve },
  { id: 3, title: "Security support 3", image: seo },
  { id: 4, title: "Security support 4", image: settings },
  { id: 5, title: "Security support 5", image: statics },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="services container flex flex-col items-start">
      <div className="flex flex-col gap-8">
        <img src={services_2}  alt="service"className="w-[185px]" />
        <h1 className="font-[600] text-[55px] text-[#FFFFF0]">Security support</h1>

      </div>
      <div className="carousel">
        {slides.map((slide, index) => {
          let offset = index - activeIndex;

          if (offset < -Math.floor(slides.length / 2)) {
            offset += slides.length;
          }
          if (offset > Math.floor(slides.length / 2)) {
            offset -= slides.length;
          }

          const slideWidth = 500;      // базовая ширина
          const scaleFactor = 0.2;     // уменьшение
          const scale = 1 - Math.abs(offset) * scaleFactor;

          // формула: половина ширины + половина уменьшенной ширины
          const translateX = offset * (slideWidth / 2 + (slideWidth * scale) / 2);

          const zIndex = 10 - Math.abs(offset);

          return (
            <div
              key={slide.id}
              className="carousel-slide"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex,
                opacity: scale < 0.4 ? 0 : 1,
              }}
            >
              <img src={slide.image} alt={slide.title} />
            </div>
          );
        })}
      </div>
      <h1 className="text-[60px] mt-6 text-[#FFFFF0] w-full text-center">{slides[activeIndex].title}</h1>
    </div>
  );
}
