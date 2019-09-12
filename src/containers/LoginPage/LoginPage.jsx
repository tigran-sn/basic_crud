import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import classes from "./LoginPage.module.css";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <div className={classes.LoginPage}>
        <LoginForm />
        <p>
          Don't have an account?
          <Link to="/registration">Sign Up</Link>
        </p>
      </div>
    );
  }
}
export default LoginPage;
