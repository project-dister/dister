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
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,

    // responsive settings for different screen sizes
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          arrows: false,
          centerMode: true,
        },
      },
      
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
        centerMode: true,
      },
    ],
  };

  // create categories array with icons available in fontawesome.com for free
  const categories = [
    {
      id: 1,
      title: "Coding",
      icon: "fa-solid fa-code",
    },
    {
      id: 2,
      title: "Design",
      icon: "fa-solid fa-paint-brush",
    },
    {
      id: 3,
      title: "Marketing",
      icon: "fa-solid fa-chart-line",
    },
    {
      id: 4,
      title: "Writing",
      icon: "fa-solid fa-pen",
    },
    {
      id: 5,
      title: "Translation",
      icon: "fa-solid fa-language",
    },
    {
      id: 6,
      title: "Video",
      icon: "fa-solid fa-video",
    },
    {
      id: 7,
      title: "Audio",
      icon: "fa-solid fa-music",
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
                  <i className={category.icon}></i>
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
