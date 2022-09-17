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
                    тренажерний зал сімейного типу
                </div>
                <div className="PhotoGalleryText__item">
                    групові заняття
                </div>
                <div className="PhotoGalleryText__item">
                    персональні тренування
                </div>
                <div className="PhotoGalleryText__item">
                    тренування з особистим тренером
                </div>
                <div className="PhotoGalleryText__item">
                    про тренера:
                </div>
                <div className="PhotoGalleryText__item">
                    чемпіон світу
                </div>
                <div className="PhotoGalleryText__item">
                    неодноразовий чемпіон України
                </div>
                <div className="PhotoGalleryText__item">
                    абсолютний чемпіон з пауерліфтингу
                </div>
                <div className="PhotoGalleryText__item">
                    тренер вищої категорії
                </div>
            </div>
        </section>
    );
}

export default PhotoGalleryText;
