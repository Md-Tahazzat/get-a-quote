import Image from 'next/image';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

interface Client {
  id: string;
  name: string;
  image: string;
}

interface ClientUpdateModalProps {
  client?: Client;
  getClient: () => void;
  onClose: () => void;
  updateModal: boolean;
}

const UpdateSatisfiedModal: React.FC<ClientUpdateModalProps> = ({ client, updateModal, onClose, getClient }) => {
  const [updatedName, setUpdatedName] = useState(client?.name);
  const [updatedImage, setUpdatedImage] = useState<File | string>();
  const [loading,setLoading]=useState(false)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedName(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle image file change
    const file = e.target.files?.[0];
    if (file) {
      setUpdatedImage(file);

    } else {
      setUpdatedImage(client?.image)

    }
    // Update image state
  };

  const handleUpdate = async (id: string) => {

 setLoading(true)



   
    const formData = new FormData();
    if (updatedImage) {
      formData.set("file", updatedImage as File);
    }
    try {
      let imageUrl = updatedImage;
      if (updatedImage) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/uploadImage`, {
          method: "POST",
          body: formData,
        });
        const uploadedImageUrl = await response.json();
        imageUrl = uploadedImageUrl ? uploadedImageUrl : updatedImage;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/satisfiedClient/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ updatedName, image: imageUrl })
      })

      const data = await response.json();
      console.log(data);
       
      
      
   
      // closeModal()
      onClose()
      Swal.fire('Updated','You have successfully update the document','success')
      getClient() 
      setLoading(false)
        
       } catch (error) {
        
       }

      // const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/uploadImage`, {
      //   method: "POST",
      //   body: formData,
      // });
      // const imageUrl = await response.json();
      // console.log(imageUrl);
      // if (imageUrl) {
      //   try {
      //     const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/satisfiedClient/${id}`, {
      //       method: 'PUT',
      //       headers: {
      //         'content-type': 'application/json',
      //       },
      //       body: JSON.stringify({ updatedName, image: imageUrl })
      //     })

      //     const data = await response.json();
      //     console.log(data);
      //     // setName('');
      //     // setLoading(false);
      //     // getSponsor()
      //     // closeModal()
      //     onClose()
      //   } catch (error) {

      //   }



      // }




  };

  return (
    <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-10 ${updateModal ? "block" : "hidden"
      }`}>
      <div className="absolute inset-0  bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className="relative w-full md:w-[50%]   bg-white p-8 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-bold mb-4">Update Client</h2>
        <div className="mb-4">
          <label className="block mb-2"> Name</label>
          <input
            type="text"
            value={updatedName}
            onChange={handleNameChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2"> Image</label>
          <input type="file" onChange={handleImageChange} className="mb-2" />
          {/* Show image preview */}
          {/* <Image width={'30'} hanging={'30'} src={sponsor?.image as any} alt="Sponsor Image" /> */}
          <Image width={50} height={50} src={client?.image as string} alt="" />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => handleUpdate(client?.id as string)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            
            {loading ? "Processing....":"Update"}
          </button>
          <button
            onClick={onClose}
            className="ml-4 bg-gray-300 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateSatisfiedModal;





