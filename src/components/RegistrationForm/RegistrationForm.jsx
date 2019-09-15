import React, { Component } from "react";
import Button from "../Button";
import Modal from "../../UI/Modal";
import { Route, Redirect } from "react-router-dom";
import successIcon from "../../assets/icons/success.svg";

import classes from "./RegistrationForm.module.css";

import { checkPassword, validateEmail } from "../../helpers";

class RegistrationForm extends Component {
  state = {
    modalIsOpen: false,
    errorMessage: "",
    dataFromServer: {},
    formData: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  };
  emptyFormData = this.state.formData;
  myRef = React.createRef();
  formRef = React.createRef();
  componentDidMount() {
    this.myRef.current.focus();
    // const { match } = this.props;
    // console.log(this.props.routeData);
  }
  handleChange = event => {
    const clonedFormData = { ...this.state.formData };
    this.setState({
      formData: {
        ...clonedFormData,
        [event.target.name]: event.target.value
      }
    });
  };
  handlerBackdropClick = () => {
    this.setState({ modalIsOpen: false });
  };
  registrationHandler = event => {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state.formData;
    const { history, location, match } = this.props.routeData;
    // debugger;
    if (
      validateEmail(email) &&
      checkPassword(password) &&
      password === confirmPassword

      // checkForm(this.formRef.current)

      //   email.length > 3
    ) {
      const newUser = fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.formData.email,
          password: this.state.formData.password
        })
      });
      newUser
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ dataFromServer: data });
          if (data.token) {
            localStorage.setItem("token", `Bearer ${data.token}`);

            this.setState({ modalIsOpen: true }, () =>
              setTimeout(() => {
                this.setState({ modalIsOpen: false });
                history.push(`/profile/${data.id}`);
              }, 2500)
            );
          }
        })
        .catch(error => {
          console.log("Inside 'catch'", error);
        });
    } else {
      alert("Error");
    }
  };
  render() {
    const registrationForm = (
      <form ref={this.formRef} onSubmit={this.registrationHandler}>
        <fieldset>
          <legend>Registration</legend>
          <div className={classes.RegistrationForm__row}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              ref={this.myRef}
              onChange={this.handleChange}
            />
          </div>
          <div className={classes.RegistrationForm__row}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className={classes.RegistrationForm__row}>
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
    );
    return (
      <div className={classes.RegistrationForm}>
        {this.state.modalIsOpen ? (
          <Modal type="Success" onBackdropClick={this.handlerBackdropClick}>
            <img src={successIcon} alt="Modal Success Icon" />
            <h2>Congratulations!</h2>
            <h4>You've successfully registered.</h4>
          </Modal>
        ) : null}
        <div>
          <h5>
            <pre>Email: michael.lawson@reqres.in</pre>
          </h5>
          <h5>
            <pre>Password: aA##ds548</pre>
          </h5>
        </div>
        {registrationForm}
        {this.state.dataFromServer.error ? (
          <div className={classes.errorBox}>
            {this.state.dataFromServer.error}
          </div>
        ) : null}
      </div>
    );
  }
}
export default RegistrationForm;
