import sixShots from "../../public/assets/projects/6shots.png";
import artGallery from "../../public/assets/projects/art_gallery.png";
import facemash from "../../public/assets/projects/facemash.png";
import moreboolets from "../../public/assets/projects/i_need_more_boolets.jpg";
import jellosquash from "../../public/assets/projects/jellosquash.png";
import ev3guides from "../../public/assets/projects/repair_guide.png";
import pcbuild3r from "../../public/assets/projects/pcbuild3r_icon.png";
import conveyorBuds from "../../public/assets/projects/conveyor_buds.png";
import metromantap from "../../public/assets/projects/metro_mantap.png";
import onlyNews from "../../public/assets/projects/only_news.png";
import shareEstate from "../../public/assets/projects/share_estate.jpeg";
import { StaticImageData } from "next/image";

interface CardData {
  title: string;
  description: string;
  profit?: number;
  logo: StaticImageData;
  link: string;
}

export const projectCard: CardData[] = [
  {
    title: "MetroMantap",
    logo: metromantap,
    description:
      "Real-Time Crowd Management System for Railway Stations",
    link: "/projects/metroMantap.mdx",
  },
  {
    title: "OnlyNews",
    logo: onlyNews,
    description:
      "System that connects donors who have excess items with recipients",
    link: "/projects/onlyNews.mdx",
  },
  {
    title: "Conveyor Buds",
    logo: conveyorBuds,
    description:
    "Luggage-matching game where players manage baggage and earn upgrades.",
    link: "https://miisan.itch.io/conveyor-buds",
  },
  {
    title: "ShareEstate",
    logo: shareEstate,
    description:
    "Platform for fractional property ownership through blockchain and smart contracts",
    link: "https://devfolio.co/projects/share-estate-932c",
  },
  {
    title: "LendLah",
    logo: sixShots,
    description:
    "Microfinance Accessibility for Small Businesses",
    link: "/projects/lendLah.mdx",
  },
  {
    title: "PCBUILD3R",
    logo: pcbuild3r,
    description:
      "Computer hardware e-commerce platform featuring virtual PC assembly simulation",
    link: "https://github.com/Vincexodus/PCBUILD3R",
  },
  {
    title: "Art Portfolio",
    logo: artGallery,
    description:
      "Basic Art Portfolio website built with Next.js, DaisyUI & Resend",
    link: "https://jackchin.vercel.app/",
  },
  {
    title: "Facemash",
    logo: facemash,
    description:
      "Website from 'The Social Network' in comparing farm animals instead of people",
    link: "https://vincexodus.github.io/Facemash/",
  },
  {
    title: "EV3 Tools & Guides",
    logo: ev3guides,
    description:
      "Blogpost related to EV3 Tools & Guides using GitHub pages",
    link: "https://vincexodus.github.io/EV3-Tools-and-Guides/",
  },
  {
    title: "I need more boolets",
    logo: moreboolets,
    description:
      "An endless 2D shooter where players score by eliminating enemies",
    link: "https://vincexodus.itch.io/i-need-more-boolets",
  },
  {
    title: "Jello Squash",
    logo: jellosquash,
    description:
      "Mass-gaining 3D game with escalating challenges",
    link: "https://nixon-voxell.itch.io/jellosquash",
  },
  {
    title: "6 Shots",
    logo: sixShots,
    description:
      "Strategy shooter where the player defeats zombies with limited bullets",
    link: "https://nixon-voxell.itch.io/6shots",
  },
];
