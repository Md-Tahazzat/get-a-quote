import React, { FC } from "react";

const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="common-wrap clear">
      <div className="hero-inner flex">
        <div className="hero-content-wrap">
          <h1 className="split-heading justify-center text-4xl md:text-5xl lg:text-[55px] font-bold split-heading !leading-[75px]">
            {title}
          </h1>
          <p className="animate-from-bottom">{description}</p>
          <div className="hero-btn flex animate-from-bottom">
            <a href="#" className="btn">
              Discover More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
