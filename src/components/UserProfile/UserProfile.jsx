import React from "react";
import classes from "./UserProfile.module.css";

const UserProfile = props => {
  let user;
  if (props.data) {
    user = (
      <>
        <img
          src={props.data.avatar}
          alt={`${props.data.first_name} ${props.data.last_name}'s avatar`}
        />
        <div>
          <h1>{`${props.data.first_name} ${props.data.last_name}`}</h1>
          <code>{props.data.email}</code>
        </div>
      </>
    );
  }
  return (
    <div className={classes.UserProfile}>
      {/* {console.log("data", props.data)} */}
      {user}
    </div>
  );
};

export default UserProfile;
