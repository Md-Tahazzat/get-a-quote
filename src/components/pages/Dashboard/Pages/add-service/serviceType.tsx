import { ChangeEvent, useEffect, useState } from "react";

const ServiceType = ({
  item,
  index,
  handleSelectStateChange,
  handleTypeStateChange,
}: {
  handleSelectStateChange: Function;
  item: {
    type: string;
    status: string;
  };
  index: number;
  handleTypeStateChange: Function;
}) => {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
    handleSelectStateChange(index, e.target.value);
  };
  useEffect(() => {
    console.log(item)
    setType(item.type);
    setStatus(item.status);
  }, [item]);
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between gap-4">
          <div className="form-control flex-1">
            <label htmlFor="service-type" className="label">
              <span className="label-text text-black   text-lg">
                Service Type <sup className="text-red-500">*</sup>
              </span>
            </label>
            <input
              type="text"
              id="service-type"
              placeholder="Service Type"
              value={type}
              className="input input-bordered bg-transparent text-black"
              required
              onChange={handleTypeChange}
              onBlur={() =>{
                handleTypeStateChange(index, type)
              }}
            />
          </div>
          {/* select options is this service is active or inactive */}
          <div className="form-control w-fit">
            <label htmlFor="service-status" className="label">
              <span className="label-text text-black   text-lg">
                Status <sup className="text-red-500">*</sup>
              </span>
            </label>
            <select
              name="service-status"
              id="service-status"
              value={status}
              className="select select-bordered select-accent bg-transparent text-black"
              onChange={handleSelectChange}
              required
            >
              <option value="">select one</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceType;
