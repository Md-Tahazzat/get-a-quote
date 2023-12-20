import { Testimonial } from '@/app/(Private)/dashboard/(Customize Home)/hero-client/Type';
import { useState } from 'react';
import Swal from 'sweetalert2';




interface UpdateModalProps {
  isUpdate: boolean;
  handleUpdateModalClose: () => void;
  currentData: Testimonial;
  getTestimonialContent: any
}

const UpdateTestimonialModal: React.FC<UpdateModalProps> = ({
  handleUpdateModalClose,
  isUpdate,
  currentData,
  getTestimonialContent
}) => {
  const [testimonial, setTestimonial] = useState<Testimonial>(currentData);
  const [file, setFile] = useState<File>()

  const [loading, setLoading] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    setFile(file)
    // setTestimonial((prev) => ({ ...prev, image: file || null }));
  };



  //Todo:--------> need to update image file
  const handleUpdateTestimonial = async () => {
    setLoading(true);
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    try {
      let imageUrl = testimonial?.image;

      if (file) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/uploadImage`, {
          method: "POST",
          body: formData,
        });
        const uploadedImageUrl = await response.json();
        imageUrl = uploadedImageUrl ? uploadedImageUrl : testimonial?.image;
      }
      const { name, image, description, designation, rating } = testimonial

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/testimonial/${currentData?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, image: imageUrl, description, designation, rating }),
        }
      )
      const data = await res.json();
      console.log(data);
     Swal.fire("WOW",'You have successfully updated this Testimonial')
      setLoading(false)
      getTestimonialContent()
      handleUpdateModalClose()

    
    } catch (error) {
      

    
  }

    // const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/uploadImage`, {
    //   method: "POST",
    //   body: formData,
    // });
    // const imageUrl = await response.json();
    

    // const { name, image,description,designation,rating}=testimonial
          

    //   try {
    //     const res = await fetch(
    //       `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/testimonial/${currentData?.id}`,
    //       {
    //         method: "PUT",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ name, image:imageUrl,description,designation,rating}),
    //       }
    //     );

    //     const data = await res.json();
    //     console.log(data);

    //     setLoading(false)
    //     getTestimonialContent()
    //     handleUpdateModalClose()



    //   } catch (error) {
    //     console.log(error);


    //   }
    



    // handleUpdateModalClose();
  };



  return (
    <div
      className={`fixed inset-0 flex items-center transition-all duration-500 justify-center z-50 bg-black bg-opacity-50 ${isUpdate ? 'block' : 'hidden'
        }`}
    >
      <div className={`bg-white rounded-lg p-6  ${isUpdate ? 'md:w-[50%] ' : " md:w-[0%] "}  w-full mx-auto`}>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Update Testimonial</h2>
          <p onClick={handleUpdateModalClose} className='font-bold text-2xl cursor-pointer'>&times;</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={testimonial.name}
          onChange={handleInputChange}
          className="w-full border rounded-md py-2 px-3 mb-3"
        />
        <input
          type="text"
          placeholder="Designation"
          name="designation"
          value={testimonial.designation}
          onChange={handleInputChange}
          className="w-full border rounded-md py-2 px-3 mb-3"
        />
        <input
          type="number"
          placeholder="Rating"
          name="rating"
          value={testimonial.rating}
          onChange={handleInputChange
          }
          className="w-full border rounded-md py-2 px-3 mb-3"
        />
        <input
          type="file" // Change to file type
          name="image"
          accept="image/*" // Restrict to image types
          onChange={handleImageChange}
          className="w-full border rounded-md py-2 px-3 mb-3"
        />
        <textarea
          placeholder="Description"
          name="description"
          value={testimonial.description}
          onChange={handleInputChange}
          className="w-full border rounded-md py-2 px-3 mb-3 resize-none"
          rows={4}
        />
        <button
          onClick={handleUpdateTestimonial}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {loading ? "Processing..." : "Update Testimonial"}
        </button>
      </div>
    </div>
  );
};

export default UpdateTestimonialModal;