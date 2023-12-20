import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const HeroSponsorContent = () => {
  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <Image width={50} height={50} src="/dashboard/Sponsor/Company-logo-1.svg" alt="" />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <h2 className="text-sm font-normal text-emerald-500">Monday.com</h2>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <Image width={50} height={50} src="/dashboard/Sponsor/Company-logo-2.svg" alt="" />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <h2 className="text-sm font-normal text-emerald-500">Paypal</h2>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <Image width={50} height={50} src="/dashboard/Sponsor/Company-logo-3.svg" alt="" />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <h2 className="text-sm font-normal text-emerald-500">Shopify</h2>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <Image width={50} height={50} src="/dashboard/Sponsor/Company-logo-4.svg" alt="" />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <h2 className="text-sm font-normal text-emerald-500">Slack</h2>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <Image width={50} height={50} src="/dashboard/Sponsor/Company-logo-5.svg" alt="" />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <h2 className="text-sm font-normal text-emerald-500">Trello</h2>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaEdit className="text-2xl"></FaEdit>
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
    </>
  );
};

export default HeroSponsorContent;
