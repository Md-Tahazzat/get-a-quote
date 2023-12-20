"use client";
// import HeroSponsorContent from "@/components/pages/Dashboard/Pages/Home/hero-sponsor/HeroSponsorContent";
import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";
// import HeroSponsorContentHeader from "@/components/pages/Dashboard/Pages/Home/hero-sponsor/HeroSponsorContentHeader";
import { FaEdit, FaSlack, FaTrash } from "react-icons/fa";
import AddSponsorModal from "./AddSponsorModal/AddSponsorModal";
// import { Cagliostro } from "next/font/google";
import Loading from "@/app/loading";
import SponsorUpdateModal from "./SponsorUpdateModal/SponsorUpdateModal";
import Swal from "sweetalert2";
import HeroSponsorContentHeader from "@/components/pages/Dashboard/Pages/Home/hero-sponsor/HeroSponsorContentHeader";
type SponsorType = {
  id: string;
  name: string;
  image: string;
}[];
const HeroSponsor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [sponsors, setSponsors] = useState<SponsorType>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSponsor, setSelectedSponsor] = useState();
  // get sponsors from db
  const getSponsor = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/sponsor`
      );
      const data = await response.json();
      // console.log(data.sponsor);
      setSponsors(data.sponsor);
    } catch (error) { }
  };

  // fetch the function
  useEffect(() => {
    getSponsor();
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
          `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/sponsor/${id}`,
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
        getSponsor();
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
  const OpenUpdateModal = (sponsor: any) => {
    setUpdateModal(true);
    const value:any= sponsors.find((item) => item.id === sponsor.id);
    setSelectedSponsor(value);
  };

  // close update modal function
  const closeUpdateModal = () => {
    setUpdateModal(false);
  };

  return (
    <>
      <section className="container px-4 mx-auto mt-10">
        <div className="flex justify-between items-center gap-x-3">
          <h2 className="text-3xl font-medium ">Sponsor Section</h2>
          <button
            onClick={openModal}
            className="btn btn-sm  bg-gray-900 text-white shadow-md border-0 hover:bg-blue-500"
          >
            Add sponsor
          </button>
        </div>

        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <HeroSponsorContentHeader></HeroSponsorContentHeader>

                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {/* <HeroSponsorContent></HeroSponsorContent> */}

                    {sponsors?.map((sponsor) => {
                      return (
                        <>
                          <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                <Image
                                  width={50}
                                  height={50}
                                  src={sponsor?.image ? sponsor?.image :"/dashboard/Sponsor/Company-logo-1.svg"}
                                  alt=""
                                />
                              </td>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <h2 className="text-sm font-normal text-emerald-500">
                                {sponsor?.name}
                              </h2>
                            </td>

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button
                                onClick={() => OpenUpdateModal(sponsor)}
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                              >
                                <FaEdit className="text-2xl"></FaEdit>
                              </button>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button
                                onClick={() => handleDelete(sponsor.id)}
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                              >
                                <FaTrash className="text-2xl"> </FaTrash>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
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
          <AddSponsorModal
            getSponsor={getSponsor}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
           
          ></AddSponsorModal>
        </>
      )}

      {/* update */}
      {updateModal && (
        <SponsorUpdateModal
          updateModal={updateModal}
          sponsor={selectedSponsor}
        
          getSponsor={getSponsor}
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

export default HeroSponsor;
