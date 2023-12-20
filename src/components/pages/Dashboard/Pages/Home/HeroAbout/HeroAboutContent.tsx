import { FaEdit } from "react-icons/fa";

const HeroAboutContent = () => {
 
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 break-all">
        WE ARE WEBTRICKER. A WEB DESIGN & DEVELOPMENT AGENCY.
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700  break-all ">
        <h2 className="text-sm font-normal text-emerald-500 ">
          Nec non, et sed semper suspendisse. Sapien, ridiculus euismod varius
          faucibus feugiat et dignissim porta id. Facilisi neque nec id nunc
          massa. Nisl nibh faucibus nunc vel. Vulputate pellentesque fringilla
          orci praesent vel cursus dui. Imperdiet euismod tempus, massa rutrum.
          Gravida augue purus non, cursus quam cum ultricies. Pellentesque
          blandit sit ut magna enim. Tellus aliquet a faucibus et eget elementum
          faucibus. Duis scelerisque diam non ullamcorper. Sed quis netus et
          fames elementum. Pellentesque quisque tristique consectetur risus
          adipiscing. Facilisi et a congue nam phasellus tristique orci morbi
          fermentum. Egestas egestas netus diam turpis sodales eget.
        </h2>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
          <FaEdit className="text-2xl"></FaEdit>
        </button>
      </td>
    </tr>
  );
};

export default HeroAboutContent;
