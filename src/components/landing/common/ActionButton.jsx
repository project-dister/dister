import React from "react";
import "./ActionButton.scss";

function ActionButton(props) {
  return (
    <button className="btn btn-primary btn-lg dark:text-white bg-gradient-to-r to-orange-400 from-orange-600 hero-btn">
      <a href={props.link}>{props.text}</a>
    </button>
  );
}

export default ActionButton;
