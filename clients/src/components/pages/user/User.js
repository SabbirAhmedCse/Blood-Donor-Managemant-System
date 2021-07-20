import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { singleDonor } from "../../../storeData/axios";
const User = (props) => {
  const [singleDonor, setSingleDonor] = useState([]);

  useEffect(() => {
    let id = props.match.params.userId;
    axios
      .get(`/blood-donor/user/${id}`)
      .then((users) => setSingleDonor(users.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(singleDonor);
  const {
    firstName,
    lastName,
    email,
    dob,
    age,
    bloodGroup,
    phone,
    district,
    upazila,
    facebook,
    discription,
  } = singleDonor;

  console.log(firstName, lastName, phone);

  return (
    <div className="container col-xl-6 col-md-8 col-sm-10">
      <table className="table table-bordered my-4 table-responsive-md">
        <thead>
          <tr>
            <th>Name</th>
            <th>
              {firstName} {lastName}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phone</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <Link to={email}>{email}</Link>
            </td>
          </tr>
          <tr>
            <td>Blood Group</td>
            <td>{bloodGroup}</td>
          </tr>
          <tr>
            <td>Date Of Birth</td>
            <td>{dob}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>District</td>
            <td>{district}</td>
          </tr>
          <tr>
            <td>Upazila</td>
            <td>{upazila}</td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>{facebook}</td>
          </tr>
          <tr>
            <td>Discription</td>
            <td>{discription}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
