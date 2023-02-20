import React from "react";
import "./Landing.scss";
import logo from "../assets/dister-logo.png";

import Hero from "../components/landing/Hero/Hero";
import Featured from "../components/landing/Featured/Featured";
import Offers from "../components/landing/Offers/Offers";
import Learn from "../components/landing/Learn/Learn";

function Landing() {
  return (
    <div className="landing-holder">
      <nav className="landing-nav">
        <img
          className="landing-logo-main"
          src={logo}
          alt="dister landing page main logo"
          srcSet=""
        />
      </nav>
      <div className="landing-container">
        <Hero />
        <Featured />
        <Offers />
        <Learn />
      </div>
    </div>
  );
}

export default Landing;
