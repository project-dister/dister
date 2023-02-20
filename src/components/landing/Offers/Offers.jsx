import React from "react";
import "./Offers.scss";
import offersIllustration from "../../../assets/offers-illustration.png";

import ActionButton from "../common/ActionButton";
import SectionTitle from "../common/SectionTitle";

import OfferItem from "./OfferItem";

function Offers() {
  // return a responsive grid with 2 columns using tailwindcss classnames
  return (
    <div className="offer-section-container">
      <SectionTitle first="about" second="offers" />
      <div className="grid grid-cols-1 xl:grid-cols-2 offers-section">
        <div className="offers-section-left">
          <h1 className="text-4xl font-extrabold dark:text-white">
            Offers Made
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600">
              {" "}
              Easy
            </span>
          </h1>
          <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
            Send a message to the seller explaining your needs, and they will
            create a custom offer that meets your requirements.
          </p>
          <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
            It's a simple and easy process that guarantees you get the precise
            service you desire.
          </p>

          {/* create sign up single button*/}
          <ActionButton text="Sign Up" link="/signup" />
        </div>

        <div className="offers-section-right">
          {/* <img
            className="offers-section-image"
            src={offersIllustration}
            alt="dister offers section illustration"
          /> */}

          <div className="flex flex-col">
            <OfferItem />
            <OfferItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
