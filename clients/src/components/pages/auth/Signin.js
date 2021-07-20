<<<<<<< HEAD
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Input from './Input'
export default class Signin extends Component {
    state = {
        email: '',
        Password:''
    }



    render() {
        return (
            <div>
                <label>Email</label>
                <Input></Input>
                <label>Password</label>
                <Input></Input>
                <div>You have don't account?<Link to="/signup">Sign Up</Link></div>
            </div>
        )
    }
}
=======
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/authAction";

class Signin extends Component {
  state = {
    phone: "",
    password: "",
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
    let { phone, password } = this.state;
    this.props.signIn(
      {
        phone,
        password,
      },
      this.props.history
    );
  };

  render() {
    let { phone, password, error } = this.state;
    return (
      <div className="card mt-4 col-md-4 m-auto">
        <div className="card-body">
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className={
                  error.phone ? "form-control is-invalid" : "form-control"
                }
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{error.phone}</div>
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
                placeholder="Enter Your Email"
                value={password}
                onChange={this.changeHandler}
              />
              <div className="invalid-feedback">{error.password}</div>
            </div>

            <div className="form-label">
              <Link to="/signup">You have already account? Sign up</Link>
            </div>

            <div>
              <button className="btn my-3 btn-success">Sign in</button>
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
export default connect(mapStateToProps, { signIn })(Signin);
>>>>>>> 931daff (BDMS Update)
