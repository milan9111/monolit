import React from "react";
import './../styles/sectionHeroTop.css';
import videoMp4 from './../sources/video/videoMp4.mp4';
import videoWebm from './../sources/video/videoWebm.webm';
import SectionHeroBottom from "./SectionHeroBottom";


const SectionHeroTop = (props) => {
    return(
        <section>
            <div className="sectionHeroTop">
                <div className="sectionHeroTop__content">
                    <div className="sectionHeroTop__title">
                       Не важливо, як повільно ти просуваєшся,
                    </div>
                    <div className="sectionHeroTop__subtitle">
                       головне, що ти не зупиняєшся
                    </div>
                </div>
                    <video autoPlay muted loop playsInline webkit-playsinline="true" preload="auto" className="sectionHeroTop__video">
                        <source type="video/mp4" src={videoMp4}/>
                        <source type="video/webm" src={videoWebm}/>
                    </video>
            </div>
            <SectionHeroBottom />
        </section>

    );
}


export default SectionHeroTop;
