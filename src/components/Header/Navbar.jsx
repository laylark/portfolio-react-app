import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../../assets/logo-gray.svg";
import LogoWhite from "../../assets/logo-white.svg";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div>
        <img
          src={color ? LogoWhite : Logo}
          alt="Logo"
          style={{ width: "160px" }}
        ></img>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-80}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-80}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes className="text-white" />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#45537a] text-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
