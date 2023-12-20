"use client";
import TestimonialCard from "@/components/pages/Home/testimonialCard/testimonialCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

type TTestimonial = {
  id: string;
  name: string;
  image: string;
  designation: string;
  description: string;
  
}[]

const Testimonial = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const handleNextSlideClick = () => {
    if (swiperRef.current) {
      // Null check
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePrevSlideClick = () => {
    if (swiperRef.current) {
      // Null check
      swiperRef.current.swiper.slidePrev();
    }
  };



  // testimonial from db
  const [testimonial, setTestimonial] = useState<TTestimonial>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/testimonial`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTestimonial(data);
      })
  }, [])



  return (
    <div>
      <div className="testimonial-button">

        <button onClick={handlePrevSlideClick} className="text">
          {/* <Image width={100} height={100} alt='arrow' src='/next.png'/> */}
          <FaAngleLeft />
        </button>{" "}
        <button onClick={handleNextSlideClick} className="w-16 h-16 rounded-full   ">
          <FaAngleRight />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={50} slidesPerView={1}
        breakpoints={
          {

            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }
        }
      >


        {
          testimonial.map(item => {
            return (
              <>
                <SwiperSlide>
                  <TestimonialCard
                    testimonial={item?.description
                    }
                    authorImg={item?.image}
                    authorName={item?.name}
                    authorDesignation={item?.designation}
                  />
                </SwiperSlide>

              </>
            )
          })
        }





        {/* <SwiperSlide>
          <TestimonialCard
            testimonial="He is a dream to work with! Very efficient and quality
                        of workmanship was beyond my expectations. A developer
                        who is skillful in WordPress. You can trust him as an
                        honest and skillful developer. Great work experience and
                        we highly recommend this contractor."
            authorImg="/img/Hayden-Hamilton-Walker-1.png"
            authorName="Hayden Walker"
            authorDesignation="CO-FOUNDER Cryptolab"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            testimonial=" He is a dream to work with! Very efficient and quality
                        of workmanship was beyond my expectations. A developer
                        who is skillful in WordPress. You can trust him as an
                        honest and skillful developer. Great work experience and
                        we highly recommend this contractor."
            authorImg="/img/ivan1.png"
            authorName="Ivan Lo"
            authorDesignation="Founder and CEO Airgle Corporatio"
          />n
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            testimonial="He is a dream to work with! Very efficient and quality
                        of workmanship was beyond my expectations. A developer
                        who is skillful in WordPress. You can trust him as an
                        honest and skillful developer. Great work experience and
                        we highly recommend this contractor."
            authorImg="/img/Hayden-Hamilton-Walker-1.png"
            authorName="Hayden Walker"
            authorDesignation="CO-FOUNDER Cryptolab"
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
