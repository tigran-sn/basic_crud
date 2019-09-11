import React from "react";
import classes from "./LoginForm.module.css";
import Button from "../Button";

const LoginForm = props => (
  <div className={classes.LoginForm}>
    <form action="">
      <fieldset>
        <legend>Login</legend>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
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
export default LoginForm;
