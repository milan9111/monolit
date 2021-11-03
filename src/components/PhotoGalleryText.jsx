import React from "react";
import './../styles/photoGalleryText.css'


const PhotoGalleryText = (props) => {
    return(
        <section className="PhotoGalleryText">
            <div className="PhotoGalleryText__box">
                <div className="PhotoGalleryText__title">
                    У НАС:
                </div>
                <div className="PhotoGalleryText__item">
                    тренажерный зал семейного типа
                </div>
                <div className="PhotoGalleryText__item">
                    групповые занятия
                </div>
                <div className="PhotoGalleryText__item">
                    персональные тренировки
                </div>
                <div className="PhotoGalleryText__item">
                    тренировки с личным тренером
                </div>
                <div className="PhotoGalleryText__item">
                    о тренере:
                </div>
                <div className="PhotoGalleryText__item">
                    чемпион мира
                </div>
                <div className="PhotoGalleryText__item">
                    неоднократный чемпион Украины
                </div>
                <div className="PhotoGalleryText__item">
                    абсолютный чемпион по пауэрлифтингу
                </div>
                <div className="PhotoGalleryText__item">
                    тренер высшей категории
                </div>
            </div>
        </section>
    );
}

export default PhotoGalleryText;