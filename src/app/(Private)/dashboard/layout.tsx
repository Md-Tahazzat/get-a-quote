import DashboardNavbar from "@/components/pages/Dashboard/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/components/pages/Dashboard/DashboardSidebar/DashboardSidebar";
import { setMetaData } from "@/utility/updateTitle/updateTitle";

export const metadata = setMetaData("Dashboard");

type LayoutPropsType = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: LayoutPropsType) => {
  return (
    <div className="bg-dashboard-primary text-dashboard-text-primary">
      {/* logo and navbar */}
      <DashboardNavbar />

      {/* main container of sidebar and dashboard content */}
      <div className="flex flex-start">
        <DashboardSidebar />
        <div className="w-full px-4 bg-slate-200 text-black">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
