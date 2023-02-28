import React from "react";
import "./Home.scss";
// import the logo
import DisterLogoBig from "../assets/dister-logo.png";
import SearchGradientIcon from "../assets/search-gradient.png";
// import Link

function Home() {
  return (
    <div className="home-container">
      <nav className="home-navigation">
        <img
          src={DisterLogoBig}
          alt="Dister Main Big Logo"
          className="nav-logo-big"
          srcSet=""
        />

        {/* search box */}
        <div className="search-box">
          <img
            src={SearchGradientIcon}
            alt="Gradient Search Icon in Dister's Navbar"
            className="search-icon"
          />
          <input type="text" placeholder="Search offers" />
        </div>
        <a href="/dashboard" className="dashboard-button">
          Dashboard
        </a>
      </nav>
    </div>
  );
}

export default Home;
