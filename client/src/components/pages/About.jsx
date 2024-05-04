import React from "react";
import about from "../../assets/about.png";
import robo2 from "../../assets/Robo2.png";
import robo3 from "../../assets/Robo3.png";

const About = () => {
  return (
    <div className="w-full">
      <div className="grid place-items-center">
        <img src={about} className="h-32" alt="" />
      </div>
      <div className="flex h-[600px]">
        <div className="flex justify-center items-center w-[50%]  pl-12">
          <div className="relative h-[80%] w-[90%]">
            <img src={robo2} className="w-[45%] " alt="" />
            <img src={robo3} className="w-[55%] absolute left-52 top-5" alt="" />
          </div>
        </div>
        <div className="w-[50%] ">
          <div className="grid place-items-center pr-12">
            <p className="text-4xl pl-12 h-[70px]  font-bold tracking-wider text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
              Know More About Us !
            </p>
          </div>
          <div className="flex flex-col gap-6 pr-12 text-md tracking-wider">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eaque sit quaerat ad expedita deleniti reprehenderit sunt dicta ea
              officiis, voluptate distinctio at vero autem. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Error neque quaerat
              repudiandae quod?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              amet soluta velit, eveniet iure voluptate illo voluptatibus
              pariatur, quam possimus officiis aut et iste laboriosam unde optio
              quis quod debitis, ab temporibus a alias aspernatur commodi.
              Asperiores temporibus ut porro assumenda provident aut possimus
              vero!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              officia maxime nobis, ipsum sed exercitationem dicta, animi
              eveniet ex reprehenderit eligendi et natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, tenetur? Quo autem recusandae eaque quia ipsum beatae
              numquam fuga, cupiditate aliquam iure quos nobis vitae, porro,
              aperiam at molestiae delectus excepturi voluptas. Architecto
              obcaecati saepe aperiam totam, velit dicta itaque nulla,
              temporibus aliquam iure vitae impedit. Enim molestias laborum
              accusamus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
