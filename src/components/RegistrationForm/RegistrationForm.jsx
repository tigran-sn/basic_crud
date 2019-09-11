import React, { Component } from "react";
import Button from "../Button";
import classes from "./RegistrationForm.module.css";

class RegistrationForm extends Component {
  render() {
    return (
      <div className={classes.RegistrationForm}>
        <form action="">
          <fieldset>
            <legend>Registration</legend>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" />
            </div>
            <Button label="Login" type="Success" />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default RegistrationForm;
