import React from "react";
import { Link } from "react-scroll";
import logo192 from './../sources/images/logo192.png';
import './../styles/header.css';

const Header = (props) => {
    return(
        <header className="header">
            <nav className="header__navbar">
                <Link className="header__item" activeClass="active" to="home-scroll" spy={true} smooth={true} duration={1000} delay={100}>Главная</Link>
                <Link className="header__item" activeClass="active" to="photo-scroll" spy={true} smooth={true}  duration={1000} delay={100}>Фотогалерея</Link>
                <Link className="header__item" activeClass="active" to="home-scroll" spy={true} smooth={true} duration={1000} delay={100}><img src={logo192} alt='Logo'></img></Link>
                <Link className="header__item" activeClass="active" to="price-scroll" spy={true} smooth={true} duration={1000} delay={100}>Прайс</Link>
                <Link className="header__item" activeClass="active" to="contacts-scroll" spy={true} smooth={true} offset={100} duration={1000} delay={100}>Контакты</Link>
            </nav>
            <div className="header__logo-mobile">
                <Link  activeClass="active" to="home-scroll" spy={true} smooth={true} duration={1000} delay={100}><img src={logo192} alt='Logo'></img></Link>
            </div>
            <div className="header__mobile-toggle">
                <input type="checkbox" id="mobile-toggle-menu" />
                <label htmlFor="mobile-toggle-menu"><i className="fa fa-bars" aria-hidden="true"></i></label>
                <ul>
                    <li><Link className="header__item" activeClass="active" to="home-scroll" spy={true} smooth={true} duration={1000} delay={100}>Главная</Link></li>
                    <li><Link className="header__item" activeClass="active" to="photo-scroll" spy={true} smooth={true}  duration={1000} delay={100}>Фотогалерея</Link></li>
                    <li> <Link className="header__item" activeClass="active" to="price-scroll" spy={true} smooth={true} duration={1000} delay={100}>Прайс</Link></li>
                    <li><Link className="header__item" activeClass="active" to="contacts-scroll" spy={true} smooth={true} offset={100} duration={1000} delay={100}>Контакты</Link></li>
                </ul>
            </div>




        </header>
    );
}

export default Header;
