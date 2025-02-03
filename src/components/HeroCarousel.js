import React from "react";
import Slider from "react-slick";
import "../styles/HeroCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slides from "../Data/carouselData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CustomPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} >
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}

function CustomNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}

function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div className="custom-dots">
        <ul>{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="hero-carousel">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <img src={slide.image} alt={slide.title} className="carousel-image" />
            <div className="carousel-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="btn-learn">Más información</button>
              <button className="btn-book">Reservar ahora</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroCarousel;
