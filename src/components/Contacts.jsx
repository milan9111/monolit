import React from "react";
import { Link } from "react-scroll";
import './../styles/Contacts.css';
import logo from "./../sources/images/logo192.png";


const Contacts = (props) => {
    return(
        <section className="contacts" id="contacts-scroll">
            <div className="contacts__container">
                <div className="contacts__title">
                    НАШИ КОНТАКТЫ:
                </div>
                <div className="contacts__box">
                        <div className="contacts__logo">
                            <Link to="home-scroll" spy={true} smooth={true} duration={1000}><img src={logo} alt="logo" /></Link>
                            <p>
                                Наслаждайся жизнью полной здоровья!
                            </p>
                            <div className="contacts__social-networks">
                                  <div className="social-networks__item">
                                    <a href="https://www.instagram.com/roman.monolit" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                  </div>
                                  <div className="social-networks__item">
                                    <a href="https://www.facebook.com/profile.php?id=100035529167349" target="_blank"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                  </div>
                                  <div className="social-networks__item">
                                  <a href="https://www.youtube.com/channel/UCcNrnsay-chMGqBo51-JNhg" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                                  </div>
                            </div>
                        </div>
                        <address className="contacts__address">
                                <div className="address__address">
                                    г. Днепр, ул. Владимира Антоновича, 26
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
                                    График работы:
                                </div>
                                <div className="timetable__day">
                                    Понедельник с 8.00 до 22.00
                                </div>
                                <div className="timetable__day">
                                    Вторник с 8.00 до 22.00
                                </div>
                                <div className="timetable__day">
                                    Среда с 8.00 до 22.00
                                </div>
                                <div className="timetable__day">
                                    Четверг с 8.00 до 22.00
                                </div>
                                <div className="timetable__day">
                                    Пятница с 8.00 до 22.00
                                </div>
                                <div className="timetable__day">
                                    Суббота с 10.00 до 17.00
                                </div>
                                <div className="timetable__day">
                                    Воскресенье с 10.00 до 19.00
                                </div>
                        </div>
                </div>
            </div>
        </section>
    );
}


export default Contacts;
