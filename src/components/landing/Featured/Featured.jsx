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
      <SectionTitle first="Featured" second="Sellers" />

      <div className="grid grid-cols-3 sellers-container">
        {featuredItems.map((item) => (
          <FeaturedItem
            key={item.seller + item.occupation}
            seller={item.seller}
            img={item.img}
            occupation={item.occupation}
          />
        ))}
      </div>
      <div className="socials-container">
        <div className="flex flex-col items-center socials-box">
          <a href="https://twitter.com/projectDister">
            <img
              src={twitter}
              alt="dister twitter profile"
              srcSet=""
              target="_blank"
            />
          </a>
          <a href="https://discord.gg/qAWarXxrP2">
            <img
              src={discord}
              alt="dister discord channel"
              srcSet=""
              target="_blank"
            />
          </a>
          <a href="https://github.com/project-dister">
            <img
              src={github}
              alt="dister github page"
              srcSet=""
              target="_blank"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Featured;
