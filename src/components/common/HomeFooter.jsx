import React from "react";
import "./HomeFooter.scss";

function HomeFooter() {
  return (
    <footer class="home-footer p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span class="text-sm  sm:text-center ">
        © 2023{" "}
        <a href="https://dister.org/" class="hover:underline">
          Project Dister
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm   sm:mt-0">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default HomeFooter;
