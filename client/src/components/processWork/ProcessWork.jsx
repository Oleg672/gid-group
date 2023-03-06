import React from 'react';
import './processWork.scss'
import img1 from '../../images/process1.svg'
import img2 from '../../images/process2.svg'
import img3 from '../../images/process3.svg'
import img4 from '../../images/process4.svg'
import img5 from '../../images/process5.svg'
import img6 from '../../images/process6.svg'
import img7 from '../../images/process7.svg'
function ProcessWork() {
    return ( 
        <section className='process'>
            <h2 className="section-title">ЧТО ВЫ ПОЛУЧИТЕ</h2> 
            <div className="process__container">
                <ul className="process__list">
                    <li className="process__item">
                        <div className="process__item-header">
                            <img src={img1} alt="Определение стиля" className="process__img" />
                            <h6 className="process__title">Определение стиля</h6>
                        </div>
                        <p className="process__text">Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.</p>
                    </li>
                    <li className="process__item">
                        <div className="process__item-header">
                            <img src={img2} alt="Цветовые решения" className="process__img" />
                            <h6 className="process__title">Цветовые решения</h6>
                        </div>
                        <p className="process__text">Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.</p>
                    </li>
                    <li className="process__item">
                        <div className="process__item-header">
                            <img src={img3} alt="Планировочные решения" className="process__img" />
                            <h6 className="process__title">Планировочные решения</h6>
                        </div>
                        <p className="process__text">Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.</p>
                    </li>
                    <li className="process__item">
                        <div className="process__item-header">
                            <img src={img4} alt="Определение стиля" className="process__img" />
                            <h6 className="process__title">Бюджет</h6>
                        </div>
                        <p className="process__text">Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.</p>
                    </li>
                    <li className="process__item">
                        <div className="process__item-header">
                            <img src={img5} alt="Определение стиля" className="process__img" />
                            <h6 className="process__title">Материалы и предметы</h6>
                        </div>
                        <p className="process__text">Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.</p>
                    </li>
                    <li className="process__item">
                        <div className="process__item-header">
                            <img src={img6} alt="Определение стиля" className="process__img" />
                            <h6 className="process__title">Визуализация</h6>
                        </div>
                        <p className="process__text">Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.</p>
                    </li>
                    <li className="process__item">
                        <div className="process__item-header">
                            <img src={img7} alt="Определение стиля" className="process__img" />
                            <h6 className="process__title">Чертежи и проекты</h6>
                        </div>
                        <p className="process__text">Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации.</p>
                    </li>
                </ul>
            </div>
        </section>
     );
}

export default ProcessWork;