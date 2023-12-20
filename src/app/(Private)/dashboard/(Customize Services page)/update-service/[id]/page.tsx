"use client";

import ServiceType from "@/components/pages/Dashboard/Pages/add-service/serviceType";
import { ServiceActionType, ServiceState } from "@/types/types";
import { refetchAllServices } from "@/utility/revalidate/revalidate";
import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useReducer, useState } from "react";

const initialState: ServiceState = {
  name: "",
  badge: "",
  descriptions: "",
  price: "",
  duration: "",
  serviceTypes: [
    {
      type: "",
      status: "",
    },
  ],
};

function reducer(state: ServiceState, action: ServiceActionType): ServiceState {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "badge":
      return { ...state, badge: action.payload };
    case "descriptions":
      return { ...state, descriptions: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "duration":
      return { ...state, duration: action.payload };
    case "type": {
      console.log(action.payload);
      const serviceTypes = state.serviceTypes.map((item, index) => {
        if (index === parseInt(action.payload.id, 10)) {
          return { ...item, type: action.payload.value };
        }
        return item;
      });

      return {
        ...state,
        serviceTypes,
      };
    }
    case "status": {
      const serviceTypes = state.serviceTypes.map((item, index) => {
        if (index === parseInt(action.payload.id, 10)) {
          return { ...item, status: action.payload.value };
        }
        return item;
      });

      return {
        ...state,
        serviceTypes,
      };
    }
    case "addServiceType":
      return {
        ...state,
        serviceTypes: [...state.serviceTypes, { type: "", status: "" }],
      };

    // reset state
    case "reset":
      //   console.log({action})
      return initialState;

    // load state from db
    case "set":
      return action.payload;

    default:
      throw new Error();
  }
}

interface Params {
  id: string;
  // other properties...
}
const UpdateService = ({ params }: { params: Params }) => {
  const { id } = params;

  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleChange =
    (type: "name" | "badge" | "descriptions" | "price" | "duration") =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch({ type, payload: e.target.value });
    };

  const handleSelectStateChange = (id: string, value: string) => {
    dispatch({
      type: "status",
      payload: {
        id,
        value,
      },
    });
  };

  const handleTypeStateChange = (id: string, value: string) => {
    // console.log(id, e.target.value)
    dispatch({
      type: "type",
      payload: {
        id,
        value,
      },
    });
  };

  const handleAddService = () => {
    dispatch({ type: "addServiceType" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // send data to server
    const res = await axios.put(`${process.env.NEXT_PUBLIC_URL}/api/service/${id}`, state);
    refetchAllServices();
    // console.log(res.data);
    // dispatch({ type: "reset" });
    // e.currentTarget.reset();
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/service/${id}`
      );
      const {service} = res.data
      dispatch({ type: "set", payload: service });
      setLoading(false);
    };

    getData();
  }, [id]);

  console.log(state)

  return (
    <div className="min-h-screen flex items-center justify-center my-8">
      <div className="card w-full max-w-lg shadow-2xl bg-dashboard-primary/10">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
        <>
          <form onSubmit={handleSubmit} className="card-body">
          {/* Service name start */}
          <div className="form-control">
            <label htmlFor="service-name" className="label">
              <span className="label-text text-black   text-lg">
                Service Name <sup className="text-red-500">*</sup>
              </span>
            </label>
            <input
              type="text"
              id="service-name"
              placeholder="Service Name"
              className="input input-bordered bg-transparent text-black"
              required
              value={state.name}
              onChange={handleChange("name")}
            />
          </div>
          {/* Service name start */}
          
          {/* Badge start */}
          <div className="form-control">
            <label htmlFor="service-badge" className="label">
              <span className="label-text text-black   text-lg">Badge</span>
            </label>
            <input
              type="text"
              id="service-Badge"
              placeholder="popular | best seller | new arrival"
              className="input input-bordered bg-transparent text-black"
              required
              onChange={handleChange("badge")}
              value={state.badge}
            />
          </div>
          {/* Badge end */}
          
          {/* Service descriptions start */}
          <div className="form-control">
            <label htmlFor="service-descriptions" className="label">
              <span className="label-text text-black   text-lg">
                Service Descriptions <sup className="text-red-500">*</sup>
              </span>
            </label>
            <textarea
              id="service-descriptions"
              placeholder="Service Descriptions"
              className="textarea h-24 textarea-bordered bg-transparent"
              required
              onChange={handleChange("descriptions")}
              value={state.descriptions}
            />
          </div>
          {/* Service descriptions end */}
          
          {/* Price start */}
          <div className="form-control">
            <label htmlFor="service-price" className="label">
              <span className="label-text text-black   text-lg">
                Price <sup className="text-red-500">*</sup>
              </span>
            </label>
            <input
              type="number"
              id="service-price"
              placeholder="Price"
              className="input input-bordered bg-transparent text-black"
              required
              onChange={handleChange("price")}
              value={state.price}
            />
          </div>
          {/* Price end */}
          
          {/* Duration start */}
          <div className="form-control">
            <label htmlFor="service-duration" className="label">
              <span className="label-text text-black   text-lg">
                Duration <sup className="text-red-500">*</sup>
              </span>
            </label>
            <input
              type="type"
              id="service-duration"
              placeholder="Monthly | Yearly | Quarterly"
              className="input input-bordered bg-transparent text-black"
              required
              onChange={handleChange("duration")}
              value={state.duration}
            />
          </div>
          {/* Duration end */}
          
          {/* Service type start */}
          {state?.serviceTypes?.map((item, index) => (
            <ServiceType
              key={`${item.type}-${index}`}
              index={index}
              handleSelectStateChange={handleSelectStateChange}
              handleTypeStateChange={handleTypeStateChange}
              item={item}
            />
          ))}
          {/* Service type end */}
          {/* add new service button */}
          <div className="mt-4  flex items-center justify-center">
            <button
              type="button"
              onClick={handleAddService}
              className="btn bg-white text-dashboard-primary hover:bg-dashboard-primary hover:text-white duration-300"
            >
              Add New Service
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-white text-dashboard-primary hover:bg-dashboard-primary hover:text-white duration-300">
              Update Service
            </button>
          </div>
          </form>
        </>
        )}
      </div>
    </div>
  );
};

export default UpdateService;

