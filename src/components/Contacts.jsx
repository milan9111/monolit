import React from "react";
import { Link } from "react-scroll";
import './../styles/Contacts.css';
import logo from "./../sources/images/logo192.png";


const Contacts = (props) => {
    return(
        <section className="contacts" id="contacts-scroll">
            <div className="contacts__container">
                <div className="contacts__title">
                    НАШІ КОНТАКТИ:
                </div>
                <div className="contacts__box">
                        <div className="contacts__logo">
                            <Link to="home-scroll" spy={true} smooth={true} duration={1000}><img src={logo} alt="logo" /></Link>
                            <p>
                                Насолоджуйся життям повного здоров'я!
                            </p>
                            <div className="contacts__social-networks">
                                  <div className="social-networks__item">
                                    <a href="https://www.instagram.com/roman.monolit" target="_blank" rel="noreferrer">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                  </div>
                                  <div className="social-networks__item">
                                    <a href="https://www.facebook.com/profile.php?id=100035529167349" target="_blank" rel="noreferrer">
                                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                    </a>
                                  </div>
                                  <div className="social-networks__item">
                                  <a href="https://www.youtube.com/channel/UCcNrnsay-chMGqBo51-JNhg" target="_blank" rel="noreferrer">
                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                  </a>
                                  </div>
                            </div>
                        </div>
                        <address className="contacts__address">
                                <div className="address__address">
                                    м. Дніпро, вул. Володимира Антоновича, 26
                                </div>
                                <div className="address__tel">
                                    <a href="tel:+380669702554">+380669702554</a>
                                </div>
                                <div className="address__mail">
                                    <a href="mailto:monolitgym120@gmail.com">monolitgym120@gmail.com</a>
                                </div>
                                <div className="address__site">
                                    <a href="https://www.monolitgym.dp.ua">www.monolitgym.dp.ua</a>
                                </div>
                        </address>
                        <div className="contacts__timetable">
                                <div className="timetable__title">
                                    Графік работи:
                                </div>
                                <div className="timetable__day">
                                    Понеділок з 10.00 до 21.30
                                </div>
                                <div className="timetable__day">
                                    Вівторок з 10.00 до 21.30
                                </div>
                                <div className="timetable__day">
                                    Середа з 10.00 до 21.30
                                </div>
                                <div className="timetable__day">
                                    Четвер з 10.00 до 21.30
                                </div>
                                <div className="timetable__day">
                                    П'ятниця з 10.00 до 21.30
                                </div>
                                <div className="timetable__day">
                                    Субота з 10.00 до 20.00
                                </div>
                                <div className="timetable__day">
                                    Неділя - санітарний день
                                </div>
                        </div>
                </div>
            </div>
        </section>
    );
}


export default Contacts;
