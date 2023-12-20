
"use client"
import { FaEdit, FaTrashAlt } from "react-icons/fa";
interface Faq {
  id: string;
  question: string;
  answer: string;
  
  // Add other properties based on your actual data structure
}

interface FaqProps {
  handleModalOpen: (id: string) => void; // Update this line to accept an ID argument
  item: Faq;
  deleteHeroById: (id: string) => Promise<void>;
  loading: boolean;
}
// Define the type for the 'item' object

const FaqContent: React.FC<FaqProps> = ({
  handleModalOpen,
  deleteHeroById,
  loading,
  item
}) => {
  return (
    <tr>

      <td className="px-12 py-4 text-sm font-medium text-gray-700 ">
        <h2 className="text-sm font-semibold text-emerald-500">

          {item?.question}
        </h2>
      </td>

      <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 break-all">
        {/* WE ARE WEBTRICKER. A WEB DESIGN & DEVELOPMENT AGENCY. */}
        {item.answer}
      </td>

     


     
      <td className="px-4 py-4 text-sm break-all">
        <button
          onClick={() => handleModalOpen(item.id)}
          className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
        >
          <FaEdit className="text-2xl"></FaEdit>
        </button>
      </td>
      <td className="px-4 py-4 text-sm break-all">
        <button
          onClick={() => deleteHeroById(item.id)}
          className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
        >
          
             
              <FaTrashAlt className="text-2xl ml-3"></FaTrashAlt>
         
        </button>
      </td>
    </tr>
  );
};

export default FaqContent;
