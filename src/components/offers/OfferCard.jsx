import React from "react";
import "./OfferCard.scss";

function OfferCard() {
  return (
    // div
    <div className="offer-card">
      {/* image */}
      <div className="offer-card-thumbnail-container">
        <div className="offer-card-thumbnail">
          <img
            src="https://wallpaperaccess.com/full/1183596.jpg"
            alt="offer"
          />
        </div>
        <div className="offer-card-image-profile-pic">
          <img
            src="https://pbs.twimg.com/profile_images/1630523786129727489/b4wH0hX3_400x400.jpg"
            alt="offer"
          />
        </div>
      </div>
      <div className="offer-card-title">
        <h3>Ethereum token (erc-20 token)...</h3>
      </div>

      {/* info */}
      <div className="offer-card-info">
        <div className="offer-card-created-by">
          <p>
            by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600">
              @hubaferencz
            </span>
          </p>
        </div>

        {/* ratings */}
        <div className="offer-card-ratings">
          <div className="offer-card-ratings-stars">
            <i className="fas fa-star text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600"></i>
            {/* star value, star number */}
            <span className="offer-card-ratings-stars-value text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600">
              4.5
            </span>
            <span className="offer-card-ratings-stars-number">(5)</span>
          </div>
        </div>
      </div>

      {/* create divider line */}
      <div className="offer-card-divider"></div>

      {/* order starts at price, delivery time */}
      <div className="offer-card-order">
        {/* create "starts at" p tag*/}

        <p className="offer-card-order-starts-at">Starts at</p>

        {/* create container for everything below */}
        <div className="offer-card-order-container">
          {/* create a box with a dollar icon and the price */}
          <div className="offer-card-order-price-box">
            <i className="fas fa-dollar-sign text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600"></i>
            <span className="offer-card-order-price-box-value">99.99</span>
          </div>

          {/* create a box with a clock icon and the delivery time */}
          <div className="offer-card-order-delivery-time-box">
            <i className="fa-regular fa-clock text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600"></i>
            <span className="offer-card-order-delivery-time-box-value">
              1 day
            </span>
          </div>

          {/* right gradient arrow */}
          <div className="offer-card-order-right-arrow">
            <i className="fa-solid fa-arrow-right-long text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
