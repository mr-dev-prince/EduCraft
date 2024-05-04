import React from "react";

const Gallery = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 px-24 py-20 gap-4">
      <div className="col-span-2 row-span-1 center h-[200px] ">
        <p className="text-5xl pl-12 h-[70px]  font-extrabold tracking-wider text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
          Some Sweet Moments
        </p>
      </div>
      <div className="col-span-2 row-span-3 rounded-xl bg-[#9600AE]/[0.2]"></div>
      <div className="grid-style-2"></div>
      <div className="grid-style-2"></div>
      <div className="grid-style"></div>
      <div className="grid-style"></div>
      <div className="grid-style-2"></div>
      <div className="grid-style"></div>
      <div className="grid-style"></div>
      <div className="grid-style"></div>
      <div className="grid-style"></div>
    </div>
  );
};

export default Gallery;
