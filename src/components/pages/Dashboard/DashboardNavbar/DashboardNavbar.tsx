import Image from "next/image";
import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <div className="flex backdrop-blur items-center bg-dashboard-secondary/70 border-t-0 border-b w-full border-b-slate-500/75 gap-10 sticky py-3 top-0 left-0 z-50 px-4">
      <Link href={"/"}>
        <Image
          width={110}
          height={22}
          className="w-auto h-7"
          src="/dashboard/main-logo.svg"
          alt="logo"
        />
      </Link>

      <div className="">
        <input
          type="text"
          className="w-full py-1.5 px-3 bg-dashboard-primary rounded-md border border-dashboard-primary outline-none focus:border-slate-400"
          placeholder="Search Webtricker"
        />
      </div>
    </div>
  );
};

export default DashboardNavbar;
