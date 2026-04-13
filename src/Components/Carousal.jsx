import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import React from 'react';
import '../Styles/Carousal.css';
function CarouselCustom({records}) {
  return (
    <div className="test">
    <Carousel>
      {records.map(record => (
        // Check if imageUrl is valid before rendering Carousel.Item
        record.imageUrl && (
          <Carousel.Item key={record.name} className='carousalItem'>
            <Image src={record.imageUrl}></Image>
            <Carousel.Caption>
              <div className='textCarousal'>
              <div className='itemTitle'>{record.name}</div>
              <div className='itemDescription'>{record.description}</div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        )
      ))}
    </Carousel>
    </div>
  );
}

export default CarouselCustom;