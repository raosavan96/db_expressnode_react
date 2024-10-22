import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormSec() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState();

  function handleForm(e) {
    e.preventDefault();

    const userData = { user, password };

    fetch("/api/userdeta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })
      .then((res) => res.json())
      .then((resPonse) => {
        console.log(resPonse);
        if (resPonse.message) {
          navigate("/");
        }
        setUser("");
        setPassword("");
      });
  }

  return (
    <>
      <div className="max-w-96 mx-auto">
        <h1>Form</h1>
        <form onSubmit={handleForm}>
          <label className="text-green-500">Username</label>
          <input
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
            type="text"
            className="bg-slate-500 text-white ms-3 px-3 py-1 rounded-xl"
          />
          <br />
          <div className="mt-3">
            <label>Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="bg-slate-500 text-white ms-3  px-3 py-1 rounded-xl"
              type="number"
            />
          </div>
          <br />
          <button
            type="submit"
            className="bg-purple-700 text-white px-5 py-1 rounded-xl"
          >
            Submit
          </button>
        </form>

        <Link to="/data">
          <button className="bg-lime-400 px-3 mt-5 py-1 rounded-xl">
            Data Page
          </button>
        </Link>
      </div>
    </>
  );
}

export default FormSec;
