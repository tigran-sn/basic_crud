import React from "react";
import Backdrop from "../Backdrop";
import classes from "./Modal.module.css";

const Modal = props => (
  <>
    <div className={[classes.Modal, classes[props.type]].join(" ")}>
      {props.children}
      <button onClick={props.onBackdropClick}>&times;</button>
    </div>
    <Backdrop clicked={props.onBackdropClick} />
  </>
);

export default Modal;
