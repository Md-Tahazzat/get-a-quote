"use client"

import HeroSponsorContentHeader from '@/components/pages/Dashboard/Pages/Home/hero-sponsor/HeroSponsorContentHeader';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loading from '@/app/loading';
import Swal from 'sweetalert2';
import UpdateHeroService from './UpdateHeroService/UpdateHeroService';
import AddHeroService from './AddHeroService/AddHeroService';
import HeroServicesContentHeader from '@/components/pages/Dashboard/Pages/Home/hero-services/HeroServicesContentHeader';

type ClientType = {
  id: string;
  name: string;
  image: string;
}[];


const HeroService = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [HeroService, setHeroService] = useState<ClientType>([]);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState();
  // get SatisfiedClient from db
  const getHeroService = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/homeService`
      );
      const data = await response.json();

      setHeroService(data);
    } catch (error) { }
  };

  // fetch the function
  useEffect(() => {
    getHeroService();
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
          `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/homeService/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        console.log(data);
        setLoading(false);
        getHeroService();
      }



    } catch (error) {
      console.log(error);
    }


  };

  // open update modal function
  const OpenUpdateModal = (sponsor: any) => {
    setSelectedService(sponsor);
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
          <h2 className="text-3xl font-medium ">Service Section</h2>
          <button
            onClick={openModal}
            className="btn btn-sm  bg-gray-900 text-white shadow-md border-0 hover:bg-blue-500"
          >
            Add service
          </button>
        </div>

        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <HeroServicesContentHeader></HeroServicesContentHeader>

                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {/* <HeroSponsorContent></HeroSponsorContent> */}

                    {HeroService?.map((service) => {
                      return (
                        <>
                          <tr>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                <Image
                                  width={50}
                                  height={50}
                                  src={service?.image}
                                  alt=""
                                />
                              </td>
                            </td>
                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <h2 className="text-sm font-normal text-emerald-500">
                                {service?.name}
                              </h2>
                            </td>

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button
                                onClick={() => OpenUpdateModal(service)}
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                              >
                                <FaEdit className="text-2xl"></FaEdit>
                              </button>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button
                                onClick={() => handleDelete(service.id)}
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
          <AddHeroService
            getHeroService={getHeroService}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
          
          ></AddHeroService>
        </>
      )}

      {/* update */}
      {updateModal && (
        <UpdateHeroService
          updateModal={updateModal}
          client={selectedService}
          onClose={closeUpdateModal}
          getClient={getHeroService}
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

export default HeroService;