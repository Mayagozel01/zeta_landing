import React from "react";
import "./marquee.css";
import logoblack from "./../../assets/images/logo_zeta.png";

export default function Marquee() {
  const items = [
    { img: logoblack, text: "Web developing" },
    { img: logoblack, text: "Create logo" },
    { img: logoblack, text: "UI/UX designer" },
    { img: logoblack, text: "Mobile app" },
    { img: logoblack, text: "API" },
  ];

  // Дублируем массив несколько раз (например, 4 раза)
  const repeatedItems = Array(4).fill(items).flat();

  return (
    <div className="marquee container">
      <div className="marquee-track">
        {repeatedItems.map((item, i) => (
          <div className="item" key={i}>
            <img src={item.img} alt={item.text} />
            <p className="font-[500]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
