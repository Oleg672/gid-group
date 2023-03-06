import React from 'react';
import img1 from '../../images/12.png'
import './catalog.scss'
function Catalog({title}) {
    return (
        <section className="catalog">
            <h2 className="section-title">{title}</h2>
            <div className="catalog__container">
                <div className="catalog__img-wrapp">
                    <img className='catalog__img' src={img1} alt="catalog-img" />
                </div>

                <div className="catalog__block">
                    <h3 className="catalog__title">Оставьте ваш E-mail, чтобы получить каталог наших проектов</h3>
                    <p className="catalog__desc">Каталог поможет вам выбрать стиль и продумать планировку квартиры</p>
                    <input className='input_e-mail' type="text" placeholder='Введите ваш E-mail'/>
                    <div className="e-mail__container">
                        <input className='input_e-mail__personal' type="checkbox" name="input_e-mail__personal" id="input_e-mail__personal" />
                        <label className='input_e-mail__personal-label' htmlFor='input_e-mail__personal'>Я согласен на <a href="#">обработку персональных данных</a></label>
                    </div>
                    <button className='btn-big'>Получить каталог</button>
                </div>
            </div>
        </section>
    );
}

export default Catalog;