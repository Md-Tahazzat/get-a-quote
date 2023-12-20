"use client"

import HeroHomeContent from "@/components/pages/Dashboard/Pages/Home/hero-home/HeroHomeContent";
import HeroHomeContentHeader from "@/components/pages/Dashboard/Pages/Home/hero-home/HeroHomeContentHeader";
import { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal/UpdateModal";
import AddModal from "./AddModal/AddModal";
import Swal from "sweetalert2";
interface Hero {
  id: string; // Assuming ID is a string
  title: string;
  subtitle: string;
  section: string;
  video: string;
  // Add other properties as needed
}



const HeroHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [AddModalOpen, setAddModalOpen] = useState(false);
  const [UpdateValue,seUpdateValue] = useState<Hero>();
  const [loading,setLoading]=useState<boolean>(false)

  
const [heroData, setHeroData] = useState<Hero[]>([]);

  const getHeroData = async () => {
  
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/hero`
    );
    const data = await response.json(); // Await the response.json() call

    setHeroData(data); // Set the hero data after awaiting the response.json()
  } catch (error) {
    console.error("Error fetching hero data:", error);
    // Handle errors accordingly (e.g., show a message to the user, log the error, etc.)
  }
};

  useEffect(() => {
     getHeroData()
 },[])


    

 console.log(heroData);
  // Define the type of handleModalOpen
 const handleModalOpen = (id: string) => {
   setIsModalOpen(true);
   const value = heroData.find((item) => item.id === id);
   if (value) {
      seUpdateValue(value); 
   }
  
 };

  // handle add modal open

  const handleAddModalOpen = () => { 
  setAddModalOpen(true);
  }



  // delete hero item 
  const deleteHeroById = async (id: string) => {
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
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/hero/${id}`,
          {
            method: "DELETE",
          }
        );
  
        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }
  
        const deletedData = await res.json();
        setLoading(false);
        getHeroData();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        // console.log(deletedData, "from db");
        // return deletedData; // Return the deleted data if successful
      } else {
        // Handle cancellation or do nothing
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to delete hero.");
    }
  };
  



  return (
    <section className="container px-4 mx-auto mt-10">
      <div className="flex justify-between items-center gap-x-3 ">
        <h2 className="text-3xl font-medium">Hero Section</h2>
        {/* <button
          onClick={handleAddModalOpen}
          className=" btn btn-sm  border-0 text-white  bg-gray-900 shadow-md "
        >
          Add Hero
        </button> */}
      </div>

      <div className="flex flex-col mt-6">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <HeroHomeContentHeader></HeroHomeContentHeader>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {heroData.map((item) => (
                    <HeroHomeContent
                      key={item.id}
                      handleModalOpen={handleModalOpen}
                      item={item}
                      deleteHeroById={deleteHeroById}
                      loading={loading}
                    ></HeroHomeContent>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


 
      

      {isModalOpen && (
        <UpdateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          currentData={UpdateValue}
          getHeroData={getHeroData}
        />
      )}

      {/* {AddModalOpen && (
        <>
          <AddModal
            AddModalOpen={AddModalOpen}
            onClose={() => setAddModalOpen(false)}
            getHeroData={getHeroData}
          />
        </>
      )} */}
    </section>
  );
};

export default HeroHome;
