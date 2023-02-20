import React from "react";
import "./SectionTitle.scss";

import arrow from "../../../assets/arrow.png";

function SectionTitle(props) {
  return (
    <div className="section-title">
      <div className="flex items-center">
        <h2 className="dark:text-white">
          {props.first}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600 ">
            {props.second}
          </span>
        </h2>
        <img src={arrow} alt="section divider arrow" />
      </div>
    </div>
  );
}

export default SectionTitle;
