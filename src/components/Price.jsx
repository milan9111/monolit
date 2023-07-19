import React from "react";
import "./../styles/Price.css";

const Price = (props) => {
  return (
    <section className="price" id="price-scroll">
      <div className="price__box">
        <div className="price__title">
          <h2>Послуги</h2>
        </div>
        <div className="price__services">
          <div className="price__item">
            <span>Річний абонемент</span>
            <span className="price__item_price">- 5000 грн</span>
          </div>
          <div className="price__item">
            <span>Безлімітне відвідування</span>
            <span className="price__item_price">- 700 грн/місяць</span>
          </div>
          <div className="price__item">
            <span>Ранковий безліміт</span>
            <span className="price__item_price">- 650 грн/місяць</span>
          </div>
          <div className="price__item">
            <span>Шкільний безліміт</span>
            <span className="price__item_price">- 370 грн/місяць</span>
          </div>
          <div className="price__item">
            <span>Студентський безліміт</span>
            <span className="price__item_price">- 600 грн/місяць</span>
          </div>
          <div className="price__item">
            <span>8 тренувань за 30 днів</span>
            <span className="price__item_price">- 600 грн/місяць</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
