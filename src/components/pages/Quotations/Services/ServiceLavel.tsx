import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import useConvertedPrice from "@/hooks/Quotations/useConvertedPrice";
import { SelectedServices, ServiceLavel } from "@/types/types";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import "./ServiceLavel.css";

interface propsType {
  serviceLavel: ServiceLavel;
  name: string;
  index: number;
  serviceId: string | number;
  activeServiceLavel: string | number | null;
  setActiveServiceLavel: Dispatch<SetStateAction<string | number | null>>;
}
const ServiceLavel = ({
  activeServiceLavel,
  setActiveServiceLavel,
  serviceLavel,
  index,
  name,
  serviceId,
}: propsType) => {
  const { currency, selectedServices, setSelectedServices } =
    useQuotationContext();

  // get the converted price
  const priceNode = useConvertedPrice({
    dollar: serviceLavel.defaultPrice,
    currency,
  });
  console.log(priceNode);
  //   handle selected service and set active serviceLavel
  const handleServiceLavel = () => {
    // set the active service lavel to add active style.
    setActiveServiceLavel(serviceLavel.id);

    const newService: SelectedServices = {
      serviceId,
      name,
      serviceLavel,
      selectedTimeIndex: serviceLavel?.estimatedTimes?.length - 1,
    };

    // check if any service exist in the selectedService.
    if (selectedServices === null) {
      return setSelectedServices([newService]);
    }

    // find the service id in the selectedService array.
    selectedServices?.forEach((item, index) => {
      if (item.serviceId === serviceId) {
        const newSelectedServices = [...selectedServices];
        newSelectedServices[index] = newService;
        setSelectedServices(newSelectedServices);
      } else {
        return setSelectedServices([...selectedServices, newService]);
      }
    });
  };

  return (
    <div
      onClick={handleServiceLavel}
      // TODO: have to implement the active serviceLavel style basedon activeServiceLavel
      className={`${
        activeServiceLavel === serviceLavel.id && "active-lavel"
      } service-lavel bg-white rounded-md w-5/12 p-2 md:p-4 border-2 border-red-500 cursor-pointer hover:shadow-md hover:bg-slate-50`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="flex gap-4">
          {/* TODO: have to implement the checkbox style */}
          <label
            className={`${
              activeServiceLavel === serviceLavel.id && "active-checkbox"
            } checkbox-style  w-5 h-5 rounded-full`}
          ></label>
          <span>Complexity {index + 1}</span>
        </span>
        <span className="flex items-center justify-center gap-[3px]">
          {priceNode}
        </span>
      </div>

      {/* service example image */}
      <div>
        <Image
          height={100}
          width={100}
          className="w-full h-36 rounded-md"
          src={serviceLavel.img}
          alt="service-img"
        />
      </div>
    </div>
  );
};

export default ServiceLavel;
