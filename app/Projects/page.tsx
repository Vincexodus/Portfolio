import React from "react";

const ProjectsPage = () => {
  const wrapperStyle = "border-4 border-white group hover:bg-white transition-colors duration-500";
  const imgStyle = "transition-transform duration-500 ease-in-out group-hover:scale-125";
  const titleStyle = "py-1 font-bold text-center transition-colors duration-500 group-hover:text-[#202023]";
  const descStyle = "p-2 text-justify transition-colors duration-500 group-hover:text-[#202023]";
  const dividerStyle = "border-2 border-white";

  return (
    <div className="bg-cover">
      <h1 className="text-center py-5">Web Development</h1>
      <div className="w-4/5 grid grid-cols-4 m-auto gap-10 py-5">
        <div className={wrapperStyle}>
          <a href="https://jackchin.vercel.app/" target="_blank">
            <div className="overflow-hidden">
              <img
                src="/images/projects/art_gallery.png"
                alt="art_gallery.png"
                className={imgStyle}
              />
            </div>
            <hr className={dividerStyle} />
            <h3 className={titleStyle}>Art Portfolio</h3>
            <p className={descStyle}>
              Basic Art Portfolio website built with Next.js, DaisyUI & Resend
              that is deployed to Vercel
            </p>
          </a>
        </div>
        <div className={wrapperStyle}>
          <a href="https://vincentchin.vercel.app/" target="_blank">
            <div className="overflow-hidden">
              <img
                src="/images/projects/old_website.png"
                alt="old_website.png"
                className={imgStyle}
              />
            </div>
            <hr className={dividerStyle} />
            <h3 className={titleStyle}>Personal Portfolio</h3>
            <p className={descStyle}>
              Personal website built with Next.js, Three.js & Resend that is
              deployed to Vercel
            </p>
          </a>
        </div>
        <div className={wrapperStyle}>
          <a href="https://vincexodus.github.io/Facemash/" target="_blank">
            <div className="overflow-hidden">
              <img
                src="/images/projects/facemash.png"
                alt="facemash.png"
                className={imgStyle}
              />
            </div>
            <hr className={dividerStyle} />
            <h3 className={titleStyle}>Facemash</h3>
            <p className={descStyle}>
              Website clone from 'The Social Network' in comparing farm animals
              instead of people
            </p>
          </a>
        </div>
        <div className={wrapperStyle}>
          <a
            href="https://vincexodus.github.io/EV3-Tools-and-Guides/"
            target="_blank"
          >
            <div className="overflow-hidden">
              <img
                src="/images/projects/repair_guide.png"
                alt="repair_guide.png"
                className={imgStyle}
              />
            </div>
            <hr className={dividerStyle} />
            <h3 className={titleStyle}>EV3 Tools & Guides</h3>
            <p className={descStyle}>
              Blogpost on guides and tools for Lego Mindstorm EV3 using GitHub
              pages with Jekyll
            </p>
          </a>
        </div>
      </div>
      <h1 className="text-center py-5">Game Development</h1>
      <div className="w-4/5 grid grid-cols-4 m-auto gap-10">
        <div className={wrapperStyle}>
          <a
            href="https://vincexodus.itch.io/i-need-more-boolets"
            target="_blank"
          >
            <div className="overflow-hidden">
              <img
                src="/images/projects/i_need_more_boolets.jpg"
                alt="i_need_more_boolets.jpg"
                className={imgStyle}
              />
            </div>
            <hr className={dividerStyle} />
            <h3 className={titleStyle}>TitleThis! Game Jam 2023</h3>
            <p className={descStyle}>
              A 2D endless game built with Godot engine (Solo participation)
            </p>
          </a>
        </div>
        <div className={wrapperStyle}>
          <a href="https://nixon-voxell.itch.io/jellosquash" target="_blank">
            <div className="overflow-hidden">
              <img
                src="/images/projects/jellosquash.png"
                alt="jellosquash.png"
                className={imgStyle}
              />
            </div>
            <hr className={dividerStyle} />
            <h3 className={titleStyle}>Brackey's Game Jam 2021.1</h3>
            <p className={descStyle}>
              A 3D adventure game built with Unity3D engine
            </p>
          </a>
        </div>
        <div className={wrapperStyle}>
          <a href="https://nixon-voxell.itch.io/6shots" target="_blank">
            <div className="overflow-hidden">
              <img
                src="/images/projects/6shots.png"
                alt="6shots.png"
                className={imgStyle}
              />
            </div>
            <hr className={dividerStyle} />
            <h3 className={titleStyle}>Blackthornprod Game Jam #3</h3>
            <p className={descStyle}>
              A 2D survival game built with Unity3D engine
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
