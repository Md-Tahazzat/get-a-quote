import { Cagliostro } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

interface Sponsor {
  id: string;
  name: string;
  image: string;
}

interface SponsorUpdateModalProps {
  sponsor: any;
  getSponsor:() => void;
  onClose: () => void;
  updateModal:boolean;
}

const SponsorUpdateModal: React.FC<SponsorUpdateModalProps> = ({ sponsor,getSponsor, updateModal, onClose }) => {
  const [updatedName, setUpdatedName] = useState(sponsor.name);
  const [updatedImage, setUpdatedImage] = useState(sponsor.image);
  const [selectedImage, setSelectedImage] = useState<File>();
  const [loading,setLoading]=useState<boolean>(false)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedName(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle image file change
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      
    } 
  };

  const handleUpdate = async () => {
    setLoading(true);
  
    // Check if both updatedImage and updatedName are defined
    const formData = new FormData();
    if (selectedImage) {
  
      formData.append('file', selectedImage as File);
 

    }
    try {

      let imageUrl = updatedImage;

      if (selectedImage) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/uploadImage`, {
          method: "POST",
          body: formData,
        });
        const uploadedImageUrl = await response.json();
        imageUrl = uploadedImageUrl ? uploadedImageUrl : updatedImage;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/sponsor/${sponsor?.id}`,
        {
          method: 'PUT',

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: updatedName,image: imageUrl }),
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.id) {
        getSponsor();
        onClose();
        setLoading(false);
        Swal.fire('Updated!',"You have successfully Update this document",'success')
      }
    



      
    } catch (error) {
      console.log(error);
      Swal.fire('ERROR!', `${error}`, 'error')
      
    }

   

  
      // try {
      //   const res = await fetch(
      //     `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/sponsor/${sponsor?.id}`,
      //     {
      //       method: 'PUT',
           
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({name:updatedName}),
      //     }
      //   );
  
      //   const data = await res.json();
        
      //   getSponsor();
      //   onClose();
      //   setLoading(false);
      // } catch (error) {
      //   console.error('Error:', error);
      // }
    
  };
  

  return (
    <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-10 ${updateModal ? "block" : "hidden"
      }`}>
      <div className="absolute inset-0  bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className="relative w-full md:w-[50%]   bg-white p-8 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-bold mb-4">Update Sponsor</h2>
        <div className="mb-4">
          <label className="block mb-2">Sponsor Name</label>
          <input
            type="text"
            value={updatedName} 
            onChange={handleNameChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Sponsor Name</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
      
        <div className="flex justify-end">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
           {loading ? "Processing..." : "Update"}
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

export default SponsorUpdateModal;
