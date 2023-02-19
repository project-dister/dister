import React from "react";
import "./Landing.scss";
import logo from "../assets/dister-logo.png";

import HeroSection from "../components/landing/Hero";
import Featured from "../components/landing/Featured";

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
        <HeroSection/>
        <Featured/>
      </div>
    </div>
  );
}

export default Landing;
