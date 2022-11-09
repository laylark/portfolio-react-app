import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#eceff9] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/683c2c99-f1d3-4833-ad46-6d1c3154ca66"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#1F6492] text-gray-800">
            Contact
          </p>
          <p className="text-gray-800 py-4">
            Want to learn more? Get in touch to work with me or simply say
            hello.
          </p>
        </div>
        <input
          className="bg-[#dde0f0] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#dde0f0]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#dde0f0] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-black border-2 hover:text-white hover:bg-[#1F6492] hover:border-[#1F6492] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;