import React, { Component } from "react";
import Layout from "./containers/Layout";
import LoginPage from "./containers/LoginPage";
import RegistrationPage from "./containers/RegistrationPage";
import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <LoginPage />
          <RegistrationPage />
        </Layout>
      </div>
    );
  }
}

export default App;
