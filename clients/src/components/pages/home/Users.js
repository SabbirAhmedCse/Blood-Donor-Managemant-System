import React from "react";
import { Link } from "react-router-dom";
import Image from "../../images/images.png";

import "./users.css";
export default function Users({ donors }) {
  return (
    <div>
      {donors.map((rows) => (
        <div className="card m-2 d-flex text-center">
          <div>
            <img src={Image} alt=""></img>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Name: {rows.firstName} {rows.lastName}
            </h5>
            <p className="card-text">Email: {rows.email}</p>
            <p className="card-text">Blood Group: {rows.bloodGroup}</p>
            <Link
              to={`/user/${rows._id}`}
              id={rows._id}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
