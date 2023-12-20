import { serviceData } from "@/data/Quotations";
import { useState } from "react";
import Services from "./Services";

const ServiceContainer = () => {
  //track the active service
  const [activeService, setActiveService] = useState<string | null>(null);
  return (
    <>
      <p className="text-blue-400 mt-10 md:mt-14 text-xs mb-1">
        CHOOSE SERVICES
      </p>
      <h2 className="text-3xl font-semibold text-blue-800 mb-2">
        What kind of application do you need today?
      </h2>

      <p className="text-blue-900 font-medium mb-8">
        You can add multiple services for each set of application. If you have
        applications that require different functionalities, please request a
        separate quote for each set.
      </p>

      {/* select service option */}
      <div className="flex flex-col gap-5 mb-32">
        {
          // TODO: Have to take the service data from the database.
          serviceData.map((service) => (
            <Services
              activeService={activeService}
              setActiveService={setActiveService}
              service={service}
              key={service.id}
            />
          ))
        }
      </div>
    </>
  );
};

export default ServiceContainer;
