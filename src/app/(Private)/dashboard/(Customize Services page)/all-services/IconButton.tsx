"use client";

import { ServiceState } from "@/types/types";
import { refetchAllServices } from "@/utility/revalidate/revalidate";
import Link from "next/link";
import { FC } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const IconButton: FC<ServiceState> = ({ id }) => {
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/service/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await res.json();
        refetchAllServices();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <Link href={`/dashboard/update-service/${id}`}>
        <FaEdit />
      </Link>
      <button onClick={handleDelete} className="text-red-600">
        <FaTrash />
      </button>
    </>
  );
};

export default IconButton;
