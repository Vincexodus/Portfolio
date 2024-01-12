import React from "react";

const AboutPage = () => {
  const currentAge: number = new Date().getFullYear() - 2002;

  return (
    <div className="bg-cover">
      <div className="w-4/5">
        <img
          src="/images/masked_portrait.png"
          alt="masked_portrait.png"
          className="w-1/3"
        />
        <h1 className="font-bold">Hello!</h1>
        <p>
          Tireless knowledge seeker who loves to code & contribute to
          open-source projects.
        </p>
        <div className="border-4">
          <h1 className="font-bold">Autobiography</h1>
          <p>How old am I? {currentAge}.</p>
          <p>Who am I? A final year CS student from Malaysia.</p>
          <p>
            What do I do during my free time? Project based learning,
            cocuricular activities.
          </p>
          <p>What games do I play? Overwatch, Apex Legends, and The Finals.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
