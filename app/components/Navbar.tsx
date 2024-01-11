"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentRoute = usePathname();
  
  const itemStyle = 'absolute bottom-2 left-0 w-0 h-1 bg-white transition-all duration-500 ';
  const baseStyle = itemStyle + 'group-hover:w-full';
  const activeStyle = itemStyle + 'w-full';

  return (
    <div className="z-10 min-h-5vh bg-center bg-cover relative">
      <nav className="flex p-2 justify-between items-center w-11/12 m-auto">
        <Link className="flex" href="/">
          <img
            className="w-10 h-10 rounded-full"
            src="images/PixelProfile_white.png"
            alt="icon"
          />
          <h1 className="no-underline px-2 py-1 relative text-white">
              Vincent Chin
          </h1>
        </Link>
        <div className="flex-1 overflow-hidden text-right">
          <ul className="space-x-10">
            <li className="group list-none inline-block relative py-4">
            <span className={currentRoute === '/Projects' ? activeStyle : baseStyle}></span>
            <Link className="no-underline text-white" href="/Projects">
                Projects
              </Link>
            </li>
            <li className="group list-none inline-block relative py-4">
              <span className={currentRoute === '/About' ? activeStyle : baseStyle}></span>
              <Link className="no-underline text-white" href="/About">
                About
              </Link>
            </li>
            <li className="group list-none inline-block relative py-4">
              <span className={currentRoute === '/Contact' ? activeStyle : baseStyle}></span>
              <Link className="no-underline text-white" href="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
