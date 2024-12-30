import React from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
import image from "../assets/image.jpg";
import { FaRegEye } from "react-icons/fa";
import Graduation from "../assets/Graduation.webp";
import HS from "../assets/HS.webp";
import Secondary from "../assets/Secondary.webp";
import SkillsBar from "../components/Skillsbar/SkillsBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
    <Navbar />
      <div className="about-section w-full h-[535px] mb-4">
        <div className="container-1 text-white bg-gray-900 rounded-l-lg shadow-gray-700 shadow-xl ">
          <h1 className="text-4xl mb-6 text-center">Hello I'M Soumya Sen</h1>
          <p className="text-lg mb-4 text-center">
            I'm a MERN Stack Developer and WordPress Developer. Welcome to my
            portfolio website.
          </p>
          <p className="text-lg mb-4 pl-9 text-left">
            Ganrapota,Bongaon,West Bengal,India.
          </p>
          <Link
            to={"/contact"}
            target="_self"
            className={`${pathname === "/contact" ? "text-lime-500  p-2" : ""}`}
          >
            <button className="text-lg border-white border-2 hover:border-lime-400 hover:border-2 hover:text-lime-200 rounded-lg ml-9 p-2">
              Contact Me
            </button>
          </Link>
        </div>
        <div className="container-2 ">
          <div>
            <img
              src={image}
              alt="My Image"
              className="w-[350px] h-[350px] border-teal-400 border-2 rounded-r-lg shadow-teal-500 shadow-2xl "
            />
          </div>
        </div>
      </div>
      <div className="education-section w-full h-[500px]">
        <div className="heading ">
          <h1 className="text-center text-4xl font-semibold underline">
            Educational Qualification
          </h1>
        </div>
        <div className="container-3  rounded-lg p-5 pl-12 bg-white border-red-200 border-2 shadow-red-200 shadow-xl">
          <h1 className="text-center underline text-2xl font-semibold mb-2">
            Graduation
          </h1>
          <p className="text-lg font-medium">
            Bachelor of Science: Computer Science | 2024
          </p>
          <p className="text-lg font-medium">
            West Bengal State University | CGPA- 9.08
          </p>
          <h1 className="text-center underline text-2xl font-semibold mb-2">
            Higher Secondary
          </h1>
          <p className="text-lg font-medium">
            Higher Secondary Examination | 2021
          </p>
          <p className="text-lg font-medium">WBCHSE | 83.4%</p>
          <h1 className="text-center underline text-2xl font-semibold mb-2">
            Secondary
          </h1>
          <p className="text-lg font-medium">Secondary Examination | 2019</p>
          <p className="text-lg font-medium">WBBSE | 83.85%</p>
        </div>
        <div className="container-4 rounded-lg bg-white border-2 border-orange-300 shadow-orange-300 shadow-2xl">
          <h1 className="text-center text-3xl font-bold uppercase underline mb-8">
            Certificates
          </h1>
          <ul className="flex flex-row justify-around items-center text-center text-lg font-medium underline">
            <li>Graduation</li>
            <li>Higher Secondary</li>
            <li>Secondary</li>
          </ul>
          <ul className="flex flex-row justify-around items-center p-1 gap-2 mb-3">
            <li>
              <img
                src={Graduation}
                className="w-[180px] h-auto"
                alt="Graduation Certificate"
              />
            </li>
            <li>
              <img src={HS} className="w-[180px] h-auto" alt="Hs Certificate" />
            </li>
            <li>
              <img
                src={Secondary}
                className="w-[180px] h-auto"
                alt="Secondary Certificate"
              />
            </li>
          </ul>
          <div className="flex flex-row justify-around items-center">
            <Link
              to="/certificates"
              target="_self"
              className={`${pathname === "/certificates" ? "" : ""}`}
            >
              <button className="flex flex-row justify-center items-center gap-2 border-black border-2 rounded-md p-1 hover:border-orange-300 hover:text-orange-300">
                View Certificate <FaRegEye />
              </button>
            </Link>
            <Link
              target="_self"
              to="/certificates"
              className={`${pathname === "/certificates" ? "" : ""}`}
            >
              <button className="flex flex-row justify-center items-center gap-2 border-black border-2 rounded-md p-1 hover:border-orange-300 hover:text-orange-300">
                View Certificate <FaRegEye />
              </button>
            </Link>
            <Link
              target="_self"
              to="/certificates"
              className={`${pathname === "/certificates" ? "" : ""}`}
            >
              <button className="flex flex-row justify-center items-center gap-2 border-black border-2 rounded-md p-1 hover:border-orange-300 hover:text-orange-300">
                View Certificate <FaRegEye />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="skills-section w-full h-[500px] ">
        <div className="heading text-center text-xl font-semibold underline mb-8 mt-10">
          <h1>Professional Skills</h1>
        </div>
        <div className="text-lg text-center font-medium pl-96 pr-96 mb-5">
          <p>
            I Studied MERN Stack Development and WordPress Development from{" "}
            <a href="https://vidyastu.in/" target="blank">
              Vidyastu.
            </a>
            Here are my skill efficiency details.
          </p>
        </div>
        <SkillsBar />
      </div>
      <div className="Projects-section w-full h-[500px] mt-40">
        <div>
          <h1 className="text-4xl text-center font-semibold underline mt-4">
            Projects
          </h1>
        </div>
        <div className="text-lg text-center font-medium pl-96 pr-96 mt-5 mb-10">
          <p>I build some projects here are the links you can visit.</p>
        </div>
        <div className="container-5 border-2 border-sky-700 w-[500px] h-[300px] bg-white shadow-sky-700 shadow-2xl rounded-xl text-center p-12">
          <div className="mb-10">
            <p className="text-xl mb-4 font-sans font-semibold">
              Digital Art Fair Demo Frontend Project
            </p>
            <a href="https://digital-art-fair-demo.vercel.app/" target="_blank">
              <button className="font-medium border-black border-2 p-1 rounded-lg hover:border-sky-700 hover:border-2 hover:text-sky-700">
                {" "}
                View Project
              </button>
            </a>
          </div>
          <div>
            <p className="text-xl mb-4 font-sans font-semibold">
              Vidyastu Demo Frontend Project
            </p>
            <a href="https://vidyastu-demo.vercel.app/" target="_blank">
              <button className="font-medium border-black border-2 p-1 rounded-lg hover:border-sky-700 hover:border-2 hover:text-sky-700">
                {" "}
                View Project{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
