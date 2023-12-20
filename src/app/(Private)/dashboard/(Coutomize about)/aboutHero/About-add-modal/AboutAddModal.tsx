
import { useState } from 'react';
import Swal from 'sweetalert2';

interface AddModalProps {
  isModalOpen: boolean;

  closeModal: () => void;
  getAbout: () => void;

}

const AboutAddModal: React.FC<AddModalProps> = ({ closeModal, isModalOpen, getAbout }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [selectedImage2, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleSubtitleChang = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {

    setLoading(true)
    const formData = new FormData()
    formData.append('file', selectedImage2 as File)

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/uploadImage`, {
      method: "POST",
      body: formData,
    });
    const imageUrl = await response.json();

    if (!title && !imageUrl && !subtitle) {
      alert("input fields must be provided")
      return
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/about/abouthero`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },

        body: JSON.stringify({ title, subtitle, imageUrl })
      })

      const data = await response.json();
      console.log(data);
      getAbout()
      setTitle('');
      setImage(null)
      setLoading(false)
      closeModal()
      Swal.fire("Wow!", "You have successfully added about section.", "success");
    } catch (error) {
      console.error(error);
    }



  };

  return (
    <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 ${isModalOpen ? "block" : "hidden"
      }`}>
      <div className="bg-white p-6 rounded-lg w-full md:w-[50%]">
        <h2 className="text-2xl font-bold mb-4">Add About </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="About title"
            value={title}
            onChange={handleTitleChange}
            className="w-full border rounded-md py-2 px-3 mb-3"
          />
          <input
            type="text"
            placeholder="Subtitle"
            value={subtitle}
            onChange={handleSubtitleChang}
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
            {loading ? "Processing... " : "Submit"}
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

export default AboutAddModal;
