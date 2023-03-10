import React from "react";
import "./Offer.scss";

import rightArrow from "./../assets/right-arrow.png";
// import all the social icons
import twitter from "./../assets/socials/user-socials/twitter.png";
import linkedin from "./../assets/socials/user-socials/linkedin.png";
import google from "./../assets/socials/user-socials/google.png";
// github
import github from "./../assets/socials/user-socials/github.png";
// dribbble
import dribbble from "./../assets/socials/user-socials/dribbble.png";

const Productpage = (props) => {
  return (
    <>
      <div>
        <div className="productpage-productpage">
          <div className="productpage-offerpageuserprofilecontainer">
            <div className="productpage-needhelp">
              <div className="productpage-helpvideolink">
                <span className="productpage-text">
                  <span>How it works</span>
                </span>
                <img
                  src="/playground_assets/playicon8295-8q6k-200h.png"
                  alt="playicon8295"
                  className="productpage-playicon"
                />
              </div>
              <span className="productpage-text02">
                <span>Need help?</span>
              </span>
            </div>
            <div className="productpage-usercard">
              {/* <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a41da323-1d97-4bc3-ba60-3a560509f4c1/714a2ad7-fe17-45df-b3f0-f2bde5229417?org_if_sml=12428"
                alt="usercardbg5785"
                className="productpage-usercardbg"
              /> */}
              <div className="productpage-usercardbg"></div>

              <div className="productpage-rightshape"></div>

              <img
                src="https://pbs.twimg.com/profile_images/1630523786129727489/b4wH0hX3_400x400.jpg"
                alt="profilepic5785"
                className="productpage-profilepic"
              />

              <div className="productpage-leftshape"></div>

              <div className="productpage-usernameoccupation">
                <span className="username">
                  <span>@HubaFerencz</span>
                </span>
                <span className="occupation">
                  <span>Web3 Developer</span>
                </span>
              </div>

              <div className="productpage-socials">
                <img src={twitter} alt="twitter5986" className="socials-icon" />
                <img
                  src={linkedin}
                  alt="linkedin5986"
                  className="socials-icon"
                />
                <img
                  src={dribbble}
                  alt="dribbble8297"
                  className="socials-icon"
                />
                <img src={github} alt="github5986" className="socials-icon" />
              </div>

              <button className="productpage-contactbtn">Send a message</button>
            </div>
          </div>
          <div className="productpage-offerpageoffercontainer">
            <div className="productpage-startsat">
              <div className="productpage-infocard">
                <div className="productpage-cardinfo">
                  <span className="productpage-text10">
                    <span>99.99</span>
                  </span>
                  <img
                    src="/playground_assets/dollar18094-gp2-200h.png"
                    alt="dollar18094"
                    className="productpage-dollar1"
                  />
                </div>
              </div>
              <div className="productpage-infocard1">
                <div className="productpage-cardinfo1">
                  <span className="productpage-text12">
                    <span>2 days</span>
                  </span>
                  <img
                    src="/playground_assets/calendar18095-3ve-200w.png"
                    alt="calendar18095"
                    className="productpage-calendar1"
                  />
                </div>
              </div>
              <span className="productpage-text14">
                <span>starts at</span>
              </span>
            </div>
            <span className="productpage-text16">
              <span>
                Dear [Manager], I am excited to apply for this Frontend
                Developer position. As an experienced front-end developer with a
                passion for quality and a deep understanding of JavaScript,
                HTML5, CSS3, React, and TypeScript, I am confident that I would
                be an excellent fit for this role. I have over three ye
              </span>
            </span>
            <span className="productpage-text18">
              <span>About the offer</span>
            </span>
            <img
              src="/playground_assets/separator8093-ewjr.svg"
              alt="separator8093"
              className="productpage-separator"
            />
            <div className="productpage-rating">
              <div className="productpage-offerpageratings">
                <div className="productpage-rating1">
                  <span className="productpage-text20">
                    <span>(1000+)</span>
                  </span>
                </div>
                <div className="productpage-rating2">
                  <span className="productpage-text22">
                    <span>5.0</span>
                  </span>
                  <img
                    src="/playground_assets/star18296-li6-200h.png"
                    alt="star18296"
                    className="productpage-star1"
                  />
                </div>
              </div>
            </div>
            <span className="productpage-text24">
              <span>
                Erc-20 token on the Ethereum network custom made for you
              </span>
            </span>
            <div className="productpage-offerpagesearchtags">
              <div className="productpage-searchtag">
                <span className="productpage-text26">
                  <span>React.js</span>
                </span>
              </div>
              <div className="productpage-searchtag1">
                <span className="productpage-text28">
                  <span>React.js</span>
                </span>
              </div>
              <div className="productpage-searchtag2">
                <span className="productpage-text30">
                  <span>React.js</span>
                </span>
              </div>
              <div className="productpage-searchtag3">
                <span className="productpage-text32">
                  <span>React.js</span>
                </span>
              </div>
              <div className="productpage-searchtag4">
                <span className="productpage-text34">
                  <span>React.js</span>
                </span>
              </div>
            </div>
            <span className="productpage-text36">
              <span>Since December 20, 2023</span>
            </span>
            <img
              src="https://static-cse.canva.com/blob/1020359/1600w-K9NTgBT1uG8.jpg"
              alt="offerpagethumbnail5784"
              className="productpage-offerpagethumbnail"
            />
            <div className="productpage-offerpagecategories">
              <span className="productpage-text38">
                <span>offer</span>
              </span>
              <img
                src={rightArrow}
                alt="rightgradientarrow5784"
                className="productpage-rightgradientarrow"
              />
              <span className="productpage-text40">
                <span>hubaferencz</span>
              </span>
              <img
                src={rightArrow}
                alt="rightgradientarrow5784"
                className="productpage-rightgradientarrow1"
              />
              <span className="productpage-text42">
                <span>code</span>
              </span>
              <img
                src={rightArrow}
                alt="rightgradientarrow5784"
                className="productpage-rightgradientarrow2"
              />
              <span className="productpage-text44">
                <span>home</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productpage;
