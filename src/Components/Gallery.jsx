import React from "react";
import Slider from "react-slick";
import Card from './Card.jsx';
import '../Styles/Gallery.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Gallery({ records }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.23, 1, 0.32, 1)",
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: false }
      }
    ]
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">GALLERY</h1>
        <div className="gallery-line"></div>
      </div>

      <div className="gallery-slider-wrap">
        <Slider {...settings}>
          {records.map((record, index) => (
            record.imageUrl && (
              <div key={index} className="gallery-slide-item">
                <Card 
                  url={record.imageUrl} 
                  name={record.name} 
                  tag={record.tag} 
                  description={record.description} 
                />
              </div>
            )
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;