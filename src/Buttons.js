import React from "react";
import "./App.css";

const Button = (props) => (
  <div onClick={props.clickEv} className={props.className}>
    {props.btn}
  </div>
);

export default Button;
