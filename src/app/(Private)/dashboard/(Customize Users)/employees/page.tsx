"use client";
import DeleteAndUpdateContainer from "@/components/pages/Employees/DeleteAndUpdateContainer";
import Loading from "@/components/pages/Loading/Loading";
import { TeamData } from "@/types/types";
import { getTeamData } from "@/utility/fetchContent/fetchTeamData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";

const EmployeesPage = () => {
  const [loading, setLoading] = useState(true);
  const [teamData, setTeamData] = useState<TeamData[] | null>(null);
  getTeamData().then((res) => {
    setTeamData(res);
    setLoading(false);
  });
  if (loading)
    return <Loading className="w-full h-[calc(100vh-63px)] text-3xl" />;
  return (
    <div className="w-full overflow-x-hidden h-[calc(100vh-63px)] overflow-y-auto">
      <h1 className="text-center my-10 font-semibold text-2xl">
        Customize Employees
      </h1>

      {/* add employee button */}
      <div className="flex items-center justify-end">
        <Link
          href="/dashboard/add-employee"
          className="flex items-center gap-2 justify-ce ml-auto py-1 px-2.5 mb-2 bg-dashboard-secondary hover:bg-dashboard-primary duration-200 rounded-md text-white"
        >
          Add employee <IoMdPersonAdd />
        </Link>
      </div>
      {/* team wrapper container */}
      <table className="w-full bg-slate-50/50 min-w-[400px] overflow-auto rounded-md text-start shadow-xl mb-20">
        <tr className="w-full rounded-t-md sticky top-0 z-50 flex items-center justify-start bg-slate-700 text-white text-start md:text-lg py-2">
          <th className="w-5 md:w-[4%] text-start ml-2 md:ml-5"></th>
          <th className="w-18 md:w-28  lg:w-32 flex justify-center">Profile</th>
          <th className="w-[30%] ml-3 pl-3 md:pl-0 text-start">Name</th>
          <th className="w-[30%] text-start">Role</th>
        </tr>

        {/* table data row */}
        {teamData &&
          teamData.map((employee, index) => (
            <tr
              key={index}
              className={`w-full group py-2 relative md:py-1 border-b border-slate-400 hover:bg-dashboard-secondary hover:text-white duration-300 flex items-center justify-start`}
            >
              <td className="w-5 md:w-[4%] text-start ml-2 md:ml-5">
                {index + 1}
              </td>
              <td className="w-18  md:w-28  lg:w-32  flex items-center justify-center">
                <Image
                  src={employee.image}
                  alt="employee image"
                  width={100}
                  height={100}
                  className="rounded-md w-16 h-12 md:w-24 md:h-20"
                />
              </td>
              <td className="w-3/12 pl-3">{employee.name}</td>
              <td className="w-[30%] px-4 text-sm lg:text-base font-semibold">
                {employee.designation}
              </td>
              <td className="font-semibold lg:font-normal w-full lg:w-[25%] -translate-x-full lg:translate-x-0 lg:duration-0 group-hover:translate-x-0 duration-200 absolute lg:relative top-0 left-0 bg-dashboard-secondary/80 lg:bg-transparent h-full lg:h-auto flex items-center justify-evenly">
                <DeleteAndUpdateContainer id={employee.id} />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default EmployeesPage;
