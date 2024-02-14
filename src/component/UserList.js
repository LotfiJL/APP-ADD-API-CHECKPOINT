import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";

import axios from "axios";

const UserList = () => {
  const [data, setData] = useState([]);
  const [errore, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        setError(error.errore);
      });
  }, []);

  return errore !== "" ? (
    <div>
      <div className="spinner" />
      <h1 style={{ color: "red" }}>Dommage ... !</h1>
    </div>
  ) : (
    <div className="container">
      <Navbar
        className="Navbar"
        style={{ color: "green", fontSize: "50px", fontFamily: "sans-serif" }}
      >
        API-GET-METHOD
      </Navbar>
      <div>
        {data.map((user) => (
          <div key={user.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "green" }}>
                  {user.name}
                </h5>
                <p
                  className="card-text"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  Email : {user.email}
                </p>
                <p
                  className="card-text"
                  style={{ fontWeight: "bold", color: "blueviolet" }}
                >
                  Phone: {user.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
