import React from "react";
import './../styles/SectionHeroBottom.css';


const SectionHeroBottom = (props) => {
    return(
        <div className="sectionHeroBottom">
            <div className="sectionHeroBottom__pretitle">
            Спортивный комплекс
            </div>
            <div className="sectionHeroBottom__title">
            MONOLIT GYM
            </div>
            <div className="sectionHeroBottom__text-top">
            Спортивный косплекс предлагает обширный спектр услуг для улучшения физической формы.
            </div>
            <div className="sectionHeroBottom__text-bottom">
            Наш центр оборудован значительным количеством тренажеров, среди них есть профессиональные кардио-тренажеры для силовых тренировок.
            </div>
        </div>
    );
}


export default SectionHeroBottom;