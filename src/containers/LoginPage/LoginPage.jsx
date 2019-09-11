import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import classes from "./LoginPage.module.css";

class LoginPage extends Component {
  render() {
    return (
      <div className={classes.LoginPage}>
        <LoginForm />
      </div>
    );
  }
}
export default LoginPage;
