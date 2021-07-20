import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avater from "../../images/img_avatar3.png";

class userProfile extends Component {
  render() {
    return (
      <div className="col-md-4 m-auto">
        <div className="card m-4">
          <img
            class="card-img-top"
            width="250"
            height="250"
            src={Avater}
            alt="Card image"
          />
          <div className="card-body">
            <p className="card-text">Name: {`Md Sabbir Molla`}</p>
            <p className="card-text">Email: {`sabbir.cse.18@gmail.com`}</p>
            <p className="card-text">Phone Number: {`01639527363`}</p>
            <p className="card-text">BloodGroup: {`B+`}</p>
            <p className="card-text">Date of Birth: {`1997-07-15`}</p>
            <p className="card-text">District: {`Gopalgonj`}</p>
            <p className="card-text">Upazila: {`Kotalipara`}</p>
            <p className="card-text">Facebook: {``}</p>
            <p className="card-text">Description: {``}</p>

            <Link to="/update">
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button className="btn btn-danger float-end">Delete Account</button>
          </div>
        </div>
      </div>
    );
  }
}

export default userProfile;
