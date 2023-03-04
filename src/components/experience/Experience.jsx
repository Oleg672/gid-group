import React from 'react';
import './expetience.scss'
function Expetience({ experienceData }) {
    return (
        <div className="experience">
            <ul className="experience__list">
                <div className="wrapper">
                    {experienceData.map((elem) => {
                        return (<li className="experience__item">
                            <h5 className="experience__title">{elem.title}</h5>
                            <div className="experience__item-inner">
                                <h6 className="experience__sub-title">{elem.subTitle}</h6>
                                <p className="experience__desc">{elem.desc}</p>
                            </div>
                        </li>
                        )
                    })}


                </div>

            </ul>
        </div>
    );
}

export default Expetience;