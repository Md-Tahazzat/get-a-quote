"use client";
import HeroProjectContent from "@/components/pages/Dashboard/Pages/Home/hero-project/HeroProjectContent";
import HeroProjectContentHeader from "@/components/pages/Dashboard/Pages/Home/hero-project/HeroProjectContentHeader";
import { FaPlus } from "react-icons/fa";
import { useEffect, useReducer, useState } from "react";
import { ProjectType } from "@/types/types";
import { Project } from "@prisma/client";
import ProjectForm from "@/components/pages/Dashboard/Pages/Home/hero-project/ProjectForm";
import { fetchProjects } from "@/utility/fetchContent/fetchProjects";

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

const HeroProject = () => {
  // Initialize the state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [projects, setProjects] = useState<Project[]>([]); //todo change type to ProjectType[

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
    try {
      if (state.projectFile) {
        const formData = new FormData();
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
        const response = await fetch("/api/project", {
          method: "POST",
          body: formData,
        });

        // update the state of the projects
        const data = await response.json();
        setProjects((pre) => [...pre, data]);
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
  useEffect(() => {
    // fetch projects from server when page is loaded
    const fetchPro = async () => {
      const projects = await fetchProjects({});
      setProjects(projects || []);
    };
    fetchPro();
  }, []);

  // console.log(projects);
  return (
    <>
      <section className="container px-4 mx-auto mt-10">
        <div className="flex items-center justify-between gap-x-3 md:px-6 lg:px-8">
          <h2 className="text-3xl font-medium ">All Projects</h2>
          <div className="">
            <div className="flex items-center gap-3">
              <label htmlFor="add-new-project" className="btn btn-primary">
                <FaPlus className="mr-2" />
                Add New Project
              </label>
            </div>

            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id="add-new-project" //todo change id for each modal dynamically
              className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                {/* close modal */}
                <label
                  htmlFor="add-new-project" //todo change id for each modal dynamically
                  className="absolute top-2 right-2 z-30 cursor-pointer"
                >
                  <svg
                    className="swap-on fill-current"
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
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <HeroProjectContentHeader></HeroProjectContentHeader>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {projects.map((project) => (
                      <HeroProjectContent
                        key={project.id}
                        project={project}
                        setProjects={setProjects}
                      ></HeroProjectContent>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroProject;
