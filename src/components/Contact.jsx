import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#f2f4fa] flex justify-center items-center flex-wrap p-16"
    >
      <form
        method="POST"
        action="https://getform.io/f/683c2c99-f1d3-4833-ad46-6d1c3154ca66"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FF7200] text-gray-800">
            Contact
          </p>
          <p className="text-gray-800 py-4">
            Want to learn more? Get in touch to work with me or simply say
            hello.
          </p>
        </div>
        <input
          className="bg-[#e5e5e5] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#e5e5e5]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#e5e5e5] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-[#454545] border-[#454545] border-2 hover:text-white hover:bg-[#FF7200] hover:border-[#FF7200] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
      <div className="w-full flex justify-center pt-10">
        <ul className="flex">
            <li className="w-[140px] h-[45px] flex mx-2 items-center hover:bg-[#FF7200]/80 duration-300 bg-blue-600 text-gray-300 hover:text-[#333333]">
              <a
                className="flex justify-between items-center w-full"
                href="https://www.linkedin.com/in/layla-krauss/" target="_blank" rel="noopener noreferrer"
              >
                Linkedin
                <FaLinkedin size={25} />
              </a>
            </li>
            <li className="w-[140px] h-[45px] flex mx-2 items-center hover:bg-[#FF7200]/80 duration-300 bg-[#333333] text-gray-300 hover:text-[#333333]">
              <a
                className="flex justify-between items-center w-full"
                href="https://github.com/laylark" target="_blank" rel="noopener noreferrer"
              >
                GitHub
                <FaGithub size={30} />
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Contact;
