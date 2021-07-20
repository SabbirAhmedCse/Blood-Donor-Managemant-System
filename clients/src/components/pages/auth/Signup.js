<<<<<<< HEAD
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Input from './Input'

export default class Signup extends Component {
    state = {

    }


    submitHandler = (event) => {
        event.preventDefault()
    }



    render() {
        return (
            <div className="container">
                <label>Email</label>
                <Input />
                <label>Password:</label>
                <Input />
                <label>Confirm Password:</label>
                <Input />
                
                <label>First Name:</label>
                <Input/>
                <label>Last Name:</label>
                <Input></Input>
                <label>Blood Group:</label>
                <Input></Input>
                <label>Address:</label>
                <Input></Input>
                <label>Name:</label>
                <Input></Input>
                <label>Name:</label>
                <Input></Input>
                <div>You have already account?<Link to="/signin">Signin</Link></div>
            </div>
        )
    }
}
=======
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../../store/actions/authAction";

class Signup extends Component {
  state = {
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    bloodGroup: "",
    error: {},
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)
    ) {
      return {
        error: nextProps.auth.error,
      };
    }

    return null;
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.phone.length);
  };
  submitHandler = (event) => {
    event.preventDefault();
    let {
      phone,
      password,
      confirmPassword,
      firstName,
      lastName,
      bloodGroup,
      dob,
      district,
      upazila,
    } = this.state;
    this.props.signUp(
      {
        phone,
        password,
        confirmPassword,
        firstName,
        lastName,
        bloodGroup,
        dob,
        district,
        upazila,
      },
      this.props.history
    );
    console.log(this.props);
  };

  render() {
    let {
      phone,
      password,
      confirmPassword,
      firstName,
      lastName,
      bloodGroup,
      dob,
      district,
      upazila,
      error,
    } = this.state;

    return (
      <div className="card col-xl-4 col-md-6 col-sm-11 my-4 m-auto">
        <div className="card-body  ">
          <h3 className="text-center my-2">Become A Donor!</h3>
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number:
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className={
                  error.phone || error.massage
                    ? "form-control is-invalid"
                    : "form-control"
                }
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{error.phone}</div>
              <div className="invalid-feedback">{error.massage}</div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                className={
                  error.password ? "form-control is-invalid" : "form-control"
                }
                placeholder="Enter Your Password"
                value={password}
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{error.password}</div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className={
                  error.confirmPassword
                    ? "form-control is-invalid"
                    : "form-control"
                }
                placeholder="Enter Your Confirm Password"
                value={confirmPassword}
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{error.confirmPassword}</div>
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className={
                  error.firstName ? "form-control is-invalid" : "form-control"
                }
                placeholder="Enter Your First Name"
                value={firstName}
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{error.firstName}</div>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className={
                  error.lastName ? "form-control is-invalid" : "form-control"
                }
                placeholder="Enter Your Last Name"
                value={lastName}
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{error.lastName}</div>
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                id="dob"
                className={
                  error.dob ? "form-control is-invalid" : "form-control"
                }
                value={dob}
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{error.dob}</div>
            </div>

            <div>
              <label>Blood Group:</label>
              <select
                name="bloodGroup"
                className={
                  error.bloodGroup ? "form-control is-invalid" : "form-control"
                }
                id="bloodGroup"
                value={bloodGroup}
                onChange={this.changeHandler}
              >
                <option>--Select--</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
              <div className="invalid-feedback">{error.bloodGroup}</div>
            </div>

            <div className="form-group">
              <label>District:</label>
              <input
                type="text"
                id="district"
                placeholder="Enter Your District"
                name="district"
                className={
                  error.district ? "form-control is-invalid" : "form-control"
                }
                value={district}
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{error.district}</div>
            </div>

            <div className="form-group">
              <label htmlFor="upazila">Upazila:</label>
              <input
                type="text"
                name="upazila"
                id="upazila"
                className={
                  error.upazila ? "form-control is-invalid" : "form-control"
                }
                placeholder="Enter Your Upazila"
                value={upazila}
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{error.upazila}</div>
            </div>

            <div>
              <Link to="/signin">You have already account? Signin</Link>
            </div>
            <div>
              <button className="btn my-3 btn-success">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signUp })(Signup);
>>>>>>> 931daff (BDMS Update)
