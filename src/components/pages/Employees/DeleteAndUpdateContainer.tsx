"use client";

import axios from "axios";

type PropsType = {
  id: string | undefined;
};

const DeleteAndUpdateContainer = ({ id }: PropsType) => {
  // delete and update handler functions
  const deleteEmployee = async () => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/api/team-member`, {
        data: { id },
      })
      .then((res) => {
        if (res.data.status === 200) {
          // TODO: Have to change alert into react-hot-toast or somehting like that
          alert("user deleted successfull");
        }
      })
      .catch((error) => {
        alert("Fail ! something went wrong");
      });
  };
  const updateEmployee = async () => {
    console.log("fn trigger with", id);
  };
  return (
    <>
      <button onClick={updateEmployee} className="lg:hover:underline">
        update
      </button>{" "}
      <button onClick={deleteEmployee} className="lg:hover:underline">
        delete
      </button>
    </>
  );
};
export default DeleteAndUpdateContainer;
