import React from 'react';
import logo_banner from '../sources/images/logo_banner.png';
import '../styles/banner.css';



const Banner = () => {
    return(
        <div className="banner" id="home-scroll">
            <a href='https://stopwar.fondmonolit.com/'>
                <img src={logo_banner} alt="fondmonolit" />
            </a>
            <div className='banner-text'>
                Долучайтеся! Не залишайтесь байдужими!
            </div>
            <a className='banner-link' href='https://fondmonolit.com/'>
                Дізнатися більше
            </a>
        </div>
    );
}

export default Banner;