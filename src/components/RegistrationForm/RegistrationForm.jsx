import React, { Component } from "react";
import Button from "../Button";
import classes from "./RegistrationForm.module.css";

import { checkPassword, validateEmail, checkForm } from "../../helpers";

class RegistrationForm extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: ""
  };
  myRef = React.createRef();
  formRef = React.createRef();
  componentDidMount() {
    this.myRef.current.focus();
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  registrationHandler = event => {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state;
    // debugger;
    console.log(validateEmail(email));
    if (
      //   validateEmail(email) &&
      //   email.length > 3 &&
      //   password.length > 8 &&
      //   confirmPassword.length > 8 &&
      //   password === confirmPassword
      checkForm(this.formRef.current)
    ) {
      alert("Success");
    } else {
      alert("Error");
    }
  };
  render() {
    return (
      <div className={classes.RegistrationForm}>
        <form action="" ref={this.formRef} onSubmit={this.registrationHandler}>
          <fieldset>
            <legend>Registration</legend>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                ref={this.myRef}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={this.handleChange}
              />
            </div>
            <Button label="Register" type="Success" />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default RegistrationForm;
