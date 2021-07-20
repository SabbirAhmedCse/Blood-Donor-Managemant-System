import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "../about/About"
import Contact from "../contact/Contact";
import Signup from "../auth/Signup";
import Signin from "../auth/Signin";

export default function Header() {
  return (
    <Router>
      <div className="container ">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import Home from "./Home";
import About from "../about/About";
import Admin from "../admin/Admin";
import Contact from "../contact/Contact";
import Signup from "../auth/Signup";
import Signin from "../auth/Signin";
import User from "../user/User";
import userProfile from "../user/userProfile";
import PasswordChange from "../user/PasswordChange";
import UserUpdateProfile from "../user/UserUpdateProfile";
import Navbar from "./Navbar";

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className=" navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/admin">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/changepassword">
                  Change Password
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/signout">
                  Sign Out
                </Link>
              </li>
            </ul>
          </nav> */}
          <Navbar></Navbar>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/update" component={UserUpdateProfile} />
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/signin" component={Signin} />

            <Route exact path="/change-password" component={PasswordChange} />
            <Route exact path="/profile" component={userProfile} />
            <Route exact path="/user/:userId" component={User} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
>>>>>>> 931daff (BDMS Update)
