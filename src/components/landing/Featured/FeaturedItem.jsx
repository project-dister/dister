import React from "react";
import "./FeaturedItem.scss";
import base from "../../../assets/base-gradient.png";
import star from "../../../assets/star.png";

function FeaturedItem(props) {
  return (
    <div className="item-container">
      <div className="images-box">
        <img src={base} alt="" className="base-gradient" />
        <img src={props.img} alt="" className="profile-img" />
      </div>
      <div className="info-box">
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600 ">
            {props.seller}
        </h3>
        <p>{props.occupation}</p>
      </div>

      <div className="rating-box">
        {/* fix in one line tailwind */}
        <div className="flex items-center">
          <p className="text-gray-400">5.0</p>
          <img src={star} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedItem;
