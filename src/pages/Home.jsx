import React from "react";
import "./Home.scss";
import HomeNavbar from "../components/common/HomeNavbar";
import Categories from "../components/categories/Categories";
import Offers from "../components/offers/Offers";

function Home() {
  return (
    <div className="home-container">
      <HomeNavbar />
      <Categories />
      <Offers />
    </div>
  );
}

export default Home;
