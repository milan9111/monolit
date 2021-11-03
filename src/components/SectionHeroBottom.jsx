import React from "react";
import './../styles/SectionHeroBottom.css';


const SectionHeroBottom = (props) => {
    return(
        <div className="SectionHeroBottom">
            <div className="SectionHeroBottom__pretitle">
            Спортивный комплекс
            </div>
            <div className="SectionHeroBottom__title">
            MONOLIT GYM
            </div>
            <div className="SectionHeroBottom__text-top">
            Спортивный косплекс предлагает обширный спектр услуг для улучшения физической формы.
            </div>
            <div className="SectionHeroBottom__text-bottom">
            Наш центр оборудован значительным количеством тренажеров, среди них есть профессиональные кардио-тренажеры для силовых тренировок.
            </div>
        </div>
    );
}


export default SectionHeroBottom;