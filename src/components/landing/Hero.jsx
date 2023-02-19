import React from "react";
import "./Hero.scss";
import heroIllustration from "../../assets/hero-illustration.png";

import ActionButton from "./common/ActionButton";

function Hero() {
  // return a responsive grid with 2 columns using tailwindcss classnames
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 hero-section">
      <div className="hero-section-left">
        <h1 className="text-4xl font-extrabold dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600">
            {" "}
            Web3
          </span>{" "}
          Freelance Marketplace
        </h1>
        <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
          Dister is a decentralized freelance marketplace that allows you to
          hire and get hired for your projects.
        </p>

        {/* create sign up single button*/}
        <ActionButton text="Sign Up" link="/signup" />
        
      </div>
      <div className="hero-section-right">
        <img
          className="hero-section-image"
          src={heroIllustration}
          alt="dister hero section illustration"
        />
      </div>
    </div>
  );
}

export default Hero;
