import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm";
import { Link } from "react-router-dom";
import classes from "./RegistrationPage.module.css";

class RegistrationPage extends Component {
  componentDidMount() {
    // const { match } = this.props;
    // console.log(match);
  }
  render() {
    return (
      <div className={classes.RegistrationPage}>
        <RegistrationForm routeData={this.props} />
        <p>
          Have an account?
          <Link to="/login">Sign In</Link>
        </p>
      </div>
    );
  }
}

export default RegistrationPage;
