import React, { Component } from "react";
import classes from "./LoginForm.module.css";
import Button from "../Button";
import { checkPassword, validateEmail } from "../../helpers";

class LoginForm extends Component {
  myRef = React.createRef();
  state = {
    formData: {
      email: "",
      password: ""
    }
  };
  componentDidMount() {
    this.myRef.current.focus();
  }
  loginHandler = event => {
    event.preventDefault();
    debugger;
    const { email, password } = this.state.formData;
    if (validateEmail(email) && checkPassword(password)) {
      const loginUserData = fetch("https://reqres.in/api/login", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      loginUserData
        .then(response => response.json())
        .then(data => console.log(data));
    }
  };
  handleChange = event => {
    const clonedFormData = { ...this.state.formData };
    this.setState({
      formData: {
        ...clonedFormData,
        [event.target.name]: event.target.value
      }
    });
  };
  render() {
    return (
      <div className={classes.LoginForm}>
        <div>
          <h5>
            <pre>Email: michael.lawson@reqres.in</pre>
          </h5>
          <h5>
            <pre>Password: aA##ds548</pre>
          </h5>
        </div>
        <form onSubmit={this.loginHandler}>
          <fieldset>
            <legend>Login</legend>
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
            <Button label="Login" type="Success" />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default LoginForm;
