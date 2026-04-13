import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({ records }) => {
  const settings = {
    dots: true,
    infinite: records.length > 3,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.25, 1, 0.5, 1)", // Smoother transition
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, dots: false }
      }
    ]
  };

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Visual Journey</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="gallery-container">
        <Slider {...settings}>
          {records.map((item, index) => (
            <div key={index} className="gallery-slide-item">
              <div className="gallery-card">
                <div className="image-container">
                  <img src={item.imageUrl} alt={item.name || "Gallery Image"} />
                  {item.tag && <div className="card-badge">{item.tag}</div>}
                  <div className="image-overlay"></div>
                </div>
                <div className="gallery-info">
                  <h3>{item.name}</h3>
                  <div className="card-line"></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;