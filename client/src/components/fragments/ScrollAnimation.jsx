import React from "react";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const ScrollAnimation = () => {
  return (
    <div className="h-full w-48 relative flex justify-center items-center scroll-parent">
      <div className="absolute top-0 z-50 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
      <div className="scroll-element primary flex flex-col justify-center items-center pr-1 pl-1 gap-6">
        <div className="scroll-card">
          <img src={img2} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="scroll-card">
          <img src={img3} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="scroll-card">
          <img src={img4} className="h-full w-full object-cover" alt="" />
        </div>
      </div>
      <div className="scroll-element secondary flex flex-col justify-center items-center pr-1 pl-1 gap-6 mt-6">
        <div className="scroll-card">
          <img src={img2} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="scroll-card">
          <img src={img3} className="h-full w-full object-cover" alt="" />
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
