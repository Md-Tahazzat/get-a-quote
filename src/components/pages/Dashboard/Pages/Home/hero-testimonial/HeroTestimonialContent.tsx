import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Testimonial } from "../../../../../../app/(Private)/dashboard/(Customize Home)/hero-client/Type";
interface HeroTestimonialContentProps {
  handleUpdateModalOpen:(item:Testimonial) => void; 
  item: Testimonial;
  handleDeleteTestimonial: (id: string) => Promise<void>;
}


const HeroTestimonialContent: React.FC<HeroTestimonialContentProps> = ({ handleUpdateModalOpen, item, handleDeleteTestimonial }) => {


  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 break-all">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 break-all">
            {/* <Image width={50} height={50} src="/dashboard/Client/Hayden-Hamilton-Walker-1.png" alt="" /> */}
            <Image width={50} height={50} src={item?.image} alt="" />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 break-all">
          <h2 className="text-sm font-normal text-emerald-500">
            {item?.name}
          </h2>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 break-all">
          <h2 className="text-sm font-normal text-emerald-500">
           {item?.designation}
          </h2>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 break-all">
          <h2 className="text-sm font-normal text-emerald-500">
           {item?.description}
          </h2>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 break-all">
          <h2 className="text-sm font-normal text-emerald-500">
           {item?.rating}
          </h2>
        </td>

        <td className="px-4 py-4 text-sm break-all">
          <button onClick={()=>handleUpdateModalOpen(item)} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
        </td>
        <td className="px-4 py-4 text-sm break-all">
          <button onClick={()=>handleDeleteTestimonial(item.id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
     
     
    </>
  );
};

export default HeroTestimonialContent;
