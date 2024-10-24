"use client";

import { Profile } from "@/components/profile";

export default function About() {
  return (
    <>
      <section className="min-h-screen pb-20 pt-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex md:flex-row flex-col lg:items-center lg:gap-16 ">
            <Profile description="CS graduate who joins hackathons and enjoys experimenting with a bit of everything" />
            <div className="animate_right md:w-full overflow-y-scroll space-y-0 no-scrollbar grid">
              <article className="prose prose-lg dark:prose-invert">
                <h1>About</h1>
                <p className="text-justify">
                  As a computer science graduate passionate about building and
                  experimenting with technology, I like joining hackathons,
                  which push my creativity and problem-solving skills
                  <span style={{ textDecoration: "line-through" }}>
                    {" "}
                    (totally not because of the free swags and food)
                  </span>
                  . My strong interest in web3 and cutting-edge technologies
                  heavily influences my projects. Always eager to join
                  hackathons or competitions, I'm keen to collaborate—so feel
                  free to reach out if you're looking for a teammate!
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
