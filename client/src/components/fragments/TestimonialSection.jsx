import React from "react";
import TestimonialCard from "./cards/TestimonialCard";

const TestimonialSection = (props) => {
  return (
    <div className="pl-12 pr-12 mt-12 flex flex-col">
      <div className="grid place-items-center">
        <p className="text-5xl pl-12 font-extrabold h-[70px] tracking-wider text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
          {props.heading}
        </p>
      </div>
      <div className="flex flex-wrap gap-12 md:justify-between justify-center items-center mt-16">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default TestimonialSection;
