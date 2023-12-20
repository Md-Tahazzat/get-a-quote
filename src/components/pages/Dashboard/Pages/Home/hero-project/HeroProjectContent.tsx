"use client";
import { Project } from "@prisma/client";
import Image from "next/image";
import { FC, useEffect, useReducer, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import ProjectForm from "./ProjectForm";
import { ProjectType } from "@/types/types";

interface SingleProject {
  project: Project;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

type Action =
  | {
      type: "UPDATE_FIELD";
      field: string;
      value: string;
    }
  | {
      type: "UPDATE_FILE";
      field: string;
      file: File;
    };

const initialState: ProjectType = {
  projectName: "",
  projectDescription: "",
  clientDescription: "",
  projectGoals: "",
  projectProblem: "",
  projectSolutions: "",
  projectFile: null,
  projectOverviewVideo: "",
};

const reducer = (state: ProjectType, action: Action): ProjectType => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "UPDATE_FILE":
      return {
        ...state,
        [action.field]: action.file,
      };
    default:
      return state;
  }
};

const HeroProjectContent: FC<SingleProject> = ({ project, setProjects }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/project/${project.id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        // console.log(data);
        // refetch all projects
        const projects = data.projects as Project[];
        setProjects(projects);

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  // Define a function to handle field updates
  const handleFieldChange = (
    field: string,
    value: string | File | null | undefined
  ) => {
    if (field === "projectFile") {
      dispatch({ type: "UPDATE_FILE", field, file: value as File });
    } else {
      dispatch({ type: "UPDATE_FIELD", field, value: value as string });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    try {
      if (state.projectFile) {
        formData.set("file", state.projectFile);
        // append other fields
        formData.set("projectName", state.projectName || "");
        formData.set("projectDescription", state.projectDescription || "");
        formData.set("clientDescription", state.clientDescription || "");
        formData.set("projectGoals", state.projectGoals || "");
        formData.set("projectProblem", state.projectProblem || "");
        formData.set("projectSolutions", state.projectSolutions || "");
        formData.set("projectOverviewVideo", state.projectOverviewVideo || "");

        // send data to server
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/project/${project.id}`,
          {
            method: "PUT",
            body: formData,
          }
        );

        // update the state of the projects
        const data = await response.json();
        const { updatedProjects } = data;
        console.log(data);
        // close the modal
        setProjects(updatedProjects as Project[]);
        setIsModelOpen(false);
      } else {
        // append other fields
        formData.set("projectName", state.projectName || "");
        formData.set("projectDescription", state.projectDescription || "");
        formData.set("clientDescription", state.clientDescription || "");
        formData.set("projectGoals", state.projectGoals || "");
        formData.set("projectProblem", state.projectProblem || "");
        formData.set("projectSolutions", state.projectSolutions || "");
        formData.set("projectOverviewVideo", state.projectOverviewVideo || "");

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/project/${project.id}`,
          {
            method: "PUT",
            body: formData,
          }
        );

        // update the state of the projects
        const data = await response.json();
        const { updatedProjects } = data;
        console.log(data);
        // close the modal
        setProjects(updatedProjects as Project[]);
        setIsModelOpen(false);
      }
      //! reset the form
      // handleFieldChange("projectName", "");
      // handleFieldChange("projectDescription", "");
      // handleFieldChange("clientDescription", "");
      // handleFieldChange("projectGoals", "");
      // handleFieldChange("projectProblem", "");
      // handleFieldChange("projectSolutions", "");
      // handleFieldChange("projectFile", null);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      // set loading to false
      setLoading(false);
    }
  };

  // close model after successfully update the project data
  const handleCloseModel = () => {
    setIsModelOpen(false);
  };
  const toggleModel = () => {
    setIsModelOpen((pre) => !pre);
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_FIELD",
      field: "projectName",
      value: project.projectName || "",
    });
    dispatch({
      type: "UPDATE_FIELD",
      field: "projectDescription",
      value: project.projectDescription || "",
    });
    dispatch({
      type: "UPDATE_FIELD",
      field: "clientDescription",
      value: project.clientDescription || "",
    });
    dispatch({
      type: "UPDATE_FIELD",
      field: "projectGoals",
      value: project.projectGoals || "",
    });
    dispatch({
      type: "UPDATE_FIELD",
      field: "projectProblem",
      value: project.projectProblem || "",
    });
    dispatch({
      type: "UPDATE_FIELD",
      field: "projectSolutions",
      value: project.projectSolutions || "",
    });
    dispatch({
      type: "UPDATE_FIELD",
      field: "projectOverviewVideo",
      value: project.projectOverviewVideo || "",
    });
  }, [project.clientDescription, project.projectDescription, project.projectGoals, project.projectName, project.projectOverviewVideo, project.projectProblem, project.projectSolutions]);

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 break-all">
          <td className=" py-4 text-sm text-gray-500 dark:text-gray-300 break-all">
            <Image
              height={200}
              width={100}
              src={
                project.projectUrl
                  ? project.projectUrl
                  : "/images/hero-project-thumb.png"
              }
              alt=""
            />
          </td>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 break-all">
          <h2 className="text-sm font-normal text-emerald-500">
            {project.projectName ? project.projectName : "Project Name"}
          </h2>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 break-all">
          <h2 className="text-sm font-normal text-emerald-500">
            {project.projectDescription
              ? project.projectDescription
              : "Project Description"}
          </h2>
        </td>

        <td className="px-4 py-4 text-sm break-all">
          <label
            htmlFor={`update-project-${project.id}`} //todo change id for each modal dynamically
            onClick={toggleModel}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <FaEdit className="text-2xl"></FaEdit>
          </label>
        </td>
        <td className="px-4 py-4 text-sm break-all">
          <button
            onClick={handleDelete}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <FaTrash className="text-2xl"> </FaTrash>
          </button>
        </td>
      </tr>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={`update-project`} //todo change id for each modal dynamically
        className="modal-toggle"
        checked={isModelOpen}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* close modal */}
          <label
            htmlFor={`update-project`} //todo change id for each modal dynamically
            className="absolute top-2 right-2 z-30 cursor-pointer"
            onClick={handleCloseModel}
          >
            <svg
              className="swap-on fill-current stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          {/* close modal */}

          <div className="card  w-full bg-base-100">
            <ProjectForm
              handleFieldChange={handleFieldChange}
              handleFormSubmit={handleFormSubmit}
              state={state}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroProjectContent;
