import React from "react";
import "./Offers.scss";
import thumbnail from "../../../assets/thumbnail.png";
import profilePic from "../../../assets/hey.jpeg";

function OfferItem() {
  return (
    <div className="offer-item">
      <img src={thumbnail} alt="" className="offer-img" />
      <div className="offer-item-content">
        <h3 className="offer-item-header">
          Ethereum erc-20 token and Solidity Development
        </h3>

        <div className="seller-profile">
          <img
            src={profilePic}
            alt="hubaferencz profile pic"
            className="profile-pic"
          />

          <span>@hubaferencz</span>
        </div>

        <div className="contact-button">continue</div>
      </div>
    </div>
  );
}

export default OfferItem;
