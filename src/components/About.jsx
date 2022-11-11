import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#f2f4fa] text-gray-800 flex items-center"
    >
      <div className="flex flex-col justify-center items-center w-full h-full p-16">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#7a49a5]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Layla. I build cool things for the web and beyond.</p>
          </div>
          <div>
            <p>
              My favorite part of being a full-stack developer is the rapid pace
              of technological change<span>&#8212;</span>
              meaning there are always new learning opportunities. My goal is to
              create meaningful software to help others increase productivity at
              work, home, or anywhere. I have the most fun building data-driven
              projects using databases, Python, Javascript, and APIs; however, I
              do enjoy making responsive front-end web applications.
            </p>
            <p className="py-4">
              I am also a mom, registered dietitian nutritionist, adjunct
              instructor, and avid community volunteer. You can find me at many
              local tech meetups in OKC!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
