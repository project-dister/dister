import React from "react";
import "./HomeNavbar.scss";
import DisterLogoBig from "../../assets/dister-logo.png";
import DisterLogoSmall from "../../assets/dister-logo-small.png";
import SearchGradientIcon from "../../assets/search-gradient.png";
import DashboardIcon from "../../assets/dashboard-icon.png";

function HomeNavbar() {
  return (
    <nav className="bg-gray shadow home-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* show big logo on bigger srceens, show small logo on smaller screens */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-12 w-auto"
                src={DisterLogoSmall}
                alt="Dister"
              />
              <img
                className="hidden lg:block h-12 w-auto"
                src={DisterLogoBig}
                alt="Dister"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 home-search-box">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search offers
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img
                    src={SearchGradientIcon}
                    alt=""
                    srcSet=""
                    className="h-5 w-5 "
                  />
                </div>
                <input
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 sm:text-sm"
                  placeholder="Search offers"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Toggle menu"
            >
              <img src={DashboardIcon} alt="" srcSet="" className="h-10 w-10" />
            </button>
          </div>

          {/* create dashboard button with gradient orange outline */}
          <div className="hidden lg:flex">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button className="py-2 px-4 dashboard-button">Dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar;
