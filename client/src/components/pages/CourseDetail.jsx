import React from "react";
import { useParams } from "react-router-dom";
import { allCourses } from "../pages/ProductObject";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import logo from "../../assets/mainLogo.png";

const CourseDetail = () => {
  const { id } = useParams();

  const course = allCourses.find((course) => course.id === parseInt(id));

  return (
    <div className="">
      <div className="w-full relative h-[300px] bg-[#9600AE]/[0.3]">
        <div className="p-4 pl-24 pt-10">
          <p className="text-3xl font-bold">{course.title}</p>
          <div className="flex gap-5 mt-4 ">
            <div className="flex gap-4 justify-center items-center">
              <GiSandsOfTime size={20} />{" "}
              <p className="text-lg font-bold">45 Days</p>
            </div>

            <div className="flex gap-4 justify-center items-center">
              <FaCalendarAlt size={20} />
              <p className="text-lg font-bold">4 days a Week</p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-xl font-extrabold">4+</p>
              <p className="text-lg font-bold">Projects</p>
            </div>
          </div>
          <p className="mt-4 font-semibold">{course.description}</p>
          <div className="flex justify-left mt-4 items-center gap-2">
            <p className="bg-[#eebb08] p-1 px-4 rounded-lg text-[#9600ae]">
              Bestseller
            </p>
            <p className="font-semibold">4.9</p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="mt-3">
            Created By :{" "}
            <Link className="hover:underline">{course.author} </Link>
          </p>
          <div className="flex justify-left items-center gap-3 mt-3">
            <p>Last Updated 3/24</p>
            <div className="flex items-center justify-center gap-1">
              <CiGlobe />
              Hinglish
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-56 w-full grid place-items-end pr-24">
        <div className="h-[350px] w-[300px] rounded-lg z-10 p-2 shadow-lg shadow-[#9600ae] bg-white">
          <div className="rounded-md min-h-[200px] overflow-hidden">
            <img src={course.src} className="h-[200px] object-fill" alt="" />
          </div>
          <div className="mt-2 grid place-items-center">
            <p className="text-xs font-bold">
              Special Discounted Price{" "}
              <span className="bg-[#9600AE] p-1 px-3 rounded-full text-white">
                30% OFF
              </span>
            </p>
            <p className="text-3xl mt-2 font-bold">
              ₹{course.price}{" "}
              <span className=" line-through text-xl font-semibold text-slate-400">
                ₹18570
              </span>
            </p>
            <Link className="mt-4">
              <p className="button w-[200px]">Buy Now</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="-mt-32">
        <div className="mt-6 w-[70%] pl-24 py-2 ">
          <div className=" flex flex-col p-4 bg-[#9600AE]/[0.2] rounded-xl">
            <p className="text-2xl font-semibold bg-[#eebb08]/[0.6] text-center py-2 rounded-xl">What You'll Learn</p>
            <div className="flex gap-4 mt-4">
              <div className="grid gap-6 font-medium">
                <p>
                  ✓ You will master the Python programming language by building
                  100 unique projects over 100 days.
                </p>
                <p>✓ You will be able to program in Python professionally</p>
                <p>
                  ✓ Create a portfolio of 100 Python projects to apply for
                  developer jobs
                </p>
                <p>
                  ✓ Be able to use Python for data science and machine learning
                </p>
              </div>
              <div className="grid gap-6 font-medium">
                <p>✓ Build GUIs and Desktop applications with Python</p>
                <p>
                  ✓ You will learn automation, game, app and web development,
                  data science and machine learning all using Python.
                </p>
                <p>
                  ✓ You will learn Selenium, Beautiful Soup, Request, Flask,
                  Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.
                </p>
                <p>
                  ✓ Be able to build fully fledged websites and web apps with
                  Python
                </p>
                <p>✓ Build games like Blackjack, Pong and Snake using Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <p className=" p-2 text-2xl  font-semibold px-12 shadow-md rounded-xl shadow-[#9600ae] uppercase">Check out other courses</p>
      </div>
      <div>
        <div className="grid place-items-center mt-12">
          <img className="h-20" src={logo} alt="" />
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
    </div>
  );
};

export default CourseDetail;
