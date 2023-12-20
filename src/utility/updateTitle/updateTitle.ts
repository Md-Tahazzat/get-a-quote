import { Metadata } from "next";

const defaultDescription =
  "WebWebtricker Web Design & Development Agency is a total solution of your website related requirements. From branding to web design and then web design to web development";

export const setMetaData = (
  title?: string,
  description?: string,
  icons?: string
): Metadata => {
  const metadata = {
    title: title ? `${title} | Webtricker` : "Webtricker",
    description: description ? description : defaultDescription,
    icons: icons ? icons : "/favicon.svg",
  };
  return metadata;
};
