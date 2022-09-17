import React from "react";
import './../styles/Footer.css';


const Footer = (props) => {
    return(
        <footer className="footer">
            <div className="footer__text">
                <div className="footer__monolit">
                    <time dateTime="2022">2022</time> © MONOLIT GYM.
                </div>
                <div className="footer__creator">
                    <a href="https://www.linkedin.com/in/vasiliy-zakrghevskyi-5527041b8/" target="_blank">Site created: Vasiliy Zakrghevskyi <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 
