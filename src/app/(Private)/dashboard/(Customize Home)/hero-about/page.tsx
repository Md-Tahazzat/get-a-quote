"use client";
import HeroAboutContentHeader from "@/components/pages/Dashboard/Pages/Home/HeroAbout/HeroAboutContentHeader";

import {
  useEffect,
  useState,
} from "react";

import { FaEdit, FaTrashAlt } from "react-icons/fa";

// import { Cagliostro } from "next/font/google";
import Loading from "@/app/loading";

import Swal from "sweetalert2";
import AddAboutModal from "./AddAboutModal/AddAboutModal";
import UpdateAboutModal from "./UpdateAboutModal/UpdateAboutModal";
import Image from "next/image";

type About = {
  id: string,
  title: string,
  subtitle: string,
  image: string,
}[]

const HeroAbout = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [abouts, setAbout] = useState<About>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSponsor, setSelectedSponsor] = useState();
  // get sponsors from db
  const getAbout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/about`
      );
      const data = await response.json();
      // console.log(data.sponsor);
      setAbout(data)


      console.log(data);
      ;
    } catch (error) { }
  };

  // fetch the function
  useEffect(() => {
    getAbout();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // handle delete the sponsor
  const handleDelete = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        setLoading(true);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/about/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        console.log(data);
        setLoading(false);
        getAbout();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        // Handle cancellation or do nothing
      }
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
      Swal.fire("Error", "Failed to delete sponsor.", "error");
    }
  };


  // open update modal function
  const OpenUpdateModal = (about: any) => {
    setUpdateModal(true);
    const value: any = abouts.find((item) => item.id === about.id);
    setSelectedSponsor(value);
  };

  // close update modal function
  const closeUpdateModal = () => {
    setUpdateModal(false);
  };







  return (
    <>

      <section className="container px-4 mx-auto mt-10">
        <div className="flex items-center justify-between gap-x-3">
          <h2 className="text-3xl font-medium ">Home About Section </h2>
          <button
            onClick={openModal}
            className="btn btn-sm  bg-gray-900 text-white shadow-md border-0 hover:bg-blue-500"
          >
            Add About
          </button>
        </div>

        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <HeroAboutContentHeader></HeroAboutContentHeader>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {/* <HeroAboutContent></HeroAboutContent> */}
                    {abouts.map(about => {
                      return (
                        <>

                          <tr>
                            <td className="px-4 py-4 ">
                              {/* WE ARE WEBTRICKER. A WEB DESIGN & DEVELOPMENT AGENCY. */}
                              <Image width={30} height={30} src={about?.image} alt="hero-about-image"></Image>

                            </td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 break-all">
                              {/* WE ARE WEBTRICKER. A WEB DESIGN & DEVELOPMENT AGENCY. */}
                              {about?.title}
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700  break-all ">
                              <h2 className="text-sm font-normal text-emerald-500 ">
                                {about?.subtitle.slice(0, 100)}...

                              </h2>
                            </td>

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button onClick={() => OpenUpdateModal(about)} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                <FaEdit className="text-2xl"></FaEdit>
                              </button>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button onClick={() => handleDelete(about?.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                <FaTrashAlt className="text-2xl"></FaTrashAlt>
                              </button>
                            </td>
                          </tr>


                        </>
                      )
                    })}


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* add sponsor modal */}
      {isModalOpen && (
        <>
          <AddAboutModal
            getAbout={getAbout}
            isModalOpen={isModalOpen}
            closeModal={closeModal}

          ></AddAboutModal>
        </>
      )}

      {/* update */}
      {updateModal && (
        <UpdateAboutModal
          updateModal={updateModal}
          about={selectedSponsor}
          getAbout={getAbout}
          onClose={closeUpdateModal}
        />
      )}

      {loading ? (
        <>
          {" "}
          <Loading></Loading>
        </>
      ) : (
        ""
      )}
    </>

  );
};

export default HeroAbout;
