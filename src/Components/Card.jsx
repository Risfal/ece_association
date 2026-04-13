import React from 'react';

const Card = ({ url, name, tag, description }) => {
  return (
    <div className="gallery-card">
      <div className="image-container">
        <img src={url} alt={name || "Gallery Image"} />
        {tag && <div className="card-badge">{tag}</div>}
        <div className="image-overlay"></div>
      </div>
      
      <div className="gallery-info">
        <h3>{name}</h3>
        {description && <p className="card-description">{description}</p>}
        <div className="card-line"></div>
      </div>
    </div>
  );
};

export default Card;