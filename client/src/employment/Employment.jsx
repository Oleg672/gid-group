import React from 'react';
import './employment.scss'
function Employment() {
    return ( <>
    <section className="employment">
         <h2 className="section-title">ДЛЯ КОГО ЭТО</h2> 
         <div className="employment__container">
            <h3 className="employment__text-title">Мы делаем дизайн интерьеров для людей, которые хотят доверить нам весь процесс: дизайн-проект, ремонт, закупку материалов и мебели.</h3>
            <ul className="employment__list">
                <li className="employment__item">
                    <h6 className="employment__title">Для тех, кто ценит эстетику</h6>
                    <p className="employment__text">Ежегодно посещаем зарубежные выставки, поэтому используем последние мировые тенденции в дизайне. Работаем только с проверенными решениями.</p>
                </li>
                <li className="employment__item">
                    <h6 className="employment__title">Кому важна экспертность</h6>
                    <p className="employment__text">В процессе работы над дизайн-проектом мы консультируемся с опытными строителями, чтобы получить технически реализуемые решения.</p>
                </li>
                <li className="employment__item">
                    <h6 className="employment__title">Кому нужен тройной контроль</h6>
                    <p className="employment__text">На каждый проект назначается группа из пяти человек. Это позволяет выдержать сроки, учесть нюансы, не упустить детали и досконально продумать интерьер.</p>
                </li>
            </ul>
         </div>
    </section>
  
    </> );
}

export default Employment;