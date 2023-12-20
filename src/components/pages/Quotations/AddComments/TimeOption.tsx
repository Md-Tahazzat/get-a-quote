import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import useConvertedPrice from "@/hooks/Quotations/useConvertedPrice";
import { EstimatedTime, SelectedServices } from "@/types/types";
import "./TimeOption.css";

type PropsType = {
  estimatedTime: EstimatedTime;
  index: number;
  service: SelectedServices;
};

const TimeOption = ({ estimatedTime, index, service }: PropsType) => {
  const { currency, selectedServices, setSelectedServices } =
    useQuotationContext();
  const priceNode = useConvertedPrice({
    dollar: estimatedTime.extraAmountInDollar,
    currency,
  });

  const handleSelectTime = () => {
    if (service.selectedTimeIndex === index) return;
    if (selectedServices === null) return;

    const duplicateServices = [...selectedServices];
    duplicateServices.forEach((signleService) => {
      if (signleService.serviceId === service.serviceId) {
        signleService.selectedTimeIndex = index;
      }
    });
    setSelectedServices(duplicateServices);
  };
  return (
    <div
      onClick={handleSelectTime}
      className={`cursor-pointer flex items-center gap-3 w-full`}
    >
      <span
        className={`time-checkbox w-3  h-3 rounded-full inline-block ${
          service.selectedTimeIndex === index && "active-time-checkbox"
        } `}
      ></span>
      <p className="flex item-center gap-2">
        {estimatedTime.time} <span>-</span>
        <span className="flex items-center justify-center gap-[3px]">
          {priceNode}
        </span>
      </p>
    </div>
  );
};

export default TimeOption;
