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
            <p>Hi, I'm Layla, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              aperiam officiis quasi sequi odit laudantium corrupti fugit ipsa,
              odio natus quos asperiores earum dicta autem, neque, error
              molestiae quis itaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
