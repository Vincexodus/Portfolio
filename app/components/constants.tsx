import { IconProp } from "@fortawesome/fontawesome-svg-core";

const navItems = [
  { id: "project", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

interface SocialMediaLink {
  icon: IconProp;
  link: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: ["fab", "github"],
    link: "https://github.com/Vincexodus",
  },
  {
    icon: ["fab", "linkedin-in"],
    link: "https://www.linkedin.com/in/vincentchin23",
  },
  {
    icon: ["fab", "instagram"],
    link: "https://www.instagram.com/vinccent23/",
  },
  {
    icon: ["fab", "twitter"],
    link: "https://twitter.com/Vincexodus",
  },
];

interface ProjectItem {
  title: string;
  imageSrc: string;
  link: string;
  description: string;
}

interface ProjectCategory {
  category: string;
  items: ProjectItem[];
}

const projects: ProjectCategory[] = [
  {
    category: "Web Development",
    items: [
      {
        title: "Art Portfolio",
        imageSrc: "/images/projects/art_gallery.png",
        link: "https://jackchin.vercel.app/",
        description:
          "Basic Art Portfolio website built with Next.js, DaisyUI & Resend that is deployed to Vercel",
      },
      {
        title: "Personal Portfolio",
        imageSrc: "/images/projects/old_website.png",
        link: "https://vincentchin.vercel.app/",
        description:
          "Personal website built with Next.js, Three.js & Resend that is deployed to Vercel",
      },
      {
        title: "Facemash",
        imageSrc: "/images/projects/facemash.png",
        link: "https://vincexodus.github.io/Facemash/",
        description:
          'Website clone from "The Social Network" in comparing farm animals instead of people',
      },
      {
        title: "EV3 Tools & Guides",
        imageSrc: "/images/projects/repair_guide.png",
        link: "https://vincexodus.github.io/EV3-Tools-and-Guides/",
        description:
          "Blogpost on guides and tools for Lego Mindstorm EV3 using GitHub pages with Jekyll",
      },
    ],
  },
  {
    category: "Game Development",
    items: [
      {
        title: "TitleThis! Game Jam 2023",
        imageSrc: "/images/projects/i_need_more_boolets.jpg",
        link: "https://vincexodus.itch.io/i-need-more-boolets",
        description:
          "A 2D endless game built with Godot engine (Solo participation)",
      },
      {
        title: "Brackey's Game Jam 2021.1",
        imageSrc: "/images/projects/jellosquash.png",
        link: "https://nixon-voxell.itch.io/jellosquash",
        description: "A 3D adventure game built with Unity3D engine",
      },
      {
        title: "Blackthornprod Game Jam #3",
        imageSrc: "/images/projects/6shots.png",
        link: "https://nixon-voxell.itch.io/6shots",
        description: "A 2D survival game built with Unity3D engine",
      },
    ],
  },
];

export { navItems, socialMediaLinks, projects };
