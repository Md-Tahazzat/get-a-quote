
import { useState } from 'react';


interface AddModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  getTestimonialContent:any

}

const AddTestimonialModal: React.FC<AddModalProps> = ({
  onClose,
  isModalOpen,
  getTestimonialContent

}) => {
  const [imageFile, setImageFile] = useState<File>();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file)
  };


  // Todo:-------- need upload image file 
  const handleAdd = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.set("file", imageFile as File);

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/uploadImage`, {
      method: "POST",
      body: formData,
    });
    const imageUrl = await response.json();
    console.log(imageUrl);
    if (imageUrl) {
      try {
        const value = { name, designation, rating, description, imageUrl }
        console.log(value);
        if (value) {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/testimonial`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(
                value
              ),
            }
          );

          const data = await res.json();
          console.log(data, "from db");
          onClose()

          setLoading(false)
          getTestimonialContent()
        }

      } catch (error) {
        console.error("Error:", error);
      }
    }
    // const url = await uploadToCloudinary(File)




  };



  return (
    <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 ${isModalOpen ? "block" : "hidden"
      }`}>
      <div className="flex   items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="relative bg-white w-full md:w-[50%] mx-auto rounded-lg overflow-hidden shadow-xl p-6">
          <span className="absolute top-3 right-3 cursor-pointer text-2xl " onClick={onClose}>
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4">Add Testimonial</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"

            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md py-2 px-3 mb-3"
          />
          <input
            type="text"
            placeholder="Designation"
            name="designation"

            onChange={(e) => setDesignation(e.target.value)}
            className="w-full border rounded-md py-2 px-3 mb-3"
          />
          <input
            type="number"
            placeholder="Rating"
            name="rating"

            onChange={(e) => setRating(e.target.value)}
            className="w-full border rounded-md py-2 px-3 mb-3"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border rounded-md py-2 px-3 mb-3"
          />
          <textarea
            placeholder="Description"
            name="description"

            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md py-2 px-3 mb-3 resize-none"
            rows={4}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            {loading ? 'Processing...' : 'Add Testimonial'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTestimonialModal;
