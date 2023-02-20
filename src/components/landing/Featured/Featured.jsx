import React from "react";
import "./Featured.scss";

import profileImg from "../../../assets/profile-img.png";
import discord from "../../../assets/socials/discord.png";
import github from "../../../assets/socials/github.png";
import twitter from "../../../assets/socials/twitter.png";

import FeaturedItem from "./FeaturedItem";
import SectionTitle from "../common/SectionTitle";

function Featured() {
  const featuredItems = [
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
    {
      seller: "Satoshi Nakamoto",
      img: profileImg,
      occupation: "Software Engineer",
    },
  ];

  return (
    <div className="featured-section">
      {/* section title */}
      {/* <div className="section-title">
        <div className="flex items-center">
          <h2 className="dark:text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600 ">
              Sellers
            </span>
          </h2>
          <img src={arrow} alt="section divider arrow" />
        </div>
      </div> */}
      <SectionTitle first="Featured" second="Sellers" />

      {/* <div className="sellers-container"> */}
      <div className="grid grid-cols-3 sellers-container">
        {/* map through the featured items */}

        {featuredItems.map((item) => (
          <FeaturedItem
            key={item.seller + item.occupation}
            seller={item.seller}
            img={item.img}
            occupation={item.occupation}
          />
        ))}
      </div>
      {/* </div> */}
      <div className="socials-container">
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
  );
}

export default Featured;
