"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const itemStyle = 'absolute bottom-2 left-0 w-0 h-1 bg-white transition-all duration-500 ';
  const baseStyle = itemStyle + 'group-hover:w-full';
  const activeStyle = itemStyle + 'w-full';

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    // Assuming your section IDs are 'project', 'about', and 'contact'
    const sections = ['project', 'about', 'contact'];
  
    // Find the section that is currently in view
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      return element ? scrollPosition >= element.offsetTop - 50 : false;
    });
  
    // Update the state only if currentSection is defined
    if (currentSection !== undefined) {
      setActiveSection(currentSection);
      console.log(activeSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "project", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="z-10 min-h-5vh sticky top-0 left-0 w-full backdrop-blur-xl">
      <nav className="flex p-2 justify-between items-center w-11/12 m-auto">
        <Link className="flex" href="/">
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
                className={`group list-none inline-block relative py-4 ${
                  activeSection === item.id ? "text-red" : "text-white"
                }`}
              >
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
