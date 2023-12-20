import "@/css/tailwind/globals.css";
import { setMetaData } from "@/utility/updateTitle/updateTitle";
import { ReactNode } from "react";

export const metadata = setMetaData("Admin");

type LayoutPropsType = {
  children: ReactNode;
};
const WithoutNavbarLayout = ({ children }: LayoutPropsType) => {
  return <>{children}</>;
};

export default WithoutNavbarLayout;
