import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import img1 from "../../../assets/1.jpg"
import img2 from "../../../assets/2.jpg"
import img3 from "../../../assets/3.jpg"
import img4 from "../../../assets/4.jpg"
import img5 from "../../../assets/5.jpg"
import img6 from "../../../assets/6.jpg"
import img7 from "../../../assets/7.jpg"
import img8 from "../../../assets/8.jpg"
import img9 from "../../../assets/9.jpg"
import img16 from "../../../assets/16.jpg"




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
        <img src={img2} />
      </Carousel.Item>

      <Carousel.Item>
        <img src={img3} />
      </Carousel.Item>

      <Carousel.Item>
        <img src={img4} />
      </Carousel.Item>

      <Carousel.Item>
        <img src={img5} />
      </Carousel.Item>

      <Carousel.Item>
        <img src={img6} />
      </Carousel.Item>

      <Carousel.Item>
      <img src={img7} />
      </Carousel.Item>

      <Carousel.Item>
      <img src={img8} />
      </Carousel.Item>

      <Carousel.Item>
      <img src={img9} />
      </Carousel.Item>

      <Carousel.Item>
      <img src= {img16} />
      </Carousel.Item>

      
    </Carousel>
    
    </>
  );
}

export default ControlledCarousel;