import React, { useEffect, useState } from 'react';
import './../styles/NavigationRigth.css';
import { Link } from "react-scroll";



const NavigationRigth = (props) => {

    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }, []);

    return offset > 500 ? (
        <div className='navigationRigth__up'>
            <Link className="navigationRigth__link" activeClass="active" to="home-scroll" spy={true} smooth={true} duration={1000} delay={100}><i className="fa fa-arrow-circle-up" aria-hidden="true"></i></Link>
        </div>
    ) : null;
}

export default NavigationRigth;