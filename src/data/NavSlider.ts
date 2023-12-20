import { NavLinksType, SocialIcons } from "@/types/types";

// socialIcons data for navslider left-side icons //MT
export const socialIcons: SocialIcons[] = [
  {
    name: "facebook",
    href: "https://www.facebook.com/webtricker",
    iconPath: "/svgs/nav-fb.svg",
  },
  {
    name: "twitter",
    href: "https://twitter.com/webtricker",
    iconPath: "/svgs/nav-tw.svg",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/webtricker/",
    iconPath: "/svgs/nav-insta.svg",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/company/webtricker?originalSubdomain=bd",
    iconPath: "/svgs/nav-ld.svg",
  },
];

export const NavLinks: NavLinksType[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CAREER", href: "/career" },
  { label: "PORTFOLIO", href: "/portfolios" },
  { label: "CONTACT", href: "/contact" },
];
