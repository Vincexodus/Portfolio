"use client";
import React, { useState } from "react";
import { Mail, CodeXml, Home, Info } from "lucide-react";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";

const BottomNavigation = () => {
  const Tools = [
    {
      name: "Home",
      icon: <Home className="text-black dark:text-white" size={20} />,
      link: "/",
    },
    {
      name: "About",
      icon: <Info className="text-black dark:text-white" size={20} />,
      link: "/about",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <>
      <div className=" fixed flex  gap-2 left-1/2 z-30 transform -translate-x-1/2 bottom-4  py-2 ">
        <ThemeSwitch />
        <ul className="flex bg-white justify-center items-center relative rounded-md border border-gray-700 dark:bg-[#09090b] p-2 ">
          {Tools.map((menu, index) => (
            <li key={index}>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link
                    href={menu.link}
                    className="flex flex-col text-center items-center cursor-pointer px-2"
                    onClick={() => setActive(index)}
                  >
                    <span
                      className={`${active === index ? "duration-700 opacity-100 font-bold" : "opacity-40"}`}
                    >
                      {menu.icon}
                    </span>
                  </Link>
                </HoverCardTrigger>

                <HoverCardContent className="w-80">
                  <div className="left-1/2 bottom-8 text-xs text-white transform -translate-x-1/2 absolute flex justify-center rounded-md border-[.5px] border-[#24262b] bg-[#16171a]  p-1 duration-300 space-x-4">
                    {menu.name}
                  </div>
                </HoverCardContent>
              </HoverCard>
            </li>
          ))}
          <li>
            <button
              className="flex flex-col text-center  items-center cursor-pointer px-2"
              onClick={() => {
                window.open("mailto:vincent4552@gmail.com");
              }}
            >
              <Mail className="text-black dark:text-white" size={20} />
            </button>
          </li>
        </ul>

        <div className="px-2 border rounded-md border-gray-700 bg-white dark:bg-[#09090b] py-2">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link
                href="https://github.com/vincexodus/portfolio"
                target="_blank"
                className="flex items-center justify-center gap-2 text-xs font-medium rounded-md"
              >
                <CodeXml className="text-black dark:text-white" size={20} />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="left-1/2 bottom-8 text-xs text-white transform -translate-x-1/2 absolute flex justify-center rounded-md border-[.5px] border-[#24262b] bg-[#16171a]  p-1 duration-300 space-x-4">
                source code
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
