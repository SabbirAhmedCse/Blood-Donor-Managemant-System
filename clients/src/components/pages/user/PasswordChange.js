import React, { Component } from "react";

class PasswordChange extends Component {
  render() {
    return (
      <div className="card col-md-4 mt-4 m-auto p-4">
        <form action="/action_page.php">
          <div className="form-group">
            <label for="email">Enter Old Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Old Password"
              id="email"
            />
          </div>
          <div className="form-group">
            <label for="pwd">Enter New Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter New Password"
              id="pwd"
            />
          </div>
          <div className="form-group">
            <label for="pwd">Re-enter New Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter New Password"
              id="pwd"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PasswordChange;
