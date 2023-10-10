import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import img1 from "../../../assets/1.jpg"


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
   

    <Carousel className='slide' interval={5000}  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={img1} />    
      </Carousel.Item>

      <Carousel.Item>
        <img src="/src/assets/2.jpg" />
      </Carousel.Item>

      <Carousel.Item>
        <img src="/src/assets/3.jpg" />
      </Carousel.Item>

      <Carousel.Item>
        <img src="/src/assets/4.jpg" />
      </Carousel.Item>

      <Carousel.Item>
        <img src="/src/assets/5.jpg" />
      </Carousel.Item>

      <Carousel.Item>
        <img src="/src/assets/6.jpg" />
      </Carousel.Item>

      <Carousel.Item>
      <img src="/src/assets/7.jpg" />
      </Carousel.Item>

      <Carousel.Item>
      <img src="/src/assets/8.jpg" />
      </Carousel.Item>

      <Carousel.Item>
      <img src="/src/assets/9.jpg" />
      </Carousel.Item>

      <Carousel.Item>
      <img src="/src/assets/16.jpg" />
      </Carousel.Item>

      
    </Carousel>
    
    </>
  );
}

export default ControlledCarousel;