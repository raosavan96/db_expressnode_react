import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateSec() {
  const navigete = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [updateUser, setUpdateUser] = useState("");
  const [updatePass, setUpdatePass] = useState();

  function handleUpdate(e) {
    e.preventDefault();

    const updatedValue = { updateUser, updatePass };

    fetch(`/api/updatednewvalue/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedValue)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message) {
          navigete("/data");
        }
      });
  }

  useEffect(() => {
    fetch(`/api/update/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUpdateUser(result);
        setUpdatePass(result);
      });
  }, []);

  return (
    <>
      <div>UpdateSec</div>

      <form onSubmit={handleUpdate}>
        <label className="text-green-500">Username</label>
        <input
          onChange={(e) => {
            setUpdateUser(e.target.value);
          }}
          value={updateUser && updateUser.userName}
          type="text"
          className="bg-slate-500 text-white ms-3 px-3 py-1 rounded-xl"
        />{" "}
        <br />
        <div className="mt-5">
          <label className="text-green-500">Password</label>
          <input
            onChange={(e) => {
              setUpdatePass(e.target.value);
            }}
            value={updatePass && updatePass.password}
            type="number"
            className="bg-slate-500 text-white ms-3 px-3 py-1 rounded-xl"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-700 text-white px-5 py-1 rounded-xl"
        >
          Update
        </button>
      </form>
    </>
  );
}

export default UpdateSec;
