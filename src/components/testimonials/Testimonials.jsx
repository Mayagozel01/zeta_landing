import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import services from "./../../assets/images/services_2.png";

const testimonials = [
  {
    rating: 4,
    title: "Amazing Service!",
    text: "The team delivered exactly what we needed, on time and with great attention to detail.",
    name: "John Smith",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    rating: 4,
    title: "Top-Notch Quality!",
    text: "Their creative solutions helped our brand stand out. We couldn’t be happier!",
    name: "John Doe",
    img: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    rating: 4,
    title: "Excellent Support!",
    text: "They guided us through every step, making the process smooth and stress-free.",
    name: "John Doe",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    rating: 5,
    title: "Outstanding!",
    text: "Truly professional and reliable team.",
    name: "Jane Smith",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#02463F] container flex flex-col items:start lg:items-center sm:items-start md:items-start gap-10">
      <img src={services} alt="Services" className="w-[183px] sm:w-[120px]" />

      <h2 className="font-bold text-white text-[24px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] mb-12 w-[50%] w-full sm:w-full md:w-full text-start lg:text-center sm:text-start md:text-start">
        Testimonials: Trusted By Our Clients
      </h2>

      <div className="w-full sm:w-full md:w-full lg:max-w-6xl lg:mx-auto px-4">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="overflow-visible h-[600px]">
              <div
                className={`transition-all duration-500 ease-in-out h-[350px] flex flex-col justify-between rounded-2xl border border-gray-600 p-6 bg-[#034d44] text-white
                  ${
                    index === activeIndex
                      ? "scale-110 shadow-2xl z-20 relative"
                      : "scale-90 opacity-70 z-10"
                  }`}
              >
                {/* Stars */}
                <div className="flex mb-4 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < t.rating ? "text-yellow-400" : "text-gray-400"}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Title + Text */}
                <h3 className="font-semibold mb-2 text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                  {t.title}
                </h3>
                <p className="text-gray-200 flex-grow text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                  {t.text}
                </p>

                {/* Avatar + Name */}
                <div className="flex items-center mt-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 sm:w-10 sm:h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">{t.name}</p>
                    <span className="text-sm text-gray-400">✔ Verified</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
