import React from "react";
import OfferCard from "./OfferCard";
import "./Offers.scss";

function Offers() {
  return (
    // create offers container with 3 cols, 2 rows, use tailwindcss, make it responsive
    <div className="offers-container">
      <div className="container mx-auto px-4">
        <h2 className="section-header text-4xl font-bold dark:text-white mb-4">
          Top
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600">
            {" "}
            Offers
          </span>
        </h2>
        {/* <div className="offers-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        {/* on 768px width have 2 cols */}
        {/* 4 cols on bigger screens 3 on medium and so on */}
        {/* <div className="offers-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        <div className="offers-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
      </div>
    </div>
  );
}

export default Offers;
