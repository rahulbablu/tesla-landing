import React from "react";
import { NavLink } from "react-router-dom";

const ImgSection = ({ src, name, desc,next }) => {
  return (
    <>
      <section className="car_section">
        <img src={src} alt="" className="car_img" />
      </section>
      <div className="absolute top-[20%] left-[50%] text-center transform-50">
        <h1 className="text-[4rem] text-[#393c41] font-semibold">{name}</h1>
        <h2 className="text-[#4c4d51] text-2xl">{desc}</h2>
      </div>
      <div className="transform-50 absolute top-[85%] left-[50%] flex flex-col lg:flex-row">
        <button className="btn">Custom Order</button>
        <button className="btn inventory">Existing Inventory</button>
      </div>
      <NavLink to={next}>
      <svg className="down_svg" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke="var(--tds-icon--fill, #171a20)"
          stroke-width="1.5"
          d="m19.5 12.5-4.5 4-4.5-4"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      </NavLink>
    </>
  );
};

export default ImgSection;
