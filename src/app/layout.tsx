import AuthProvider from "@/providers/authProvider";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Webtricker",
  description:
    "WebWebtricker Web Design & Development Agency is a total solution of your website related requirements. From branding to web design and then web design to web development",
  icons: "/favicon.svg",
};

type LayoutPropsType = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutPropsType) => {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.className} bg-white`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
