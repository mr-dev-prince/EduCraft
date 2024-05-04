import React from "react";

const ScrollAnimation = () => {
  return (
    <div className="h-full relative w-48 flex justify-center items-center scroll-parent2">
      <div className="absolute top-0 z-50 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
      <div className="scroll-element2 primary2 flex flex-col justify-center items-center pr-1 pl-1 gap-6">
        <div className="scroll-card">
          <img
            src="https://ik.imagekit.io/princeSherwa/Personal/img5.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="scroll-card">
          <img
            src="https://ik.imagekit.io/princeSherwa/Personal/img6.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="scroll-card">
          <img
            src="https://ik.imagekit.io/princeSherwa/Personal/img4.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="scroll-element2 secondary2 flex flex-col justify-center items-center pr-1 pl-1 gap-6 mb-6">
        <div className="scroll-card">
          <img
            src="https://ik.imagekit.io/princeSherwa/Personal/img5.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="scroll-card">
          <img
            src="https://ik.imagekit.io/princeSherwa/Personal/img6.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="scroll-card">
          <img
            src="https://ik.imagekit.io/princeSherwa/Personal/img4.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-50 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default ScrollAnimation;
