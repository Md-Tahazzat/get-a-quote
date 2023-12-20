"use client";
import { BlogType } from "@/types/types";
import Image from "next/image";

import { FC } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const HeroBlogContent: FC<BlogType> = ({
  themeImage,
  title,
  shortDescription,
}) => {
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
        <td className="p-4">
            <Image className="max-w-[180px] " width={180} height={120} src={themeImage} alt={title} />
        </td>
        <td className="p-4">
          <h2 className="text-lg font-medium text-emerald-500">{title}</h2>
        </td>
        <td className="p-4">
          <p className="text-sm font-normal text-emerald-500">
            {shortDescription}
          </p>
        </td>

        <td className="p-4">
     

          
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
      
        </td>
        <td className="p-4">
          <button
            onClick={handleDelete}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
          >
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
    </>
  );
};

export default HeroBlogContent;
