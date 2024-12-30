import React from "react";
import videoBg from "../assets/videoBg.mp4";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop className="video" />
      <div className="description ">
        <h1 className="text-8xl text-teal-200 font-bold">SOUMYA SEN</h1>
        <p className="text-2xl text-teal-200 m-4 ml-0">MERN Stack and WordPress Developer</p>
      </div>
      <div className="B">
        <Link
          to={"/about"}
          target="_self"
          className={`${
            pathname === "/about"
              ? "text-lime-200 p-2"
              : ""
          }`}
        >
          <button className="button text-teal-200">About Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
