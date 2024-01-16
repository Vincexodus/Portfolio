"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import AvatarCanvas from "./AvatarCanvas";
import { socialMediaLinks } from "./constants";

const IntroSection = () => {
  library.add(faGithub, faInstagram, faLinkedinIn, faTwitter);

  return (
    <section className="py-10 mb-20" id="intro">
      <div className="h-96">
        <AvatarCanvas />
      </div>
      <div className="text-center">
        <div className="w-1/2 m-auto">
          <h1 className="font-bold">Vincent Chin (CS student / Developer)</h1>
          <h3 className="text-justify py-5">
            I'm currently in my final year of Computer Science (General) Degree.
            I've been exploring Web Development, Competitive Programming, Game
            Development, Deep learning, etc. I enjoy listening to music, playing
            FPS games, watching tech-related videos, and binge-watching anime.
          </h3>

          <div className="border-4 border-white p-3 m-3 inline-block">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{ color: "white" }}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="py-5 space-x-8">
          {socialMediaLinks.map((socialMedia, index) => (
            <a
              key={index}
              href={socialMedia.link}
              target="_blank"
              className="p-4 border-b-4 border-transparent transition-all duration-500 hover:border-white"
            >
              <FontAwesomeIcon
                icon={socialMedia.icon}
                style={{ color: "white", fontSize: 25 }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
