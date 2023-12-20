import { ServiceData } from "@/types/types";
import { Dispatch, SetStateAction, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ServiceLavel from "./ServiceLavel";

interface propsType {
  service: ServiceData;
  activeService: string | null;
  setActiveService: Dispatch<SetStateAction<string | null>>;
}

const Services = ({ service, activeService, setActiveService }: propsType) => {
  // track active lavel of service
  const [activeServiceLavel, setActiveServiceLavel] = useState<
    string | number | null
  >(null);

  // handle collapse functionality
  const handleCollapse = (id: string) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  return (
    <div
      className={`bg-blue-50 rounded-md overflow-hidden ${
        activeService === service.id && "bg-blue-300 pb-2 md:pb-4"
      }`}
    >
      <label
        onClick={() => handleCollapse(service.id)}
        className={`text-lg flex items-center justify-between bg-slate-100 z-30 text-blue-900 duration-300 font-medium margin-b rounded-md p-2 md:p-4 ${
          activeService === service.id && "bg-slate-700 text-white mb-5"
        }`}
      >
        {service.name}{" "}
        <IoIosArrowDown
          className={`rotate-0 duration-200 ${
            activeService === service.id && "rotate-180"
          }`}
        />
      </label>
      <div
        className={`h-auto max-h-[0.1px] mt-2 pb-0 px-2 z-10 md:px-4 duration-300 overflow-hidden ${
          activeService === service.id
            ? "max-h-[99999px] h-auto translate-y-0"
            : "h-0.5 -translate-y-[100%]"
        }`}
      >
        <p className="text-sm mb-8">{service.des}</p>

        {/* service lavel */}
        <div className="flex gap-5 justify-between mx-4">
          {service.serviceLavel.map((lavel, index) => (
            <ServiceLavel
              serviceId={service.id}
              serviceLavel={lavel}
              activeServiceLavel={activeServiceLavel}
              setActiveServiceLavel={setActiveServiceLavel}
              index={index}
              name={service.name}
              key={lavel.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
