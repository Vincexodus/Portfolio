"use client";

import CardProject from "@/components/cardProject";
import { projectCard } from "@/data/projectCard";
import { Profile } from "@/components/profile";

export default function Home() {
  return (
    <>
      <section className="min-h-screen pb-20 pt-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex md:flex-row flex-col lg:items-center lg:gap-8 ">
            <Profile description="CS graduate who joins hackathons and enjoys experimenting with a bit of everything" />
            <div className="self-start animate_right md:w-full p-2 overflow-y-scroll space-y-0 no-scrollbar grid row-span-1 gap-4 lg:gap-10 md:grid-cols-2 ">
              {projectCard.map((card, index) => (
                <CardProject
                  key={index}
                  title={card.title}
                  logo={card.logo}
                  profit={card.profit}
                  link={card.link}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
