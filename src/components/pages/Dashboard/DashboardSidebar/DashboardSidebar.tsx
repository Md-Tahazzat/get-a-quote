/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import { sideLinks } from "@/data/DashboardSidebarLinks";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaExchangeAlt, FaPowerOff } from "react-icons/fa";
import Loading from "../../Loading/Loading";
import SideLink from "./SideLink";

const DashboardSidebar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [activeBorder, setActiveBorder] = useState(false);
  const [subMenuIndex, setSubMenuIndex] = useState<number | null>(null);

  const handleExpand = () => {
    setExpanded((prev) => {
      if (prev) setSubMenuIndex(null); // close the submenu if expanded===false
      return !prev;
    });
  };

  const handleLogOut = async () => {
    setLoading(true);
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/auth`);
    if (res.data.status === 200) {
      setLoading(false);
      router.push("/");
    } else {
      setLoading(false);
      alert("something went wrong. Couln't logout");
    }
  };

  return (
    <aside
      className={`relative duration-500 ${
        expanded ? "w-64" : "w-16"
      } border-r ${
        activeBorder ? "border-r-orange-500" : "border-r-slate-600"
      } h-[calc(100vh-63px)] overflow-y-auto drop-shadow-lg sticky top-[63px]`}
    >
      {/* sidebar customize button */}
      <button
        onClick={handleExpand}
        title={`Click to ${expanded ? "minimize" : "expand"}`}
        onMouseOut={() => setActiveBorder(false)}
        onMouseOver={() => setActiveBorder(true)}
        className={`duration-300 hover:cursor-move absolute top-1 -right-2 text-lg font-thin  ${
          activeBorder && "text-orange-500"
        } ${expanded ? "rotate-0" : "transform rotate-180 "}`}
      >
        <FaExchangeAlt className={""} />
      </button>

      {/*
        Sidebar Links
      */}
      <ul className="my-6">
        {sideLinks.map((link, index) => (
          <SideLink
            subMenuIndex={subMenuIndex}
            setSubMenuIndex={setSubMenuIndex}
            expanded={expanded}
            setExpanded={setExpanded}
            key={index}
            link={link}
            index={index}
          />
        ))}
      </ul>

      {/* Logout button */}
      <button
        type="button"
        className="flex w-full pl-5 items-center justify-start gap-2 py-2 text-gray-100  duration-150  hover:bg-dashboard-secondary hover:text-red-400"
        onClick={handleLogOut}
      >
        {loading ? (
          <Loading className="" />
        ) : (
          <FaPowerOff
            className={`duration-150 ${expanded ? "text-xl" : "text-2xl"}`}
          />
        )}
        <span
          className={`font-semibold duration-150 ${
            expanded ? "w-auto" : "w-0 overflow-hidden"
          }`}
        >
          Logout
        </span>
      </button>
    </aside>
  );
};

export default DashboardSidebar;
` 