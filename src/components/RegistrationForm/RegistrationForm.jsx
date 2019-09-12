import React, { Component } from "react";
import Button from "../Button";
import classes from "./RegistrationForm.module.css";

class RegistrationForm extends Component {
  myRef = React.createRef();
  componentDidMount() {
    this.myRef.current.focus();
  }
  render() {
    return (
      <div className={classes.RegistrationForm}>
        <form action="">
          <fieldset>
            <legend>Registration</legend>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" ref={this.myRef} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" />
            </div>
            <Button label="Register" type="Success" />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default RegistrationForm;
