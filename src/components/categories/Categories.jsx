import React from "react";
import "./Categories.scss";
import CategoryCarousel from "./CategoryCarousel";

function Categories() {
  return (
    // create a responsive section using tailwind with 2 cols, 2-5 ratio
    // <section className="categories-section">
    //   <div className="container mx-auto px-4">
    //     <div className="flex flex-col md:flex-row">
    //       <div className="md:w-2/5">
    //         <h2 className="section-header text-4xl font-bold dark:text-white mb-4">
    //           Shop by
    //           <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600">
    //             {" "}
    //             Category
    //           </span>
    //         </h2>

    //         {/* <p className="text-gray-500 dark:text-gray-400"> */}
    //         {/* create some spacing while keeping classnames*/}
    //         <p className="section-description text-gray-500 dark:text-gray-400 mb-8">
    //           Explore our Web3 freelancing platform and easily find the services
    //           you need by browsing our selection of categories. From blockchain
    //           development to Copyrighting, we've got you covered. Start shopping
    //           by category now!
    //         </p>
    //       </div>
    //       <div className="md:w-3/5">
    //         <CategoryCarousel />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // create a responsive section using tailwind with 2 cols, 2-5 ratio, push to next line on screens smaller than 1060px
    <section className="categories-section">
      <div className="container mx-auto px-4">
        {/* <div className="flex flex-col md:flex-row md:flex-wrap"> */}
        {/* <div className="flex flex-col md:flex-row md:flex-wrap md:flex-nowrap md:items-center md:justify-between"> */}
        {/* same things apply for lg as well */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:flex-nowrap md:items-center md:justify-between">
          <div className="md:w-2/5">
            <h2 className="section-header text-4xl font-bold dark:text-white mb-4">
              Shop by
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600">
                {" "}
                Category
              </span>
            </h2>

            {/* <p className="text-gray-500 dark:text-gray-400"> */}
            {/* create some spacing while keeping classnames*/}
            <p className="section-description text-gray-500 dark:text-gray-400 mb-8">
              Explore our Web3 freelancing platform and easily find the services
              you need by browsing our selection of categories. From blockchain
              development to Copyrighting, we've got you covered. Start shopping
              by category now!
            </p>
          </div>
          <div className="md:w-3/5">
            <CategoryCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
