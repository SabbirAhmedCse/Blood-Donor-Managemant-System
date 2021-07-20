import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../../images/images.png";

const Dashbord = (props) => {
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const url = "/blood-donor/user";
  useEffect(() => {
    fetch("/blood-donor/user")
      .then((response) => response.json())
      .then((users) => setDonors(users.user))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(donors);
  console.log(searchTerm);

  function searchHandler(rows) {
    return rows.filter(
      (row) =>
        row.bloodGroup.toLowerCase().indexOf(searchTerm) > -1 ||
        row.district.toLowerCase().indexOf(searchTerm) > -1 ||
        row.upazila.toLowerCase().indexOf(searchTerm) > -1
    );
  }

  return (
    <div>
      <div className="ui search">
        <div className="form-inline m-4">
          <input
            type="text"
            placeholder="Search Blood Group or Address"
            className="form-control mr-sm-2"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <i className="search icon"></i>
        </div>
      </div>
      {
        <div className=" grid-container ">
          {searchHandler(donors).map((user) => (
            <div key={user._id} className="card m-2 d-flex text-center">
              <div>
                <img src={Image} alt=""></img>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Name: {user.firstName} {user.lastName}
                </h5>
                <p className="card-text">Blood Group: {user.bloodGroup}</p>
                <p className="card-text">Disrtict: {user.district}</p>
                <p className="card-text">Upazila: {user.upazila}</p>
                <Link
                  to={{
                    pathname: `user/${user._id}`,
                    state: { fromDashboard: true },
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Dashbord;
