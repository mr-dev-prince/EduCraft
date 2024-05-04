import React from "react";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img4 from "../../assets/img4.jpg";

const ScrollAnimation = () => {
  return (
    <div className="h-full relative w-48 flex justify-center items-center scroll-parent2">
    <div className="absolute top-0 z-50 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
      <div className="scroll-element2 primary2 flex flex-col justify-center items-center pr-1 pl-1 gap-6">
        <div className="scroll-card">
          <img src={img5} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="scroll-card">
          <img src={img6} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="scroll-card">
          <img src={img4} className="h-full w-full object-cover" alt="" />
        </div>
      </div>
      <div className="scroll-element2 secondary2 flex flex-col justify-center items-center pr-1 pl-1 gap-6 mb-6">
        <div className="scroll-card">
          <img src={img5} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="scroll-card">
          <img src={img6} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="scroll-card">
          <img src={img4} className="h-full w-full object-cover" alt="" />
        </div>
      </div>
      <div className="absolute bottom-0 z-50 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default ScrollAnimation;
