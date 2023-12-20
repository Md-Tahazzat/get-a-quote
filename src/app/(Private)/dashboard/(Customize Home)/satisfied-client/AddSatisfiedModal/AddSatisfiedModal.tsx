import React, { useState } from 'react';
import Swal from 'sweetalert2';


interface AddModalProps {
  isModalOpen: boolean;
  setLoading: any
  closeModal: () => void;
  getClient: () => void;


}



const AddSatisfiedModal: React.FC<AddModalProps> = ({ closeModal, isModalOpen, setLoading, getClient }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState<File>();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)

    if (image) {
      const formData = new FormData();
      formData.set("file", image);

      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/uploadImage`, {
        method: "POST",
        body: formData,
      });
      const imageUrl = await response.json();
      console.log(imageUrl);
      if (imageUrl) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/satisfiedClient`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({ name, image: imageUrl })
          })

          const data = await response.json();
          console.log(data);
          Swal.fire("WOW",'You have successfully add new document','success')
          setName('');
          setLoading(false);
          getClient()
          closeModal()
        } catch (error) {
          console.log(error);
          
        }



      }


    }



  };

  return (
    <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 ${isModalOpen ? "block" : "hidden"
      }`}>
      <div className="bg-white p-6 rounded-lg w-full md:w-[50%]">
        <h2 className="text-2xl font-bold mb-4">Add Client</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder=" Name"
            value={name}
            onChange={handleNameChange}
            className="w-full border rounded-md py-2 px-3 mb-3"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className=' flex justify-between items-center'>
          <button onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSatisfiedModal;