import React from 'react';
import '../Styles/Card.css';

function Card({ name, description, url, tag }) {
  return (
    <div className="epoch-card-item">
      <div className="epoch-card-inner">
        <img src={url} className="epoch-card-img" alt={name} />
        
        <div className="epoch-card-overlay">
          <div className="epoch-card-header">
            <span className="epoch-card-tag">{tag}</span>
            <h3 className="epoch-card-name">{name}</h3>
          </div>
          
          <div className="epoch-card-body">
            <p className="epoch-card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;