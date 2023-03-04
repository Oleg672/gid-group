import React from 'react';
import img from '../../images/b1.png'
import "./quality.scss"
function Quality() {
    return (
        <section className="quality">

            <div className="quality__container">
                    <h5 className="quality__title">МЫ ТАМ, ГДЕ:</h5>
                    <ul className="quality__list">
                        <li className="quality__item">Требуется высокое качество ремонтных работ</li>
                        <li className="quality__item">Нужно четко соблюсти Бюджет </li>
                        <li className="quality__item"> Необходимо ответственно подойти к процессу </li>
                    </ul>
                </div>
            <div className="quality__inner">
                <img className='quality__img' src={img} alt="quality" />

            </div>


        </section>
    );
}

export default Quality;