"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const NavButton = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const handleClick = () => {
    document.body.classList.toggle("navShown");
  };
  return <span onClick={handleClick}>{children}</span>;
};

export default NavButton;
