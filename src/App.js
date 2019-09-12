import React, { Component } from "react";
import Layout from "./containers/Layout";
import LoginPage from "./containers/LoginPage";
import RegistrationPage from "./containers/RegistrationPage";
import Page404 from "./components/Page404";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import classes from "./App.module.css";

class App extends Component {
  state = {
    isLoginPage: true
  };
  pageLinkHandler = () => {};
  render() {
    let pageSuggestion;
    if (this.state.isLoginPage) {
      pageSuggestion = <Link to="/login">Login</Link>;
    } else {
      pageSuggestion = <Link to="/registration">Regitration</Link>;
    }
    return (
      <Router>
        <div className={classes.App}>
          <Layout>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/registration" component={RegistrationPage} />
              <Route component={Page404} />
            </Switch>
            {/* <LoginPage /> */}
            {/* <RegistrationPage /> */}
            {/* <Link to="/">Login</Link>
            <Link to="/registration">Regitration</Link> */}
            {/* {pageSuggestion} */}
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
