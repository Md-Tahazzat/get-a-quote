
 "use client"

import Image from "next/image";
import { FaEdit ,FaTrashAlt} from "react-icons/fa";
interface HeroItem {
  id: string;
  title: string;
  subtitle: string;
  section:string;
  video:string;
  // Add other properties based on your actual data structure
}

interface HeroHomeContentProps {
  handleModalOpen: (id: string) => void; // Update this line to accept an ID argument
  item: HeroItem;
  deleteHeroById: (id: string) => Promise<void>;
  loading:boolean;
}
// Define the type for the 'item' object

const HeroHomeContent: React.FC<HeroHomeContentProps> = ({
  handleModalOpen,
  deleteHeroById,
  loading,
  item
}) => {
  return (
    <tr>

      <td className="px-12 py-4 text-sm font-medium text-gray-700 ">
        <h2 className="text-sm font-semibold text-emerald-500">

          {item?.section}
        </h2>
      </td>

        <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 break-all">
          {/* WE ARE WEBTRICKER. A WEB DESIGN & DEVELOPMENT AGENCY. */}
          {item.title}
        </td>
     
      <td className="px-12 py-4 text-sm font-medium text-gray-700 break-all">
        <h2 className="text-sm font-normal text-emerald-500">
          {/* A small, effective & creative solution, that can help you to grow your
          business bigger. */}
          {item.subtitle}
        </h2>
      </td>
     
     
      {
        item?.section == 'Hero'?<>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 break-all">

            <iframe
              width="160"
              height="100"
              src={item.video}
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
            ></iframe>


          </td>
        </> : <h1 className="text-sm font-semibold text-emerald-500 my-10">N/A</h1>
        
         }
      <td className="px-4 py-4 text-sm break-all">
        <button
          onClick={() => handleModalOpen(item.id)}
          className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
        >
          <FaEdit className="text-2xl"></FaEdit>
        </button>
      </td>
      {/* <td className="px-4 py-4 text-sm break-all">
        <button
          onClick={() => deleteHeroById(item.id)}
          className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
        >
          {loading ? (
            "Processing..."
          ) : (
            <>
              {" "}
              <FaTrashAlt className="text-2xl ml-3"></FaTrashAlt>
            </>
          )}
        </button>
      </td> */}
    </tr>
  );
};

export default HeroHomeContent;
