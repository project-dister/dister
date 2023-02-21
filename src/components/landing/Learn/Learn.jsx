import React from "react";
import "./Learn.scss";
import learnIllustration from "../../../assets/learn-illustration.png";

import ActionButton from "../common/ActionButton";

function Learn() {
  // return a responsive grid with 2 columns using tailwindcss classnames
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 learn-section">
      <div className="learn-section-right">
        <img
          className="learn-section-image"
          src={learnIllustration}
          alt="dister learn section illustration"
        />
      </div>
      <div className="learn-section-left">
        <h1 className="text-4xl font-extrabold dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600">
            {" "}
            Need
          </span>{" "}
          Guidance
        </h1>
        <p className="text-lg font-medium text-gray-200 dark:text-gray-200">
          If you are new to the web3 space we have some tutorials for you where
          we explain some basic concepts and how to use Dister!
        </p>

        <p className="text-lg font-medium text-gray-200 dark:text-gray-200">
          We aim to create a fair and transparent platform where everyone
          benefits.
        </p>

        {/* create sign up single button*/}
        <ActionButton text="Sign Up" link="http://eepurl.com/ilfhBv" />
      </div>
      
    </div>
  );
}

export default Learn;
