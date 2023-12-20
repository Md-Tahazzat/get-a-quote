'use client'
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const HeroServicesContent = () => {
  let handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <Image width={50} height={50} src="/dashboard/service/services-component-icon-1.svg" alt="" />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <h2 className="text-sm font-normal text-emerald-500">UX research</h2>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button
            onClick={handleDelete}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <Image width={50} height={50} src="/dashboard/service/services-component-icon-2.svg" alt="" />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <h2 className="text-sm font-normal text-emerald-500">UX/UI Design</h2>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button
            onClick={handleDelete}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <Image width={50} height={50} src="/dashboard/service/services-component-icon-3.svg" alt="" />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <h2 className="text-sm font-normal text-emerald-500">
            Motion Design
          </h2>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button
            onClick={handleDelete}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <Image width={50} height={50} src="/dashboard/service/services-component-icon-4.svg" alt="" />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <h2 className="text-sm font-normal text-emerald-500">Web Dev</h2>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button
            onClick={handleDelete}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
    </>
  );
};

export default HeroServicesContent;
