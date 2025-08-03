import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center ">
      <section className="mt-50 text-center">
        <h1 className="text-9xl font-semibold tracking-wide mb-2">tldr;</h1>
        <p className="text-neutral-500">Tell summaries, not stories.</p>
        <div className="flex gap-2 items-center justify-center mt-4">
          <button className="primary_btn">tldr it</button>
          <button className="secondary_btn">Explore</button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
