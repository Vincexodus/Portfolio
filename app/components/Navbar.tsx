"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "./constants";

const Navbar = () => {
  const itemStyle = "absolute bottom-2 left-0 w-0 h-1 bg-white transition-all duration-500 ";
  const baseStyle = itemStyle + "group-hover:w-full";
  const activeStyle = itemStyle + "w-full";

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = () => {
    const currentSection = navItems
    .map((item) => item.id)
    .find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 500 && rect.bottom >= 500;
      }
      return false;
    });
    (currentSection !== undefined)? setActiveSection(currentSection) : setActiveSection(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="z-10 min-h-5vh sticky top-0 left-0 w-full backdrop-blur-3xl">
      <nav className="flex p-2 justify-between items-center w-11/12 m-auto">
        <Link className="flex" href="#intro">
          <img
            className="w-10 h-10 rounded-full"
            src="images/PixelProfile_white.png"
            alt="icon"
          />
          <p className="no-underline px-2 py-1 relative text-white">
            Vincent Chin
          </p>
        </Link>
        <div className="flex-1 overflow-hidden text-right">
          <ul className="space-x-10">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="group list-none inline-block relative py-4"
              >
                <span className={activeSection === item.id ? activeStyle : baseStyle}></span>
                <Link href={`#${item.id}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
