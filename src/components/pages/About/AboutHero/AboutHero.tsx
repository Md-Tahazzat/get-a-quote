"use client"

import CommonPattern from '@/Shared/commonPattern/commonPattern';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Counter from '../counter/counter';
import {  AboutHero } from '@prisma/client';

const AboutHero = () => {

  const [aboutHero, setAboutHero] = useState<AboutHero[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/about/abouthero`)
      .then((res) => res.json())
      .then((data: AboutHero[]) => setAboutHero(data))
      .catch((error) => console.error('Error fetching about hero:', error));
  }, []);

  const firstAboutHero = aboutHero[0]; // Accessing the first element of the aboutHero array
;
  return (

    <>
      <div className="hero-wrap about-hero">
        <CommonPattern className="common-pattern" numOfDiv={5} />

        <div className="common-wrap clear">
          {/* <Hero /> */}
          <div className="hero-inner flex">
            <div className="hero-content-wrap flex">
              <div className="hero-title animate-from-bottom">
                <h1 className="split-heading text-4xl md:text-5xl lg:text-[55px] font-bold !leading-[75px]">
                  {/* Get to know us more and why we exist */}
                  {firstAboutHero?.AboutTitle}
                </h1>
              </div>
              <div className="hero-content animate-from-bottom">
                <p className='leading-9'>
                  {/* Varius amet, integer tellus non eget viverra. Ultrices
                  tellus donec gravida id sed senectus dolor cursus sed.
                  Ullamcorper tellus ac cras nec, pretium laoreet duis.{" "} */}
                  {firstAboutHero?.AboutSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-counter-wrap mt-20">
        <div className="common-wrap clear">
          <div className="about-counter-inner flex">
            <div className="about-counter-thumb animate-from-bottom">
              <figure>
                <Image
                  width={500}
                  height={500}
                  src={firstAboutHero?.AboutImage}
                  alt="about-thumb"
                />
                {/* <Image
                  width={500}
                  height={500}
                  src="/img/about/image-1.jpg"
                  alt="about-thumb"
                /> */}
              </figure>
            </div>
            <div className="about-counter-item-wrap flex justify-center gap-4">
              <Counter title="Project Completed" number={100} />
              <Counter title="Award winner" number={4} />
              <Counter title="Satisfied Client" number={200} />
              <Counter title="Good Testimonials" number={300} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutHero;