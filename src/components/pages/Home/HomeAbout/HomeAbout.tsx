 "use client"

import React, { useEffect, useState } from 'react';
import CommonPattern from '@/Shared/commonPattern/commonPattern';

import Image from 'next/image';
import { SectionTitleLeftAlign } from '@/Shared/sectionTitle/sectionTitle';



type HeroAbout={
  id:string
  title: string,
  subtitle: string,
  image:string
}[]


const HomeAbout = () => {

 const [about,setHomeAbout]=useState<HeroAbout>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/about`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setHomeAbout(data)
     })
    

  },[])

// Todo--faruk--need to update paragraph from dashboard
   
  return (
    <>
      
      <div className="home-about-wrap">
          <div className="common-wrap clear">
            <div className="home-about-inner flex">
              <div className="home-about-title-wrap flex">
                <div className="home-about-title animate-from-bottom">
                  <SectionTitleLeftAlign
                  title={(about as HeroAbout)[0]?.title}
                  subtitle={(about as HeroAbout)[0]?.subtitle}

                  
                />
             
                
                  <div className="home-about-title-thumb-wrap">
                    <div className="home-about-title-thumb animate-from-bottom">
                      <figure>
                        <Image
                          width={500}
                          height={500}
                          src={(about as HeroAbout)[0]?.image}
                          alt="about-thumb"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-about-content-wrap flex">
                <div className="home-about-content animate-from-bottom">
                  <p>
                    Welcome to the enchanting world of WebTricker, where dreams
                    are not just woven but sculpted into digital masterpieces.
                    Under the inspired leadership of Md Mosharaf Hossain, our
                    agency thrives as a haven of creativity and dedication.
                    Boasting an impressive track record of 500+ completed
                    projects, we stand as torchbearers of excellence and
                    innovation.
                  </p>
                  <p>
                    At WebTricker, we aren&apos;t just a web design and
                    development agency; we are the architects of digital
                    innovation, the dreamweavers who turn ideas into captivating
                    online realities. Our journey is fueled by creativity,
                    commitment, and an unwavering passion for delivering
                    exceptional web solutions that not only meet but exceed
                    expectations.
                  </p>
                  <p className="">
                    Our process begins with empathetic listening, understanding
                    your aspirations as if they were our own. Through meticulous
                    UX research, captivating UI/UX design, dynamic motion
                    design, and proficient web development, we breathe life into
                    your concepts. Our true success is measured in the value we
                    deliver, and the trust we foster through transparent and
                    impeccable service.
                  </p>
                  <p className="">
                    Dare to dream, and trust us to transform your visions into
                    reality. Join us at webtricker.com to embark on an
                    unforgettable journey of trust, innovation, and digital
                    magnificence.
                  </p>
                </div>

                <CommonPattern
                  className="common-pattern home-about-pattern  animate-from-bottom"
                  numOfDiv={3}
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default HomeAbout;