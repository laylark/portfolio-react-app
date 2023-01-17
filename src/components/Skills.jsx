import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Python from "../assets/python.png";
import BootstrapImg from "../assets/bootstrap.svg";
import Docker from "../assets/docker.png";
import SQLite from "../assets/sqlite.png";
import Shell from "../assets/shell.png";
import VSCode from "../assets/vscode.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#f2f4fa] text-gray-800"
    >
      {/* {Container} */}
      <div className="max-w-[1000px] mx-auto p-16 w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-[#FF7200]">Skills</p>
          <p className="py-4">
            // These are the technologies I've been working with lately
          </p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img className="w-20 my-4 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img className="w-20 my-4 mx-auto" src={CSS} alt="CSS icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img
                className="w-20 my-4 mx-auto"
                src={Javascript}
                alt="JavaScript icon"
              />
              <p className="my-4">JAVASCRIPT</p>
            </div>

            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img
                className="w-20 my-4 mx-auto"
                src={ReactImg}
                alt="React icon"
              />
              <p className="my-4">REACT</p>
            </div>
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img
                className="w-20 my-4 mx-auto"
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p className="my-4">TAILWIND</p>
            </div>
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img
                className="w-20 my-4 mx-auto"
                src={Github}
                alt="GitHub icon"
              />
              <p className="my-4">GITHUB</p>
            </div>
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img
                className="w-20 my-4 mx-auto"
                src={Python}
                alt="Python icon"
              />
              <p className="my-4">PYTHON</p>
            </div>
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img
                className="w-20 my-4 mx-auto"
                src={SQLite}
                alt="SQLite icon"
              />
              <p className="my-4">SQLite</p>
            </div>
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img
                className="w-20 my-4 mx-auto"
                src={BootstrapImg}
                alt="Bootstrap icon"
              />
              <p className="my-4">BOOTSTRAP</p>
            </div>
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img
                className="w-20 my-4 mx-auto"
                src={VSCode}
                alt="VS Code icon"
              />
              <p className="my-4">VS CODE</p>
            </div>
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img
                className="w-20 my-4 mx-auto"
                src={Shell}
                alt="Shell script icon"
              />
              <p className="my-4">SHELL</p>
            </div>
            <div className="bg-[#f6f7fa] shadow-md shadow-[#040c16] hover:scale-110 duration:500">
              <img
                className="w-20 my-4 mx-auto"
                src={Docker}
                alt="Docker icon"
              />
              <p className="my-4">DOCKER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
