import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/ControlledCarousel.css';

function ControlledCarousel({records}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='slide'>
      <div className='title'> 
        <h1>GALLERY</h1>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} >
      {records.map(record => (
        // Check if imageUrl is valid before rendering Carousel.Item
        record.imageUrl && (
          // <Card url={record.imageUrl} name={record.name} tag={record.tag} description={record.description}></Card>
          <Carousel.Item >
        <img src={record.imageUrl}/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
          )
      ))}
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;