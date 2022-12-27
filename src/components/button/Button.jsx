import React from "react";
import classNames from "classnames";
import "./Button.css";

function Button(props) {
  const classes = classNames("button", props.className);
  return (
    <button className={classes} type="button">
      {props.text}
    </button>
  );
}

export default Button;
