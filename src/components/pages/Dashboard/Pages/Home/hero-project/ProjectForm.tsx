import { ProjectType } from "@/types/types";
import { FC, FormEventHandler } from "react";
interface ProjectFormProps {
  handleFormSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleFieldChange: Function;
  state: ProjectType;
  loading: boolean;
    error: string;
}
const ProjectForm: FC<ProjectFormProps> = ({
  handleFieldChange,
  handleFormSubmit,
  state,
  error,
  loading,
}) => {
  return (
    <>
      <form onSubmit={handleFormSubmit} className="card-body">
        <div className="form-control">
          <label htmlFor="project-name" className="label">
            <span className="label-text text-white font-bold">Project Name</span>
          </label>
          <input
            type="text"
            id="project-name"
            placeholder="Enter project name"
            className="input input-bordered text-white"
            required
            value={state.projectName}
            onChange={(e) => handleFieldChange("projectName", e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="project-image-url" className="label">
            <span className="label-text text-white font-bold">Project Image file</span>
          </label>
          <input
            type="file"
            id="project-image-file"
            placeholder="Enter project Image file"
            className="input input-bordered text-white"
            onChange={(e) => handleFieldChange("projectFile", e.target.files?.[0])}
          />
        </div>
        <div className="form-control">
          <label htmlFor="project-description" className="label">
            <span className="label-text text-white font-bold">Project description</span>
          </label>
          <textarea
            id="project-description"
            placeholder="Enter project description"
            className="input input-bordered text-white"
            required
            value={state.projectDescription}
            onChange={(e) =>
              handleFieldChange("projectDescription", e.target.value)
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="client-description" className="label">
            <span className="label-text text-white font-bold">Client Description</span>
          </label>
          <textarea
            id="client-description"
            placeholder="Enter Client Description"
            className="input input-bordered text-white"
            required
            value={state.clientDescription}
            onChange={(e) =>
              handleFieldChange("clientDescription", e.target.value)
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="project-goals" className="label">
            <span className="label-text text-white font-bold">Project Goals</span>
          </label>
          <textarea
            id="project-goals"
            placeholder="Enter Project Goals"
            className="input input-bordered text-white"
            required
            value={state.projectGoals}
            onChange={(e) => handleFieldChange("projectGoals", e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="project-problem" className="label">
            <span className="label-text text-white font-bold">Project Problem</span>
          </label>
          <textarea
            id="project-problem"
            placeholder="Enter Project Problem"
            className="input input-bordered text-white"
            required
            value={state.projectProblem}
            onChange={(e) =>
              handleFieldChange("projectProblem", e.target.value)
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="project-solutions" className="label">
            <span className="label-text text-white font-bold">Project Solutions</span>
          </label>
          <textarea
            id="project-solutions"
            placeholder="Enter Project Solutions"
            className="input input-bordered text-white"
            required
            value={state.projectSolutions}
            onChange={(e) =>
              handleFieldChange("projectSolutions", e.target.value)
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="project-overview-video" className="label">
            <span className="label-text text-white font-bold">Project overview video</span>
          </label>
          <input
            type="url"
            id="project-overview-video"
            placeholder="Enter project overview video"
            className="input input-bordered text-white"
            value={state.projectOverviewVideo}
            onChange={(e) => handleFieldChange("projectOverviewVideo", e.target.value)}
          />
        </div>
        <div className="form-control mt-6">
          <button
          disabled={loading}

           type="submit" className="btn btn-success">
            {/* if loading show loading animation */}
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3"
                viewBox="0 0 24 24"
              ></svg>
            ) : (
              "Update Project"
            )}
          </button>
        </div>
        {/* error is showing here */}
        {error && (
          <div className="alert alert-error mt-4">
            <div className="flex-1">
              <label>{error}</label>
            </div>
          </div>
        )}
        {/* loading is showing here */}
      </form>
    </>
  );
};

export default ProjectForm;
