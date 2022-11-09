import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w[1000px] px-[4rem] lg:px-[9rem] mx-auto flex flex-col justify-center h-full">
        <p className="text-[#1F6492]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Layla Krauss
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Software Developer
        </h2>
        <p className="text-[#8892b0] py-4 wax-w-[700px]">
          I'm continuously learning to build cool things for the web. My current
          focus is building responsive full-stack web applications.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500} offset={-50}>
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1F6492] hover:border-[#1F6492]">
              View Projects
              <span className="group-hover:rotate-90 durations:300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
