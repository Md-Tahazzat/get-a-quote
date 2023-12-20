"use client";
import React, { ReactNode, useRef } from "react";

const NavBarWrapper = ({ children }: { children: ReactNode }) => {
 
  const handleWrapperClick = (e: any) => {
      document.body.classList.remove("navShown")
  };
  const handleNavbarClick = (e: any) => {
      e.stopPropagation();
  };
  return (
    <div onClick={handleWrapperClick}  className="navbar-wrap">
      <div onClick={handleNavbarClick}  data-lenis-prevent className="navbar">
        {children}
      </div>
    </div>
  );
};

export default NavBarWrapper;
