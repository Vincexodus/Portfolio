import React from "react";

const AboutSection = () => {
  return (
    <section className="py-10 my-10" id="about">
      <div className="w-4/5 my-10 m-auto">
        <div className="flex">
          <img
            src="/images/masked_portrait.png"
            alt="masked_portrait.png"
            className="w-1/3"
          />
          <div className="space-y-2 p-10">
            <h1 className="font-bold text-center py-5">Hello!</h1>
            <p>🧪 Final year computer science student based in Malaysia.</p>
            <p>🌱 Currently learning Full Stack Development, CTF, Competitive Programming.</p>
            <p>🗺️ Interested in Game Development, Machine Learning, Blockchain, IoT.</p>
            <p>⌛ Focuses on project based learning & co-curricular activities during free time.</p>
            <p>🕹️ Plays Overwatch & Apex Legends for fun.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
