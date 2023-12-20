
import React, { useState } from 'react';
import Swal from 'sweetalert2';


interface aboutUpdateModalProps {
  about: any;
  getAbout: () => void;
  onClose: () => void;
  updateModal: boolean;
}

const AboutUpdateModal: React.FC<aboutUpdateModalProps> = ({ about, getAbout, updateModal, onClose }) => {
  const [updatedTitle, setUpdatedTitle] = useState(about.AboutTitle);
  const [updatedSubtitle, setUpdatedSubtitle] = useState(about.AboutSubtitle);
  const [updatedImage, setUpdatedImage] = useState(about.AboutImage);
  const [selectedImage, setSelectedImage] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubtitleChang = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedSubtitle(e.target.value);
  };
  const handleTitleChang = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(e.target.value);
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

    const formData = new FormData();
    if (selectedImage) {
      formData.append('file', selectedImage);
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
        `${process.env.NEXT_PUBLIC_URL}/api/dashboard/about/abouthero/${about?.id}`,
        {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ updatedTitle, updatedSubtitle, image: imageUrl }),
        }
      );

      const data = await res.json();
      console.log(data);
      Swal.fire("WOW!", "You have successfully Updated about section.", "success")
      getAbout();
      onClose();
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      Swal.fire("Something wrong!", "Please Try again.", "error")
    }
  };


  return (
    <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 z-10 ${updateModal ? "block" : "hidden"
      }`}>
      <div className="absolute inset-0  bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className="relative w-full md:w-[50%]   bg-white p-8 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-bold mb-4">Update about</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="About title"
            value={updatedTitle}
            name='title'
            onChange={handleTitleChang}
            className="w-full border rounded-md py-2 px-3 mb-3"
          />

          <div className="w-full ">
            <textarea
              value={updatedSubtitle}
              name='subtitle'
              onChange={handleSubtitleChang}
              className="w-full h-32 px-3 py-2 text-base border rounded-md resize-y focus:outline-none"
              placeholder="Type something..."
            />
            <p className="text-sm text-gray-500 mb-3">Character Count: {updatedSubtitle.length}</p>
          </div>
          <input
            type="file"
            accept="image/*"
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

export default AboutUpdateModal;
