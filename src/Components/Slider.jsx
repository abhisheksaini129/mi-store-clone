import  Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = ({ban}) => {
      
  return (
    <Carousel fade>
          {ban.map((item,index)=>(
                <Carousel.Item key={index}>
              <img className='d-block w-100'
              src={item}
              alt='first slide'/>
            </Carousel.Item>
          ))}   
      </Carousel>
  );
};

export default Slider;
