import React from 'react';
import '../Styles/Card.css';

function Card({ name, description, url, tag }) {
  return (
    <div className="gallery-card">
      <div className="gallery-card-img-wrap">
        <img src={url} className="gallery-card-img" alt={name} />
        <div className="gallery-card-shine" />
      </div>

      <div className="gallery-card-overlay">
        <span className="gallery-card-tag">{tag}</span>
        <h3 className="gallery-card-name">{name}</h3>
        <div className="gallery-card-divider" />
        <p className="gallery-card-desc">{description}</p>
      </div>

      <div className="gallery-card-footer">
        <span className="gallery-card-footer-tag">{tag}</span>
        <span className="gallery-card-footer-name">{name}</span>
      </div>
    </div>
  );
}

export default Card;