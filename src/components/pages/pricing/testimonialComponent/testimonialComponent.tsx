"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const TestimonialComponent = ({
  direction = "left",
}: {
    direction?: "left" | "right" | "up" | "down" |undefined
}) => {
  return (
    <Marquee direction={direction}>
      <div className="testimonial-component">
        <div className="testimonial-component-content">
          <p className="small-text">
            Mosharaf is a pleasure to work with. He and his team do excellent
            work and are very knowledgeable and talented. They are also always
            very resposive and easy to work with. If they bid on your project,
            hire them, and I can assure you won’t be disappointed.
          </p>
        </div>
        <div className="testimonial-component-author flex">
          <div className="testimonial-component-author-thumb">
            <figure>
              <Image
                width={500}
                height={500}
                src="/img/shay-wright1.png"
                alt="author-thumb"
              />
            </figure>
          </div>
          <div className="testimonial-component-author-content">
            <h6>Shay Wright</h6>
            <em>Director of SEO Big Marketing</em>
          </div>
        </div>
      </div>
      <div className="testimonial-component">
        <div className="testimonial-component-content">
          <p className="small-text">
            He is a dream to work with! Very efficient and quality of
            workmanship was beyond my expectations. A developer who is skillful
            in WordPress. You can trust him as an honest and skillful developer.
            Great work experience and we highly recommend this contractor.{" "}
          </p>
        </div>
        <div className="testimonial-component-author flex">
          <div className="testimonial-component-author-thumb">
            <figure>
              <Image
                width={500}
                height={500}
                src="/img/Hayden-Hamilton-Walker-1.png"
                alt="author-thumb"
              />
            </figure>
          </div>
          <div className="testimonial-component-author-content">
            <h6>Hayden Walker</h6>
            <em>CO-FOUNDER Cryptolab</em>
          </div>
        </div>
      </div>
      <div className="testimonial-component">
        <div className="testimonial-component-content">
          <p className="small-text">
            He is a dream to work with! Very efficient and quality of
            workmanship was beyond my expectations. A developer who is skillful
            in WordPress. You can trust him as an honest and skillful developer.
            Great work experience and we highly recommend this contractor.{" "}
          </p>
        </div>
        <div className="testimonial-component-author flex">
          <div className="testimonial-component-author-thumb">
            <figure>
              <Image
                width={500}
                height={500}
                src="/img/ivan1.png"
                alt="author-thumb"
              />
            </figure>
          </div>
          <div className="testimonial-component-author-content">
            <h6>Ivan Lo</h6>
            <em>Founder and CEO Airgle Corporation</em>
          </div>
        </div>
      </div>
      <div className="testimonial-component">
        <div className="testimonial-component-content">
          <p className="small-text">
            He is a dream to work with! Very efficient and quality of
            workmanship was beyond my expectations. A developer who is skillful
            in WordPress. You can trust him as an honest and skillful developer.
            Great work experience and we highly recommend this contractor.{" "}
          </p>
        </div>
        <div className="testimonial-component-author flex">
          <div className="testimonial-component-author-thumb">
            <figure>
              <Image
                width={500}
                height={500}
                src="/img/Hayden-Hamilton-Walker-1.png"
                alt="author-thumb"
              />
            </figure>
          </div>
          <div className="testimonial-component-author-content">
            <h6>Hayden Walker</h6>
            <em>CO-FOUNDER Cryptolab</em>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default TestimonialComponent;
