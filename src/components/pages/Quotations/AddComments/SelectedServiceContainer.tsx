import { SelectedServices } from "@/types/types";
import Image from "next/image";
import TimeOption from "./TimeOption";

type PropsType = {
  service: SelectedServices;
};

const SelectedServiceContainer = ({ service }: PropsType) => {
  return (
    <div className="mb-5">
      <label className="pb-2 block text-xl text-slate-700">
        <span className="font-semibold">Service : </span>
        {service.name}
      </label>

      <div className="flex items-center  justify-between md:justify-evenly">
        <div className="w-3/6">
          {/* available times */}
          <p className="mb-1 ">Select time.</p>
          {service?.serviceLavel?.estimatedTimes.map((item, index) => (
            <TimeOption
              service={service}
              estimatedTime={item}
              index={index}
              key={item.time}
            />
          ))}
        </div>
        {/* service image */}
        <Image
          width={200}
          height={100}
          src={service.serviceLavel.img}
          alt="selected service img"
          className="w-44 md:w-60 h-32 md:h-40 rounded-md"
        />
      </div>
    </div>
  );
};

export default SelectedServiceContainer;
