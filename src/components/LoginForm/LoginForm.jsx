import React, { Component } from "react";
import classes from "./LoginForm.module.css";
import Button from "../Button";

class LoginForm extends Component {
  myRef = React.createRef();
  componentDidMount() {
    this.myRef.current.focus();
  }
  render() {
    return (
      <div className={classes.LoginForm}>
        <form action="">
          <fieldset>
            <legend>Login</legend>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" ref={this.myRef} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <Button label="Login" type="Success" />
          </fieldset>
        </form>
      </div>
    );
  }
}
export default LoginForm;
