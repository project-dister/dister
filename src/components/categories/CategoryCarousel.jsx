import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategoryCarousel.scss";

const CategoryCarousel = () => {
  // reate settins so it has custom arrows
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
  }

  //  create a list of categories for freelancers to choose from
  const categories = [
    {
      id: 1,
      title: "Web Development",
      icon: "laptop-code",
    },
    {
      id: 2,
      title: "Graphic Design",
      icon: "pencil-ruler",
    },
    {
      id: 3,
      title: "Digital Marketing",
      icon: "chart-line",
    },
    {
      id: 4,
      title: "Writing & Translation",
      icon: "pen-nib",
    },
    {
      id: 5,
      title: "Video & Animation",
      icon: "video",
    },
    {
      id: 6,
      title: "Music & Audio",
      icon: "headphones",
    },
    {
      id: 7,
      title: "Programming & Tech",
      icon: "code",
    },
    {
      id: 8,
      title: "Business",
      icon: "briefcase",
    },
  ];

  return (
    <div className="category-carousel">
      <Slider {...settings}>
        {categories.map((category) => (
          <div className="category-item" key={category.id}>
            <div className="category-icon">
              {/* <i className={`fas fa-${category.icon}`}></i> */}
              <div className="element element-2">
                <div className="dented-icon">
                  <i className={`fas fa-${category.icon}`}></i>
                </div>
              </div>
            </div>
            <div className="category-title">{category.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;
