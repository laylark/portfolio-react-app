import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#f2f4fa] text-gray-800">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#7a49a5]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Layla. I build cool things for the web and beyond.</p>
          </div>
          <div>
            <p>
              My passion is learning. My favorite part of being a developer is
              the rapid pace of technological change<span>&#8212;</span>meaning
              there are always new learning opportunities. I am a mom, software
              developer, registered dietitian nutritionist, adjunct instructor,
              and avid community volunteer. I have the most fun building
              data-driven projects using databases, Python, Javascript, and
              APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
