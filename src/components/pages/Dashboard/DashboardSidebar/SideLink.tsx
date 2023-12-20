import Link from "next/link";
import { SetStateAction, useRef } from "react";
import { IconType } from "react-icons";
import { FaMinus, FaPlus } from "react-icons/fa";
interface SideLinkPropsType {
  link: {
    label: string;
    href: string;
    icon: IconType;
    submenu: {
      label: string;
      href: string;
    }[];
  };
  expanded: boolean;
  setExpanded: React.Dispatch<SetStateAction<boolean>>;
  subMenuIndex: number | null;
  setSubMenuIndex: React.Dispatch<SetStateAction<number | null>>;
  index: number;
}

const SideLink = ({
  link,
  expanded,
  setExpanded,
  subMenuIndex,
  setSubMenuIndex,
  index,
}: SideLinkPropsType) => {
  const { label, href, icon: Icon, submenu } = link;
  const subMenuRef = useRef<HTMLUListElement | null>(null);

  //   handle submenu open and animation
  const handleListClick = (indx: number) => {
    if (!expanded) setExpanded(true);
    setSubMenuIndex((prev) => (prev !== indx ? indx : null));
  };

  return (
    <li
      className={`overflow-hidden text-base text-white ${
        expanded ? "my-0" : "my-2"
      }`}
    >
      {/* <Link href={href} className="flex items-center gap-3"> */}
      <button
        onClick={() => handleListClick(index)}
        className={`w-full flex items-center justify-start gap-2 z-50 py-2.5 pl-5 hover:bg-dashboard-secondary duration-150 ${
          subMenuIndex === index && expanded
            ? "bg-dashboard-secondary"
            : "bg-dashboard-primary"
        }`}
      >
        <Icon className={`duration-150 ${expanded ? "text-xl" : "text-2xl"}`} />
        <span
          className={`flex items-center justify-between duration-150 ${
            expanded ? "w-full" : "w-0 overflow-hidden"
          }`}
        >
          <span>{label}</span>
          <span className="text-sm mr-3">
            {subMenuIndex === index ? <FaMinus /> : <FaPlus />}
          </span>
        </span>
      </button>
      <ul
        ref={subMenuRef}
        className={`w-full h-auto pl-5 delay-0 z-10
            ${
              subMenuIndex === index && expanded
                ? "max-h-screen duration-1000"
                : "max-h-0 duration-700"
            }`}
      >
        {submenu.map((item, ind) => (
          <li
            className={`w-full transition-transform duration-700 overflow-hidden my-1 mx-auto ${
              subMenuIndex === index ? "translate-x-0" : "translate-x-[100%]"
            }`}
            key={ind}
          >
            <Link
              className="py-2 w-full pl-6 rounded-s-md  block hover:bg-dashboard-secondary duration-200"
              href={item.href ? item.href : "#"}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SideLink;
