
import { useState } from 'react';
import Swal from 'sweetalert2';

interface AddModalProps {
  isModalOpen: boolean;

  closeModal: () => void;
  getSponsor: () => void;

}


const AddSponsorModal: React.FC<AddModalProps> = ({ closeModal, isModalOpen,getSponsor }) => {
  const [name, setName] = useState('');
  const [selectedImage2, setImage] = useState < File | null>(null);
  const [loading,setLoading]=useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    
    setLoading(true)
    const formData = new FormData()
    formData.append('file', selectedImage2 as File )
    formData.append('name', name  )

    if (!name && !selectedImage2) {
      alert("input fields must be provided")
      return
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/sponsor`, {
        method: 'POST',
        
        body:formData
      })

      const data = await response.json();

      if (data.id) {
         
        Swal.fire("WOW!",'You have successfully added','success')

        console.log(data);
        getSponsor()
        setName('');
        setImage(null)
        setLoading(false)
        closeModal()
      }
      
    } catch (error) {
      console.error(error);
    }



  };

  return (
    <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 ${isModalOpen ? "block" : "hidden"
      }`}>
      <div className="bg-white p-6 rounded-lg w-full md:w-[50%]">
        <h2 className="text-2xl font-bold mb-4">Add Sponsor</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Sponsor Name"
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
          <button disabled={loading} onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
           {loading ? "Processing... ":"Submit"}
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

export default AddSponsorModal;
