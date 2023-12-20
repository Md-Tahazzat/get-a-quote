import { SideLinks } from "@/types/types";
import {
  FaFileCode,
  FaHome,
  // FaPhoneSquare,
  // FaProjectDiagram,
  // FaSuitcase,
  FaUsersCog,
} from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

// Please uncomment or add links according to your need.
export const sideLinks: SideLinks[] = [
  {
    id: 1,
    label: "Home",
    href: "/dashboard",
    icon: FaHome,
    // TODO: have to change the submenu items based on needs.
    submenu: [
      { label: "Update Banner", href: "/dashboard/update-banner" },
      { label: "Home", href: "/dashboard/hero-home" },
      { label: "Sponsor", href: "/dashboard/hero-sponsor" },
      { label: "About", href: "/dashboard/hero-about" },
      { label: "Service", href: "/dashboard/hero-service" },
      { label: "Project", href: "/dashboard/hero-project" },
      { label: "Testimonial", href: "/dashboard/hero-client" },
      { label: "Blog", href: "/dashboard/hero-blog" },
      { label: "Satisfied Client", href: "/dashboard/satisfied-client" },
    ],
  },
  {
    id: 2,
    label: "Users",
    href: "/dashboard/users",
    icon: FaUsersCog,
    // TODO: have to change the submenu items based on needs.
    submenu: [
      {
        label: "All users",
        href: "/dashboard/users",
      },
      {
        label: "Add user",
        href: "/dashboard/add-user",
      },
      {
        label: "Employees",
        href: "/dashboard/employees",
      },
      {
        label: "Add employee",
        href: "/dashboard/add-employee",
      },
    ],
  },
  {
    id: 3,
    label: "Services",
    href: "/dashboard/service",
    icon: FaFileCode,
    // TODO: have to change the submenu items based on needs.
    submenu: [
      {
        label: "Add service",
        href: "/dashboard/add-services",
      },
      {
        label: "All Services",
        href: "/dashboard/all-services",
      },
      {
        label: "Faq",
        href: "/dashboard/faq",
      },
    ],
  },
  // {
  //   id: 4,
  //   label: "Career",
  //   href: "/dashboard/career",
  //   icon: FaSuitcase,
  //   // TODO: have to change the submenu items based on needs.
  //   submenu: [
  //     // {
  //     //   label: "random label",
  //     //   href: "/dashboard/random-label",
  //     // },
  //     // {
  //     //   label: "random label",
  //     //   href: "/dashboard/random-label",
  //     // },
  //   ],
  // },
  // {
  //   id: 5,
  //   label: "Portfolios",
  //   href: "/dashboard/portfolio",
  //   icon: FaProjectDiagram,

  //   // TODO: have to change the submenu items based on needs.
  //   submenu: [
  //     // {
  //     //   label: "random label",
  //     //   href: "/dashboard/about/random-label",
  //     // },
  //     // {
  //     //   label: "random label",
  //     //   href: "/dashboard/about/random-label",
  //     // },
  //   ],
  // },
  {
    id: 6,
    label: "About",
    href: "/dashboard/about",
    icon: FcAbout,
    //  TODO: have to change the submenu items based on needs
    submenu: [{ label: "AboutHero", href: "/dashboard/aboutHero" }],
  },
  // {
  //   id: 7,
  //   label: "Contact",
  //   href: "/dashboard/contact",
  //   icon: FaPhoneSquare,
  //   // TODO: have to change the submenu items based on needs.
  //   submenu: [
  //     // {
  //     //   label: "random label",
  //     //   href: "/dashboard/about/random-label",
  //     // },
  //     // {
  //     //   label: "random label",
  //     //   href: "/dashboard/about/random-label",
  //     // },
  //   ],
  // },
];
