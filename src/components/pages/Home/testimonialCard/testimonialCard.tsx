import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({testimonial, authorImg,authorName,authorDesignation}:{testimonial:string, authorImg:string,authorName:string,authorDesignation:string}) => {
      return (
            <div className="testimonial-component animate-from-bottom">
                    <div className="testimonial-component-content">
                      <p className="small-text">
                        
                        {testimonial}
                      </p>
                    </div>
                    <div className="testimonial-component-author flex">
                      <div className="testimonial-component-author-thumb">
                        <figure>
                          <Image
                            width={500}
                            height={500}
                            src={authorImg}
                            alt="author-thumb"
                          />
                        </figure>
                      </div>
                      <div className="testimonial-component-author-content">
                        <h6>{authorName}</h6>
                        <em>{authorDesignation}</em>
                      </div>
                    </div>
                  </div>
      );
};

export default TestimonialCard;