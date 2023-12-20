"use client";
import React from 'react';

const Hamburger = () => {
  const handleClick = () => {
    document.body.classList.toggle("navShown")
  };
      return (
            <div onClick={handleClick} className="hamburger-wrap flex">
            <div className="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
      );
};

export default Hamburger;