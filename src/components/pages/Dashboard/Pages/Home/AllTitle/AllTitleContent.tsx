"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const AllTitleContent = () => {
  let handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result: { isConfirmed: any }) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 break-all">
          <h2 className="text-sm font-normal text-emerald-500">
            Lets get to know us more
          </h2>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 break-all">
          <h2 className="text-sm font-normal text-emerald-500">About Us</h2>
        </td>

        <td className="px-4 py-4 text-sm break-all">
          <label
            htmlFor="my-modal-6" //todo change id for each modal dynamically
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <FaEdit className="text-2xl"></FaEdit>
          </label>

          {/* Put this part before </body> tag */}
          <input
            type="checkbox"
            id="my-modal-6" //todo change id for each modal dynamically
            className="modal-toggle"
          />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <label
                htmlFor="my-modal-6" //todo change id for each modal dynamically
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
              <div className="card  w-full bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-success">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default AllTitleContent;
