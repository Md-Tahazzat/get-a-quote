import AllTitleContentHeader from "@/components/pages/Dashboard/Pages/Home/AllTitle/AllTitleContentHeader";
import AllTitleContent from "@/components/pages/Dashboard/Pages/Home/AllTitle/AllTitleContent";
import { FaPlus } from "react-icons/fa";

const AllTitle = () => {
  return (
    <section className="container px-4 mx-auto mt-10">
      <div className="flex items-center justify-between gap-x-3 md:px-6 lg:px-8">
        <h2 className="text-3xl font-medium ">All Title</h2>
        <div className="">
          <label
            htmlFor="add-new-title-for-homepage-content"
            className="btn btn-primary"
          >
            <FaPlus className="mr-2" />
            Add New Title
          </label>

          {/* Put this part before </body> tag */}
          <input
            type="checkbox"
            id="add-new-title-for-homepage-content" //todo change id for each modal dynamically
            className="modal-toggle"
          />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              {/* close modal */}
              <label
                htmlFor="add-new-title-for-homepage-content" //todo change id for each modal dynamically
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
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter section title"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter section category"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-success">Add New</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="overflow-x-auto ">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <AllTitleContentHeader></AllTitleContentHeader>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  <AllTitleContent></AllTitleContent>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTitle;
