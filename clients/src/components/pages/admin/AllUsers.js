import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getAllUsers } from "../../../store/actions/usersActions";

class AllUsers extends Component {
  componentWillMount() {
    this.props.getAllUsers();
  }
  deleteUser(Id) {
    axios.delete(`/blood-donor/user/${Id}`);
  }
  render() {
    let id = 0;
    let { users } = this.props;
    return (
      <div className="container">
        <table className="table table-borderless text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Blood Group</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{++id}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.phone}</td>
                <td>{user.bloodGroup}</td>
                <td>
                  <button className="btn btn-danger">REMOVE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapToState = (state) => ({
  users: state.users,
});

export default connect(mapToState, { getAllUsers })(AllUsers);
