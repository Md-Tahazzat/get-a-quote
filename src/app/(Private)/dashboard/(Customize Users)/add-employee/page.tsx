"use client";
import { uploadImageAndGetUrl } from "@/components/pages/Dashboard/Pages/add-employee";
import Loading from "@/components/pages/Loading/Loading";
import { TeamData } from "@/types/types";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  designation: string;
  image: File;
  facebook: string;
  linkedIn: string;
  twitter: string;
  instragram: string;
}

const AddEmployeePage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // submit handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    const imageFile: any = data.image;

    // upload image and get the link
    const res = await uploadImageAndGetUrl(imageFile?.[0]);

    // if the link is available then save to the database.
    if (res?.url) {
      const { name, designation, facebook, instragram, linkedIn, twitter } =
        data;
      const employeeInfo: TeamData = {
        name,
        image: res.url,
        designation,
        socialLinks: [
          { icon: "facebook", link: facebook },
          { icon: "linkedIn", link: linkedIn },
          { icon: "instragram", link: instragram },
          { icon: "twitter", link: twitter },
        ],
      };
      // save data to the database.
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/team-member`,
        {
          employeeInfo,
        }
      );
      // TODO: give a message user added successfull
      if (result.status === 200) {
        console.log(result);
        alert("user added successfull");
      } else {
        alert("something went wrong");
      }
      setLoading(false);
    } else {
      // TODO: give a message that something went wrong
      setLoading(false);
    }
  };
  return (
    <div className="mb-20">
      <h1 className="text-center mt-20 mb-10 text-2xl font-semibold">
        Add Employee
      </h1>
      <form
        className="max-w-[800px] w-full bg-slate-100 shadow-md text-slate-800 rounded-md mx-auto p-2 md:p-6 lg:p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* name input starts */}
        <div className="mb-4 w-full relative">
          <label className="block mb-0.5">Name</label>
          <input
            type="text"
            className={`p-1 px-2 w-full rounded-md outline-none mb-1 bg-slate-300/20 shadow-md border focus:border-dashboard-primary ${
              errors.name && "border-red-300"
            }`}
            {...register("name", {
              required: "Name is required",
            })}
            placeholder="Employee name"
          />
          {errors.name && (
            <p className="text-red-400">{errors.name?.message}</p>
          )}
        </div>

        {/* image input starts */}
        <div className="mb-4 w-full relative">
          <label className="block mb-0.5">Image</label>
          <input
            type="file"
            className={`p-1 px-2 w-full rounded-md outline-none mb-1 bg-slate-300/20 shadow-md border focus:border-dashboard-primary ${
              errors.image && "border-red-300"
            }`}
            {...register("image", { required: "Please select an image" })}
          />
          {errors.image && (
            <p className="text-red-400">{errors.image?.message}</p>
          )}
        </div>

        {/* designation input starts */}
        <div className="mb-4 w-full relative">
          <label className="block mb-0.5">Designation</label>
          <input
            type="text"
            className={`p-1 px-2 w-full rounded-md outline-none mb-1 bg-slate-300/20 shadow-md border focus:border-dashboard-primary ${
              errors.designation && "border-red-300"
            }`}
            {...register("designation", {
              required: "Designation is required",
            })}
            placeholder="Employee designation"
          />
          {errors.designation && (
            <p className="text-red-400">{errors.designation?.message}</p>
          )}
        </div>

        {/* social links start */}
        <h1 className="text-center font-semibold mt-10 mb-5">
          Add social media links
        </h1>
        <div className="md:flex items-center w-full md:justify-center md:gap-5">
          {/* facebook */}
          <div className="mb-4 w-full relative">
            <label className="block mb-0.5">Facebook</label>
            <input
              type="text"
              className={`p-1 px-2 w-full rounded-md outline-none mb-1 bg-slate-300/20 shadow-md border focus:border-dashboard-primary ${
                errors.facebook && "border-red-300"
              }`}
              {...register("facebook", {
                required: "Facebook url is reqired",
              })}
              placeholder="Facebook profile url"
            />
            {errors.facebook && (
              <p className="text-red-400">{errors.facebook?.message}</p>
            )}
          </div>

          {/* linkedIn */}
          <div className="mb-4 w-full relative">
            <label className="block mb-0.5">LinkedIn</label>
            <input
              type="text"
              className={`p-1 px-2 w-full rounded-md outline-none mb-1 bg-slate-300/20 shadow-md border focus:border-dashboard-primary ${
                errors.linkedIn && "border-red-300"
              }`}
              {...register("linkedIn", {
                required: "LinkedIn url is reqired",
              })}
              placeholder="LinkedIn profile url"
            />
            {errors.linkedIn && (
              <p className="text-red-400">{errors.linkedIn?.message}</p>
            )}
          </div>
        </div>
        <div className="md:flex items-center w-full md:justify-center md:gap-5">
          {/* Twitter */}
          <div className="mb-4 w-full relative">
            <label className="block mb-0.5">Twitter</label>
            <input
              type="text"
              className={`p-1 px-2 w-full rounded-md outline-none mb-1 bg-slate-300/20 shadow-md border focus:border-dashboard-primary`}
              {...register("twitter")}
              placeholder="Twitter profile url"
            />
            {errors.twitter && (
              <p className="text-red-400">{errors.twitter?.message}</p>
            )}
          </div>

          {/* Instragram */}
          <div className="mb-4 w-full relative">
            <label className="block mb-0.5">Instragram</label>
            <input
              type="text"
              className={`p-1 px-2 w-full rounded-md outline-none mb-1 bg-slate-300/20 shadow-md border focus:border-dashboard-primary`}
              {...register("instragram")}
              placeholder="Instragram profile url"
            />
            {errors.instragram && (
              <p className="text-red-400">{errors.instragram?.message}</p>
            )}
          </div>
        </div>
        <button
          disabled={loading}
          className="py-1 px-5 text-xl mt-3 text-white bg-orange-500 hover:bg-orange-600 duration-200 rounded-md"
        >
          {loading ? <Loading className="py-1 px-3 text-white " /> : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddEmployeePage;
