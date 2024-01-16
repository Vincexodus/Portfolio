import React from "react";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <div className="overflow-hidden w-full bg-center bg-no-repeat relative text-center py-5">
      <a href="https://github.com/Vincexodus/portfolio" target="_blank">
        <p className="py-1">View Source</p>
      </a>
      <p className="py-1">@ {currentYear} Vincent Chin. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
