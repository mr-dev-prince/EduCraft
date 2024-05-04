import React from "react";
import img2 from "../../assets/iitb.png";
import img3 from "../../assets/college1.png";
import img4 from "../../assets/colleg2.png";
import img5 from "../../assets/college3.png";

const ScrollAnimation3 = () => {
  return (
    <div className="h-48 w-full relative flex justify-center items-center scroll-parent3 bg-[#9600ae]/[0.2]">
      <div className="scroll-element3 primary3 flex justify-center gap-48 items-center ">
        <img src={img2} className="h-24" alt="" />
        <img src={img3} className="h-24" alt="" />
        <img src={img4} className="h-24" alt="" />
        <img src={img5} className="h-24" alt="" />
        <img src={img3} className="h-24" alt="" />
        <img src={img2} className="h-24" alt="" />
      </div>
      <div className="scroll-element3 secondary3 flex justify-center gap-48 items-center ml-64">
        <img src={img5} className="h-24" alt="" />
        <img src={img2} className="h-24" alt="" />
        <img src={img3} className="h-24" alt="" />
        <img src={img4} className="h-24" alt="" />
        <img src={img3} className="h-24" alt="" />
        <img src={img2} className="h-24" alt="" />
      </div>
    </div>
  );
};

// <div className="absolute left-0 z-50 w-full h-16 bg-gradient-to-b from-[#ECEFF2] to-transparent"></div>

export default ScrollAnimation3;
