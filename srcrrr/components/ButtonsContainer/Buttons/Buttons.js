import "../../../App.css";
import React from "react";

const Buttons = (props) => {
  return (
    <button className="Button" onClick={props.click}>
      {props.value}
    </button>
  );
};

export default Buttons;
