import React from "react";
import "./Featured.scss";

import arrow from "../../assets/arrow.png";
import profileImg from "../../assets/profile-img.png";
import discord from "../../assets/socials/discord.png";
import github from "../../assets/socials/github.png";
import twitter from "../../assets/socials/twitter.png";

import FeaturedItem from "./FeaturedItem";

function Featured() {
  const featuredItems = [
    {
      seller: "Huba ferencz",
      img: profileImg,
      occupation: "Web3 Developer",
    },
    {
      seller: "Elon Musk",
      img: profileImg,
      occupation: "3D Designer",
    },
    {
      seller: "Steve Jobs",
      img: profileImg,
      occupation: "Animator",
    },
  ];

  return (
    <div className="featured-section">
      {/* section title */}
      <div className="section-title">
        <div className="flex items-center">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600 ">
            Featured Sellers
          </h2>
          <img src={arrow} alt="section divider arrow" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* map through the featured items */}
        {featuredItems.map((item) => (
          <FeaturedItem
          key={item.seller+item.occupation}
            seller={item.seller}
            img={item.img}
            occupation={item.occupation}
          />
        ))}

        <div className="socials-container">
          {/* vertically stack socials using tailwindcss */}
          <div className="flex flex-col items-center socials-box">
            <a href="https://twitter.com/">
              <img src={twitter} alt="dister twitter profile" srcSet="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={discord} alt="dister discord channel" srcSet="" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={github} alt="dister github page" srcSet="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
