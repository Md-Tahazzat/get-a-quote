import { useState } from "react";
import Swal from "sweetalert2";

interface AddModalProps {
  AddModalOpen: boolean;
  onClose: () => void;
  getHeroData:()=> void
}

const AddModal: React.FC<AddModalProps> = ({
  AddModalOpen,
  onClose,
  getHeroData,
}) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [section, setSection] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [loading,setLoading]=useState(false);
  const handleSubmit = async () => {
    // (`${process.env.NEXT_PUBLIC_URL}/api/dashboard/users`)
    setLoading(true)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/hero`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            subtitle,
            videoLink,
            section
          }),
        }
      );

      const data = await res.json();
      getHeroData();
      onClose();
      setLoading(false)
      Swal.fire("WOW","You have successfully added a new hero")
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 ${
        AddModalOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-8 md:w-[50%] w-full">
        <h2 className="text-2xl font-bold mb-4">Add Hero Content</h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subtitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subtitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Section
          </label>
          <input
            type="text"
            id="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="videoLink"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Video Link (only for Home hero)
          </label>
          <input
            type="text"
            id="videoLink"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">

          {loading ? <>
            <button type="button" className="bg-indigo-500 ..." disabled>
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              d
              </svg>
              Processing...
            </button>
          </> :
            <>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleSubmit}
              >

                 Submit
              </button> 
          
          </>}

         

          
          <button
            className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
