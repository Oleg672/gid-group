import React from 'react';
import './expetience.scss'
function Expetience() {
    return (
        <div className="experience">
            <ul className="experience__list">
            <div className="wrapper">
                <li className="experience__item">
                    <h5 className="experience__title">100+</h5>
                    <div className="experience__item-inner">
                        <h6 className="experience__sub-title">Реализованные проекты</h6>
                        <p className="experience__desc">Работаем с любой недвижимостью – от дворцов до квартир</p>
                    </div>
                </li>
                <li className="experience__item">
                    <h5 className="experience__title">10 лет</h5>
                    <div className="experience__item-inner">
                        <h6 className="experience__sub-title">Безупречная репутация</h6>
                        <p className="experience__desc">Наши специалисты постоянно стажируются у лидеров строительных работ</p>
                    </div>
                </li>
                </div>
                <div className="wrapper">
                <li className="experience__item">
                    <h5 className="experience__title">3 года</h5>
                    <div className="experience__item-inner">
                        <h6 className="experience__sub-title">Гарантии на все работы</h6>
                        <p className="experience__desc">Мы внимательно изучаем рынок отделочных материалов и инновационной техники</p>
                    </div>
                </li>
                <li className="experience__item">
                    <h5 className="experience__title">Сроки</h5>
                    <div className="experience__item-inner">
                        <h6 className="experience__sub-title">Процесс</h6>
                        <p className="experience__desc">Нужно лучшее – закажи это у лучших!</p>
                    </div>
                </li>
                </div>
               
            </ul>
        </div>
    );
}

export default Expetience;