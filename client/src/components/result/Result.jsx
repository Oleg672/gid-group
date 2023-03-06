import React from 'react';
import res1 from '../../images/res1.svg'
import res2 from '../../images/res2.svg'
import res3 from '../../images/res3.svg'
import res4 from '../../images/res4.svg'
import './result.scss'
function Result() {
    return ( 
    <section className='result'>
          <h2 className="section-title">ЧТО ВЫ ПОЛУЧИТЕ</h2> 
         <ul className="result__list">
            <li className="result__item">
                <img src={res1} alt="Функциональность" className="result__img" />
                <h6 className="result__title">Функциональность</h6>
            </li>
            <li className="result__item">
                <img src={res2} alt="Эстетику" className="result__img" />
                <h6 className="result__title">Эстетику</h6>
            </li>
            <li className="result__item">
                <img src={res3} alt="Качественный ремонт" className="result__img" />
                <h6 className="result__title">Качественный ремонт</h6>
            </li>
            <li className="result__item">
                <img src={res4} alt="Уникальные условия" className="result__img" />
                <h6 className="result__title">Уникальные условия</h6>
            </li>

         </ul>
    </section> );
}

export default Result;