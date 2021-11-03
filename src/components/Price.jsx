import React from "react";
import './../styles/Price.css';



const Price = (props) => {
    return(
        <section className="price" id="price-scroll">
            <div className="price__box">
                <div className="price__title">
                    <h2>
                        УCЛУГИ
                    </h2>
                </div>
                <div className="price__services">
                    <div className="price__item">
                        <span>Безлимитное посещение</span>
                        <span className="price__item_price">- 500 грн/месяц</span>  
                    </div>
                    <div className="price__item">
                        <span>Утренний безлимит</span>
                        <span className="price__item_price">- 400 грн/месяц</span>  
                    </div>
                    <div className="price__item">
                        <span>Школьный безлимит</span>
                        <span className="price__item_price">- 350 грн/месяц</span>  
                    </div>
                    <div className="price__item">
                        <span>Студенческий безлимит</span>
                        <span className="price__item_price">- 400 грн/месяц</span>
                         
                    </div>
                    <div className="price__item">
                        <span>8 тренировок за 30 дней</span>
                        <span className="price__item_price">- 400 грн/месяц</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Price;