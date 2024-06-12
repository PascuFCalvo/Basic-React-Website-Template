import React from 'react';
import "./CardHorizontal.css";
const CardHorizontal = ({ image, subtitle, title, description, sourceCodeLink, viewlink }) => {
    return (
        <div className='CardHorizontal'>



                <div className="projects__container container grid">
                        <div className="projects__image">
                            <img src={image} alt="image" className="projects__img" />
                            <a href="#" className="projects__button button">
                                <i className="ri-arrow-right-up-line"></i>
                            </a>
                        </div>

                        <div className="projects__content">
                            <div className="projects__subtitle">{subtitle}</div>
                            <div className="projects__title">{title}</div>
                            <div className="projects__description">
                                {description}
                            </div>
                        </div>

                        <div className="projects__buttons">
                            <a href={sourceCodeLink} target="_blank" className="projects__link">
                                <i className="ri-github-line"></i> Source Code
                            </a>
                            <a href={viewlink} target="_blank" className="projects__link">
                                <i className="ri-dribbble-line"></i> View
                            </a>
                        </div>


                </div>
        </div>
    );
};

export default CardHorizontal;
