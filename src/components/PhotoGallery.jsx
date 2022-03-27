import React from "react";
import './../styles/PhotoGallery.css';
import { Carousel } from 'react-bootstrap';
import slide1 from './../sources/images/slide1.jpg';
import slide2 from './../sources/images/slide2.jpeg';
import slide3 from './../sources/images/slide3.jpg';
import slide4 from './../sources/images/slide4.jpg';
import slide5 from './../sources/images/slide5.jpg';
import slide6 from './../sources/images/slide6.jpg';
import slide7 from './../sources/images/slide7.jpg';
import slide8 from './../sources/images/slide8.jpg';
import slide9 from './../sources/images/slide9.jpg';
import slide10 from './../sources/images/slide10.jpg';
import slide11 from './../sources/images/slide11.jpg';
import slide12 from './../sources/images/slide12.jpg';
import slide13 from './../sources/images/slide13.jpg';
import slide14 from './../sources/images/slide14.jpg';
import slide15 from './../sources/images/slide15.jpg';
import slide16 from './../sources/images/slide16.jpg';
import slide17 from './../sources/images/slide17.jpg';
import slide18 from './../sources/images/slide18.jpg';
import slide19 from './../sources/images/slide19.jpg';
import slide20 from './../sources/images/slide20.jpg';
import slide21 from './../sources/images/slide21.jpg';
import slide22 from './../sources/images/slide22.jpg';
import slide23 from './../sources/images/slide23.jpg';


const PhotoGallery = (props) => {
    return(
      <section className="photoGallery" id="photo-scroll">
          <Carousel fade indicators={false} interval={5000} nextLabel='Далее' prevLabel='Назад' pause={false} touch={true}>
        <Carousel.Item>
          <img
             
            className="d-block w-100"
            src={slide1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt=""
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide3}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide4}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide5}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide6}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide7}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide8}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide9}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide10}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide11}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide12}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide13}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide14}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide15}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide16}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide17}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide18}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide19}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide20}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide21}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide22}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={slide23}
            alt=""
          />
        </Carousel.Item>
        

      </Carousel>
      </section>
        
    );
}


export default PhotoGallery;