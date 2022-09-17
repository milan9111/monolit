import React from "react";
import './../styles/SectionHeroBottom.css';


const SectionHeroBottom = (props) => {
    return(
        <div className="sectionHeroBottom">
            <div className="sectionHeroBottom__pretitle">
            Спортивний комплекс
            </div>
            <div className="sectionHeroBottom__title">
            MONOLIT GYM
            </div>
            <div className="sectionHeroBottom__text-top">
            Спортивний комплекс пропонує широкий спектр послуг для покращення фізичної форми.
            </div>
            <div className="sectionHeroBottom__text-bottom">
            Наш центр обладнаний значною кількістю тренажерів, серед них професійні кардіо-тренажери для силових тренувань.
            </div>
        </div>
    );
}


export default SectionHeroBottom;
