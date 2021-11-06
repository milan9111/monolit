import React from "react";
import './../styles/NavigationRigth.css';
import { Link } from "react-scroll";



const NavigationRigth = (props) => {
    console.log(props.offset);
    return props.offset > 500 ? (
        <div className='navigationRigth__up'>
            <Link className="navigationRigth__link" activeClass="active" to="home-scroll" spy={true} smooth={true} duration={1000} delay={100}><i className="fa fa-arrow-circle-up" aria-hidden="true"></i></Link>
        </div>
    ) : null;
}

export default NavigationRigth;