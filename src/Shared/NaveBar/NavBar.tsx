import Hamburger from "@/components/Client/hamburger/hamburger";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="main-header-section">
        <div className="common-wrap clear">
          <div className="header-inner flex">
            <div className="header-logo-wrap flex">
              <div className="header-logo">
                <Link href="/">
                  <Image
                    width={500}
                    height={500}
                    src="/svgs/main-logo.svg"
                    alt="main-logo"
                  />
                </Link>
              </div>
              <Hamburger/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
