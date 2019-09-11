import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm";
import classes from "./RegistrationPage.module.css";

class RegistrationPage extends Component {
  render() {
    return (
      <div className={classes.RegistrationPage}>
        <RegistrationForm />
      </div>
    );
  }
}

export default RegistrationPage;
