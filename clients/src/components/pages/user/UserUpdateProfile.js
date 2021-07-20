import React, { Component } from "react";

class UserUpdateProfile extends Component {
  submitHandaler() {}

  render() {
    return (
      <div className=" card mt-4 p-4 col-md-6 m-auto">
        <form action="/action_page.php">
          <div className="form-group">
            <label className="my-2" for="email">
              First Name:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter First Name"
              name="email"
            />
          </div>
          <div className="form-group">
            <label className="my-2" for="pwd">
              Last Name:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter Last Name"
              name="pswd"
            />
          </div>
          <div className="form-group">
            <label className="my-2" for="pwd">
              Email:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter Email"
              name="pswd"
            />
          </div>
          <div className="form-group">
            <label className="my-2" for="pwd">
              Blood Group:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter Blood Group"
              name="pswd"
            />
          </div>
          <div className="form-group">
            <label className="my-2" for="pwd">
              District:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter District"
              name="pswd"
            />
          </div>
          <div className="form-group">
            <label className="my-2" for="pwd">
              Upazila:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter Upazila"
              name="pswd"
            />
          </div>
          <div className="form-group">
            <label className="my-2" for="pwd">
              Date of Birth:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter Date of Birth"
              name="pswd"
            />
          </div>
          <div className="form-group">
            <label className="my-2" for="pwd">
              Facebook:
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter Facebook Link"
              name="pswd"
            />
          </div>
          <div className="form-group">
            <label className="my-2" for="pwd">
              Description:
            </label>
            <textarea
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter Blood Description"
              name="pswd"
              rows="6"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Update
          </button>
        </form>
      </div>
    );
  }
}
export default UserUpdateProfile;
