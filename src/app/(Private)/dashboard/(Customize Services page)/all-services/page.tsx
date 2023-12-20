import { fetchServices } from "@/utility/fetchContent/fetchService";
import Link from "next/link";
import IconButton from "./IconButton";

const AllServices = async () => {
  const services = (await fetchServices({})) || [];
  // console.log(services);

  return (
    <>
      <div className="flex items-center justify-center gap-6 flex-wrap p-8 ">
        {services.map((service) => (
          <div
            key={service.id}
            className=" w-5/12 border border-[#05405e] p-8 group relative overflow-hidden"
          >
            <div className="absolute w-full left-0 -top-full flex items-center justify-center gap-4 py-4 duration-300 group-hover:opacity-100 group-hover:top-0  ">
              <IconButton
                id={service.id}
                badge={service.badge}
                descriptions={service.descriptions}
                duration={service.duration}
                name={service.name}
                price={service.price}
                serviceTypes={service.serviceTypes}
              />
            </div>
            <div className="space-y-4">
              <div className=" flex justify-between items-center">
                <h3 className="text-3xl font-bold">{service.name}</h3>
                {service.badge && (
                  <span className="text-xs text-[#05405e] py-2 px-4 rounded-full bg-[#E6ECEF]">
                    {service.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-[#858585]">{service.descriptions}</p>
              <p className="text-[#0a0a0a] font-bold text-3xl mt-4 ">
                ${service.price}
                <em className="text-2xl text-[#a3a3a3]">/{service.duration}</em>
              </p>
              <hr />
              <ul className="space-y-4">
                {service.serviceTypes
                  .sort((a, b) =>
                    a.status.toLowerCase().localeCompare(b.status.toLowerCase())
                  )
                  .map((item) => (
                    <li
                      key={item.type}
                      className={`each-type ${
                        item.status === "inactive" && "disabled"
                      }`}
                    >
                      {item.type}
                    </li>
                  ))} 
                
              </ul>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default AllServices;
