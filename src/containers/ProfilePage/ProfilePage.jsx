import React, { Component } from "react";
import UserProfile from "../../components/UserProfile";
import classes from "./ProfilePage.module.css";

class ProfilePage extends Component {
  state = {
    data: {}
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      const userData = fetch(
        `https://reqres.in/api/users/${this.props.match.params.id}`
      );
      userData
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ data });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.props.history.push("/login");
    }
  }
  logOutHandler = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className={classes.ProfilePage}>
        <UserProfile {...this.state.data} />
        <button className={classes.LogOut} onClick={this.logOutHandler}>
          Log Out
        </button>
      </div>
    );
  }
}

export default ProfilePage;
