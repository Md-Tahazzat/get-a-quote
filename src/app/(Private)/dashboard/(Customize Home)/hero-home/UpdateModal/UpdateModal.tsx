import { useState } from "react";
import Swal from "sweetalert2";
interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  getHeroData:() => void;
  currentData?:
    | {
        id: string;
        title: string;
       subtitle: string; 
        section:string;
        video: string;
      }
    | undefined;
}

  // onUpdate: (updatedData: {
  //   title: string;
  //   subtitle: string;
  //   videoLink: string;
  // }) => void;


const UpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  onClose,
  currentData,
  getHeroData,
}) => {
  const [title, setTitle] = useState<string>(currentData?.title || "");
  const [subtitle, setSubtitle] = useState<string>(currentData?.subtitle || "");
  const [section, setSection] = useState<string>(currentData?.section || "");
  const [video, setVideoLink] = useState<string>(currentData?.video || "");
  const [loading,setLoading]=useState<boolean>(false)
  const handleUpdate = async () => {
    setLoading(true)
    const updatedData = {
      title,
      subtitle,
      video,
      section
    };

    if (updatedData) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/dashboard/home/hero/${currentData?.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          }
        );

        const data = await res.json();
        console.log(data);
        getHeroData()
        onClose()
        setLoading(false)
        Swal.fire("WOW",'You have successfully Update the Document','success')
      } catch (error) {
        console.error("Error:", error);
      }
    }
    console.log(updatedData);

    // onUpdate(updatedData);
  };

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-8 md:w-[50%] w-full   ">
        <h2 className="text-2xl font-bold mb-4">Update Content</h2>
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

        {
          section == 'Hero' && <>
            <div className="mb-4">
              <label
                htmlFor="videoLink"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Video Link
              </label>
              <input
                type="text"
                id="videoLink"
                value={video}
                onChange={(e) => setVideoLink(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
          </>
        }
        


        <div className="mb-4">
          <label
            htmlFor="videoLink"
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
            htmlFor="subtitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subtitle
          </label>
          <textarea
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleUpdate}
          >
            {loading ? "Processing..." : "Update"}
          </button>
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

export default UpdateModal;
