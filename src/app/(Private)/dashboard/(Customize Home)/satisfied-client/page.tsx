"use client"

import HeroSponsorContentHeader from '@/components/pages/Dashboard/Pages/Home/hero-sponsor/HeroSponsorContentHeader';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AddSatisfiedModal from './AddSatisfiedModal/AddSatisfiedModal';
import UpdateSatisfiedModal from './UpdateSatisfiedModal/UpdateSatisfiedModal';
import Loading from '@/app/loading';
import Swal from 'sweetalert2';

type ClientType = {
  id: string;
  name: string;
  image: string;
}[];


const SatisfiedClient = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [SatisfiedClient, setSatisfiedClient] = useState<ClientType>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSponsor, setSelectedSponsor] = useState();
  // get SatisfiedClient from db
  const getSatisfiedClient = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/satisfiedClient`
      );
      const data = await response.json();

      setSatisfiedClient(data);
    } catch (error) { }
  };

  // fetch the function
  useEffect(() => {
    getSatisfiedClient();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // handle delete the sponsor
  const handleDelete = async (id: string) => {

    setLoading(true);
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

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/satisfiedClient/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        console.log(data);
        setLoading(false);
        getSatisfiedClient();
      }

     
    
    } catch (error) {
      console.log(error);
    }


  };

  // open update modal function
  const OpenUpdateModal = (sponsor: any) => {
    setSelectedSponsor(sponsor);
    setUpdateModal(true);
  };

  // close update modal function
  const closeUpdateModal = () => {
    setUpdateModal(false);
  };






  return (
    <>
      <section className="container px-4 mx-auto mt-10">
        <div className="flex justify-between items-center gap-x-3">
          <h2 className="text-3xl font-medium ">Satisfied Client Section</h2>
          <button
            onClick={openModal}
            className="btn btn-sm  bg-gray-900 text-white shadow-md border-0 hover:bg-blue-500"
          >
            Add Client
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

                    {SatisfiedClient?.map((client) => {
                      return (
                        <>
                          <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                <Image
                                  width={50}
                                  height={50}
                                  src={client?.image}
                                  alt=""
                                />
                              </td>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <h2 className="text-sm font-normal text-emerald-500">
                                {client?.name}
                              </h2>
                            </td>

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button
                                onClick={() => OpenUpdateModal(client)}
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                              >
                                <FaEdit className="text-2xl"></FaEdit>
                              </button>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button
                                onClick={() => handleDelete(client.id)}
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
          <AddSatisfiedModal
            getClient={getSatisfiedClient}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            setLoading={setLoading}
          ></AddSatisfiedModal>
        </>
      )}

      {/* update */}
      {updateModal && (
        <UpdateSatisfiedModal
          updateModal={updateModal}
          client={selectedSponsor}
          onClose={closeUpdateModal}
          getClient={getSatisfiedClient}
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

export default SatisfiedClient;