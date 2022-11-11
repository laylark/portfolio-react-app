import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-hero bg-no-repeat bg-cover md:bg-fixed"
    >
      {/* Container */}
      <div className="max-w[1000px] px-[4rem] lg:px-[9rem] mx-auto flex flex-col justify-center h-full">
        <p className="text-[#454545] font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#546696]">
          Layla Krauss
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#45537a]">
          I am a Software Developer
        </h2>
        <p className="text-[#45537a] sm:font-black py-4 wax-w-[700px]">
          <span className="sm:bg-[rgba(83,87,115,0.7)] sm:text-white">
            I'm continuously learning to build cool things for the web. My
            current focus is building responsive full-stack web applications.
          </span>
        </p>
        <div>
          <Link
            to="projects"
            className="group/foo inline-block text-white border-[#454545] bg-[#454545] border-2 px-6 py-3 my-2 hover:bg-opacity-0 hover:border-[#7a49a5] hover:text-[#7a49a5]"
            smooth={true}
            duration={500}
            offset={-75}
          >
            View Projects
            <span className="group-hover/foo:rotate-90 durations:300 inline-block">
              <HiArrowNarrowRight className="ml-3 inline" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
