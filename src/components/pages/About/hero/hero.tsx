import React from 'react';

const Hero = () => {
      return (
            <div className="hero-inner flex">
              <div className="hero-content-wrap flex">
                <div className="hero-title animate-from-bottom">
                  <h1 className="split-heading text-4xl md:text-5xl lg:text-[55px] font-bold !leading-[75px]">
                    Get to know us more and why we exist
                  </h1>
                </div>
                <div className="hero-content animate-from-bottom">
                  <p className='leading-9'>
                  One of the first things you should know about us is that we don&apos;t do everything. But what we do, we do well. We always try to value our clients time and money. Let us prove it by involving us with you with any of the following services. We&apos;d be happy to serve you with our maximum effort.
                  </p>
                </div>
              </div>
            </div>
      );
};

export default Hero;