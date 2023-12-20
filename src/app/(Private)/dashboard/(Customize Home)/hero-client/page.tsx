 "use client"

import { useEffect, useState } from "react";
import AddTestimonialModal from "./AddTestimonialModal/AddTestimonialModal";
import UpdateTestimonialModal from "./UpdateTestimonialModal/UpdateTestimonialModal";
import { Testimonial } from "@/app/(Private)/dashboard/(Customize Home)/hero-client/Type";
import Loading from "@/app/loading";
import HeroTestimonialContentHeader from "@/components/pages/Dashboard/Pages/Home/hero-testimonial/HeroTestimonialContentHeader";
import HeroTestimonialContent from "@/components/pages/Dashboard/Pages/Home/hero-testimonial/HeroTestimonialContent";
import Swal from "sweetalert2";


const HeroTestimonial = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonial, setTestimonial] = useState<Testimonial[]>([])
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const [updateItem,setUpdateItem]=useState<Testimonial>(null as any)
  const [loading,setLoading] = useState<boolean>(false)


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const getTestimonialContent = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/testimonial`)
    const data = await response.json();
    setTestimonial(data);
    
  } 
  useEffect(() => {
     getTestimonialContent();
  }, [])
  console.log(testimonial);



  // update testimonial functionality
  
  const handleUpdateModalOpen = (item:Testimonial) => {
    setIsUpdate(true);
    setUpdateItem(item)
  };

  const handleUpdateModalClose = () => {
    setIsUpdate(false);
  };


  // handel delete testimonial

  const handleDeleteTestimonial = async (id: string) => {
    setLoading(true)
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
          `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/testimonial/${id}`,
          {
            method: "DELETE",
          }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }

        const deletedData = await res.json();
        console.log(deletedData);
         Swal.fire("Deleted !","Testimonial deleted successfully",'success')
        setLoading(false)
        getTestimonialContent();
        
      }


     
      // console.log(deletedData,"from db");
      // return deletedData; // Return the deleted data if successful
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to delete hero.");
    }


  }




  return (
    <section className="container px-4 mx-auto mt-10">
      <div className="flex items-center justify-between gap-x-3">
        <h2 className="text-3xl font-medium ">Testimonial</h2>
        <button  onClick={handleOpenModal} className="btn btn-sm bg-gray-900 text-white border-0 shadow-md hover:bg-blue-500">Add Testimonial</button>
      </div>

      <div className="flex flex-col mt-6">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <HeroTestimonialContentHeader></HeroTestimonialContentHeader>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {testimonial?.map(item => <HeroTestimonialContent handleUpdateModalOpen={handleUpdateModalOpen} key={item.id} item={item} handleDeleteTestimonial={handleDeleteTestimonial}></HeroTestimonialContent>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* testimonial add modal */}
      {isModalOpen && (
        <AddTestimonialModal isModalOpen={isModalOpen} onClose={handleCloseModal} getTestimonialContent={getTestimonialContent}  />
      )}

      {/* testimonial update modal */}
      {
        isUpdate && <UpdateTestimonialModal
          isUpdate={isUpdate}
          getTestimonialContent={getTestimonialContent}
          handleUpdateModalClose={handleUpdateModalClose}
          currentData={updateItem}
        />
      }
      {loading && <Loading></Loading>}

    </section>
  );
};

export default HeroTestimonial;
