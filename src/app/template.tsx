"use client";

import { useEffect } from "react";
import gsap from "gsap";

const animatePageIn = (): void => {
  const bannerOne: HTMLElement | null = document.getElementById("banner-1");
  const bannerTwo: HTMLElement | null = document.getElementById("banner-2");
  const bannerThree: HTMLElement | null = document.getElementById("banner-3");
  const bannerFour: HTMLElement | null = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl: gsap.core.Timeline = gsap.timeline();
    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
    });
  }
};

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <>
      <div>
        <div
          id="banner-1"
          className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4"
        />
        <div
          id="banner-2"
          className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4"
        />
        <div
          id="banner-3"
          className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4"
        />
        <div
          id="banner-4"
          className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4"
        />
        {children}
      </div>
    </>
  );
}
