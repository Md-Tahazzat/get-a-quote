import NavSlider from "@/Shared/NavSlider/navSlider";
import NavBar from "@/Shared/NaveBar/NavBar";
import "@/css/tailwind/globals.css";
import React from "react";
import "../globals.css";

type LayoutPropsType = {
  children: React.ReactNode;
};

const WithoutNavAndFooterLayout = ({ children }: LayoutPropsType) => {
  return (
    <>
      <main className="main-wrap">
        <NavBar />
        {children}
        <NavSlider />
      </main>
    </>
  );
};

export default WithoutNavAndFooterLayout;
