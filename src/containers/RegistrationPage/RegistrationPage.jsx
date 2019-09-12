import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm";
import { Link } from "react-router-dom";
import classes from "./RegistrationPage.module.css";

class RegistrationPage extends Component {
  render() {
    return (
      <div className={classes.RegistrationPage}>
        <RegistrationForm />
        <p>
          Have an account?
          <Link to="/login">Sign In</Link>
        </p>
      </div>
    );
  }
}

export default RegistrationPage;
