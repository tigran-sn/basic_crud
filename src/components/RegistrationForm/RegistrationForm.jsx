import React, { Component } from "react";
import Button from "../Button";
import Modal from "../../UI/Modal";

import classes from "./RegistrationForm.module.css";

import { checkPassword, validateEmail, checkForm } from "../../helpers";

class RegistrationForm extends Component {
  state = {
    modalIsOpen: false,
    errorMessage: "",
    formData: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  };
  myRef = React.createRef();
  formRef = React.createRef();
  componentDidMount() {
    this.myRef.current.focus();
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
    if (
      //   validateEmail(email) &&
      //   password.length > 8 &&
      //   confirmPassword.length > 8 &&
      //   password === confirmPassword

      // checkForm(this.formRef.current)

      email.length > 3
    ) {
      const newUser = fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // email: "eve.holt@reqres.in",
          // password: "pistol"
          email: this.state.formData.email,
          password: this.state.formData.password
        })
      });
      newUser
        .then(response => {
          return response.json();
        })
        .then(data => {
          // debugger;
          if (data.token) {
            console.log(data);
            localStorage.setItem("token", `Bearer ${data.token}`);
            this.setState({ modalIsOpen: true });
            setTimeout(() => this.setState({ modalIsOpen: false }), 2500);
          } else {
            return data;
          }
        })
        .then(data => {
          console.log(data.error);
        })
        .catch(error => {
          // alert();
          console.log(error);
        });
    } else {
      alert("Error");
    }
  };
  render() {
    return (
      <div className={classes.RegistrationForm}>
        {this.state.modalIsOpen ? (
          <Modal
            message="Congradulations! You've successfully registered."
            type="Success"
            onBackdropClick={this.handlerBackdropClick}
          />
        ) : null}
        <form action="" ref={this.formRef} onSubmit={this.registrationHandler}>
          <fieldset>
            <legend>Registration</legend>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
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
