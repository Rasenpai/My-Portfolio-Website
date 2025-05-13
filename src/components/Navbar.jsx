import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "border-b-2 border-yellow-300 pb-1 text-white font-semibold transition-all duration-200"
      : "text-gray-300 opacity-70 hover:text-white transition-all duration-200";

  return (
    <>
      {/* Top navbar */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-transparent shadow-md shadow-white/10 hidden xl:block"
        data-aos="fade-down"
      >
        <div className="flex justify-evenly items-center text-white px-10 py-6">
          <h1 className="text-2xl font-bold text-yellow-300">
            <NavLink to="/">Rasena {"</>"}</NavLink>
          </h1>

          <ul className="flex space-x-12 items-center font-semibold text-base">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className={navLinkClass}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/certificate" className={navLinkClass}>
                Certificate
              </NavLink>
            </li>
          </ul>

          <div className="text-3xl text-white opacity-80 hover:opacity-100 transition">
            <a
              href="https://github.com/Rasenpai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom navbar */}
      <div
        className="top-content flex justify-between p-5 xl:hidden"
        data-aos="fade-down"
      >
        <h1 className="text-xl font-bold text-yellow-300">
          <NavLink to="/">Rasena {"</>"}</NavLink>
        </h1>
        <div className="text-3xl text-white opacity-80 hover:opacity-100 transition">
          <a
            href="https://github.com/Rasenpai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <nav
        className="fixed bottom-0 w-full z-50 backdrop-blur-md bg-transparent shadow-md shadow-white/10 border-t-2 border-yellow-300 rounded-xl block xl:hidden"
        data-aos="fade-up"
      >
        <div className="flex justify-around items-center text-white p-7">
          <ul className="flex space-x-10 items-center font-semibold text-sm" data-aos-anchor-placement="top-bottom">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className={navLinkClass}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/certificate" className={navLinkClass}>
                Certificate
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
