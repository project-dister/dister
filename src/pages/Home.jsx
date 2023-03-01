import React from "react";
import "./Home.scss";
import HomeNavbar from "../components/common/HomeNavbar";

import Categories from "../components/categories/Categories";

function Home() {
  return (
    <div className="home-container">
      <HomeNavbar />
      <Categories />
    </div>
  );
}

export default Home;
