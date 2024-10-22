import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DataSec() {
  const [returnV, setReturnV] = useState([]);
  useEffect(() => {
    fetch("/api/returndata")
      .then((res) => res.json())
      .then((returnData) => {
        console.log(returnData);
        setReturnV(returnData);
      });
  }, []);

  return (
    <>
      <div className="max-w-96 mx-auto ">
        <h1>Data</h1>

        <Link to="/">
          <button className="bg-lime-400 px-3 mt-5 py-1 rounded-xl">
            Home Page
          </button>
        </Link>

        <div className="mt-5">
          <ul>
            <li>
              <span className="me-5">
                <strong>Username</strong>
              </span>
              <span>
                <strong>Password</strong>
              </span>
            </li>

            {returnV.map((value) => (
              <li>
                <span className="me-5">{value.userName}</span>
                <span>{value.password}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DataSec;
