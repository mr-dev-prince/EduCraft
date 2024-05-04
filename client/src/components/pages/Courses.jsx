import React from "react";
import CourseCard from "../fragments/cards/CourseCard";
import TestimonialSection from "../fragments/TestimonialSection";
import AchieverSection from "../fragments/AchieverSection";
import { HashLink } from "react-router-hash-link";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import {
  techcourses,
  marketincourses,
  buisnesscourses,
} from "../pages/ProductObject";

const Courses = () => {
  return (
    <>
      <div className="w-full h-[500px] relative">
        <img
          src="https://ik.imagekit.io/princeSherwa/Personal/bgtexture2.png"
          className="absolute w-full h-full object-cover top-0 left-0 opacity-30"
          alt=""
        />

        <div className="flex  justify-between items-center">
          <div className="flex z-10 justify-center items-center flex-col p-12 pl-28">
            <p className="text-5xl font-bold">Smart Courses For</p>
            <br />
            <p className="text-6xl font-bold tracking-wider h-[70px] text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
              Smart People.
            </p>
          </div>
          <div className="flex z-10 justify-center items-center flex-col p-12 pr-28">
            <img src="https://ik.imagekit.io/princeSherwa/Personal/collegestudents.png?updatedAt=1714812133763" alt="" className="h-[350px] object-cover" />
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="mt-10 w-full">
        <div className="grid place-items-center">
          <p className="text-6xl font-semibold tracking-wider h-[70px] text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
            You Said It, We've Made It !
          </p>
        </div>
        <div className="grid place-items-center mt-10">
          <p className="text-4xl font-semibold tracking-wider h-[70px] text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
            Technical Courses
          </p>
        </div>
        <div className="w-full flex flex-wrap px-12 justify-between gap-16">
          {techcourses.map((item) => (
            <CourseCard
              key={item.id}
              id={item.id}
              src={item.src}
              title={item.title}
              author={item.author}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="mt-20 w-full">
        <div className="grid place-items-center">
          <p className="text-4xl font-semibold tracking-wider h-[70px] text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
            Marketing Courses
          </p>
        </div>
        <div className="w-full flex flex-wrap px-12 justify-between gap-16">
          {marketincourses.map((item) => (
            <CourseCard
              key={item.id}
              id={item.id}
              src={item.src}
              title={item.title}
              author={item.author}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="mt-20 w-full">
        <div className="grid place-items-center">
          <p className="text-4xl font-semibold tracking-wider h-[70px] text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
            Buisness Courses
          </p>
        </div>
        <div className="w-full flex flex-wrap px-12 justify-between gap-16">
          {buisnesscourses.map((item) => (
            <CourseCard
              key={item.id}
              id={item.id}
              src={item.src}
              title={item.title}
              author={item.author}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="mt-24">
        <div className="grid place-items-center">
          <p className="text-6xl font-semibold tracking-wider h-[140px] text-center bg-gradient-to-r from-[#9600AE] via-[#eebb08] to-[#9600AE] inline-block text-transparent bg-clip-text">
            Companies Where Our <br /> Students Are Placed
          </p>
        </div>
        <div className="grid grid-cols-4 place-items-center gap-20 bg-[#9600AE]/[0.2] mt-10 py-10">
          <img className="h-36" src="https://ik.imagekit.io/princeSherwa/Personal/amazon.png?updatedAt=1714812128987" alt="" />
          <img className="h-36 " src="https://ik.imagekit.io/princeSherwa/Personal/google.png?updatedAt=1714812134395" alt="" />
          <img className="h-36" src="https://ik.imagekit.io/princeSherwa/Personal/samsung.png?updatedAt=1714812143813" alt="" />
          <img className="h-36" src="https://ik.imagekit.io/princeSherwa/Personal/netflix.png?updatedAt=1714812140609" alt="" />
          <img className="h-36 col-start-2" src="https://ik.imagekit.io/princeSherwa/Personal/meta.png?updatedAt=1714812139982" alt="" />
          <img className="h-36" src="https://ik.imagekit.io/princeSherwa/Personal/apple.png?updatedAt=1714812128716" alt="" />
        </div>
      </div>
      <div className="mt-20">
        <TestimonialSection heading="What Our Achievers Say!" />
      </div>
      <div>
        <AchieverSection />
      </div>
      <div>
        <div className="grid place-items-center mt-12">
          <img className="h-20" src="https://ik.imagekit.io/princeSherwa/Personal/mainLogo.png?updatedAt=1714812140235" alt="" />
        </div>
        <div className="w-full grid place-items-center mt-8 gap-6">
          <p className="text-xl font-semibold">Let's Connect</p>
          <div className="flex gap-10">
            <HashLink className="hover:scale-150 duration-200">
              <FiInstagram size={36} />
            </HashLink>
            <HashLink className="hover:scale-150 duration-200">
              <FiFacebook size={36} />
            </HashLink>
            <HashLink className="hover:scale-150 duration-200">
              <FiLinkedin size={36} />
            </HashLink>
            <HashLink className="hover:scale-150 duration-200">
              <FiTwitter size={36} />
            </HashLink>
            <HashLink className="hover:scale-150 duration-200">
              <FiYoutube size={36} />
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
