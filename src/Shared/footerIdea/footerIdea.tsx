import Link from "next/link";
import React from "react";
import CommonPattern from "../commonPattern/commonPattern";

const FooterIdea = () => {
  return (
    <div className="cta-wrap">
      <div className="common-wrap clear">
        <div className="cta-inner flex animate-from-bottom">
          <CommonPattern className="common-pattern" numOfDiv={5} />

          <div className="cta-content">
            <h2 className="animate-from-bottom split-heading justify-center">
              Have a project idea to collaborate with?
            </h2>
            <div className="cta-content-btn flex animate-from-bottom">
              <Link href="/contact" className="btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterIdea;
