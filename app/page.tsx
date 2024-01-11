"use client";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import AvatarCanvas from "./components/AvatarCanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color } from "three/examples/jsm/nodes/Nodes.js";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faDownload,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  library.add(faGithub, faInstagram, faLinkedin, faLinkedinIn, faTwitter);

  return (
    <main>
      <div className="bg-cover h-96">
        <AvatarCanvas />
      </div>
      <div className="bg-cover text-center">
        <div className="w-1/2 m-auto">
          <h1 className="text-2xl font-bold">Vincent Chin (CS student / Developer)</h1>
          <h3 className="text-justify py-5">
            I'm currently in my final year of Computer Science (General) Degree.
            I've been exploring Web Development, Competitive Programming, Game
            Development, Deep learning, etc. I enjoy listening to music, playing
            FPS games, watching tech-related videos, and binge-watching anime.
          </h3>

          <div className="border-4 border-white p-2 inline-block">
            <a href="/Resume.pdf" target='_blank' rel="noopener noreferrer">
              Resume{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{ color: "white" }}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div className="py-5 space-x-8">
          <a href="https://github.com/Vincexodus" target='_blank' className="p-4 border-b-4 border-transparent transition-all duration-500 hover:border-white">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              style={{ color: "white", fontSize: 25 }}
            />
          </a>
          <a href="www.linkedin.com/in/vincentchin23" target='_blank' className="p-4 border-b-4 border-transparent transition-all duration-500 hover:border-white">
            <FontAwesomeIcon
              icon={["fab", "linkedin-in"]}
              style={{ color: "white", fontSize: 25 }}
            />
          </a>
          <a href="https://www.instagram.com/vinccent23/" target='_blank' className="p-4 border-b-4 border-transparent transition-all duration-500 hover:border-white">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              style={{ color: "white", fontSize: 25 }}
            />
          </a>
          <a href="https://twitter.com/Vincexodus" target='_blank' className="p-4 border-b-4 border-transparent transition-all duration-500 hover:border-white">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              style={{ color: "white", fontSize: 25 }}
            />
          </a>
        </div>
      </div>
    </main>
  );
}
