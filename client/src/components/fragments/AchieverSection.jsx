import React from "react";
import AchieverCard from "./cards/AchieverCard";

const AchieverSection = () => {
  return (
    <div className="pl-12 pr-12 mt-24 flex flex-col">
      <div className="grid place-items-center">
        <p className="text-5xl pl-12 font-extrabold tracking-wider text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
          Our Achievers
        </p>
      </div>
      <div className="main-container p-12 md:h-[300px] gap-32 flex flex-wrap md:justify-between justify-center mt-28">
        <AchieverCard
          name="Gantavya Malviya"
          package="1.12 Cr"
          region="Amazon, UK"
        />
        <AchieverCard name="Karan Lohia" package="24 Lac" region="Amazon, UK" />
        <AchieverCard
          name="Piyush Pithode"
          package="52 lacs"
          region="Amazon, UK"
        />
        <AchieverCard
          name="Anshu Jangid"
          package="30 Lacs"
          region="Amazon, UK"
        />
      </div>
    </div>
  );
};

export default AchieverSection;
