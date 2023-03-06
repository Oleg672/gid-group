import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './price.scss'
import ss1 from '../../images/ss1.png'
import ss2 from '../../images/ss2.png'
import ss3 from '../../images/ss3.png'
import Logo from '../../images/Logo.png'
import m1 from '../../images/m1.png'
import m2 from '../../images/m2.png'
import { NavLink } from 'react-router-dom';

function Price({setNavOpened}) {
    const style = [
        {
            style: "Минимализм",
            img: "ss1"
        },
        {
            style: "Скандинавский стиль",
            img: ""
        },
        {
            style: "Стиль Лофт",
            img: ""
        },
        {
            style: "Минимализм",
            img: ""
        },
        {
            style: "Скандинавский стиль",
            img: ""
        },
        {
            style: "Стиль Лофт",
            img: ""
        }
    ]
    const time = ["Уже нужно", "В течении месяца", "В течении недели", "Более 3-ех месяцев"]
    const [SVGActive, setSVGActive] = useState("questions__item-1");
    const [styleActive, setStyleActive] = useState(0);
    const [timeActive, setTimeActive] = useState(0);
    const [modal, setModal] = useState(false);
    const [questionsSlide, setQuestionsSlide] = useState(0)
    const countSliderItems = (document.querySelectorAll(".questions__content").length) * -100;
    const SVGActiveFn = (val) => { setSVGActive(val) }

    return (
        <section className="price">
            <Modal modal={modal} setModal={setModal}>
                <div className="questions">
                    <div className="questions__container" style={{ left: questionsSlide + "%", transition: "left ease-in-out 0.7s" }}>
                        <div className="questions__content">
                            <div className="questions__header">
                                <h6 className="questions__title">Вопрос 1:</h6>
                                <span className="questions__text">Какой размер помещения вашего проекта?</span>
                            </div>

                            <ul className="questions__list">
                                <li onClick={() => SVGActiveFn("questions__item-1")} className="questions__item questions__item-1" >
                                    <div className="arrow1">
                                        <svg width="340" height="24" viewBox="0 0 340 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={SVGActive === "questions__item-1" ? 'questions__item--active' : 'questions__item--disable'} d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM339.061 13.0606C339.646 12.4748 339.646 11.5251 339.061 10.9393L329.515 1.39337C328.929 0.807583 327.979 0.807583 327.393 1.39337C326.808 1.97916 326.808 2.9289 327.393 3.51469L335.879 12L327.393 20.4853C326.808 21.071 326.808 22.0208 327.393 22.6066C327.979 23.1924 328.929 23.1924 329.515 22.6066L339.061 13.0606ZM2 13.5L338 13.5L338 10.5L2 10.5L2 13.5Z" fill="#4F4F4F" />
                                        </svg>
                                    </div>
                                    <div className="rect__wrapp">
                                        <div className={SVGActive === "questions__item-1" ? 'rect rect--active' : 'rect'}>от 50 до 80 м2</div>
                                        <div className="arrow2">
                                            <svg width="24" height="292" viewBox="0 0 24 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className={SVGActive === "questions__item-1" ? 'questions__item--active' : 'questions__item--disable'} d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807612 11.0711 0.807612 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM10.9394 291.061C11.5251 291.646 12.4749 291.646 13.0607 291.061L22.6066 281.515C23.1924 280.929 23.1924 279.979 22.6066 279.393C22.0208 278.808 21.0711 278.808 20.4853 279.393L12 287.879L3.51473 279.393C2.92894 278.808 1.9792 278.808 1.39341 279.393C0.807624 279.979 0.807624 280.929 1.39341 281.515L10.9394 291.061ZM10.5 2L10.5 290L13.5 290L13.5 2L10.5 2Z" fill="#4F4F4F" />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li onClick={() => SVGActiveFn("questions__item-2")} className="questions__item questions__item-2" >
                                    <div className="arrow1">
                                        <svg width="340" height="24" viewBox="0 0 340 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={SVGActive === "questions__item-2" ? 'questions__item--active' : 'questions__item--disable'} d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM339.061 13.0606C339.646 12.4748 339.646 11.5251 339.061 10.9393L329.515 1.39337C328.929 0.807583 327.979 0.807583 327.393 1.39337C326.808 1.97916 326.808 2.9289 327.393 3.51469L335.879 12L327.393 20.4853C326.808 21.071 326.808 22.0208 327.393 22.6066C327.979 23.1924 328.929 23.1924 329.515 22.6066L339.061 13.0606ZM2 13.5L338 13.5L338 10.5L2 10.5L2 13.5Z" fill="#4F4F4F" />
                                        </svg>
                                    </div>
                                    <div className="rect__wrapp">
                                        <div className={SVGActive === "questions__item-2" ? 'rect rect--active' : 'rect'}>от 50 до 80 м2</div>
                                        <div className="arrow2">
                                            <svg width="24" height="292" viewBox="0 0 24 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className={SVGActive === "questions__item-2" ? 'questions__item--active' : 'questions__item--disable'} d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807612 11.0711 0.807612 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM10.9394 291.061C11.5251 291.646 12.4749 291.646 13.0607 291.061L22.6066 281.515C23.1924 280.929 23.1924 279.979 22.6066 279.393C22.0208 278.808 21.0711 278.808 20.4853 279.393L12 287.879L3.51473 279.393C2.92894 278.808 1.9792 278.808 1.39341 279.393C0.807624 279.979 0.807624 280.929 1.39341 281.515L10.9394 291.061ZM10.5 2L10.5 290L13.5 290L13.5 2L10.5 2Z" fill="#4F4F4F" />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li onClick={() => SVGActiveFn("questions__item-3")} className="questions__item questions__item-2" >
                                    <div className="arrow1">
                                        <svg width="340" height="24" viewBox="0 0 340 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={SVGActive === "questions__item-3" ? 'questions__item--active' : 'questions__item--disable'} d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM339.061 13.0606C339.646 12.4748 339.646 11.5251 339.061 10.9393L329.515 1.39337C328.929 0.807583 327.979 0.807583 327.393 1.39337C326.808 1.97916 326.808 2.9289 327.393 3.51469L335.879 12L327.393 20.4853C326.808 21.071 326.808 22.0208 327.393 22.6066C327.979 23.1924 328.929 23.1924 329.515 22.6066L339.061 13.0606ZM2 13.5L338 13.5L338 10.5L2 10.5L2 13.5Z" fill="#4F4F4F" />
                                        </svg>
                                    </div>
                                    <div className="rect__wrapp">
                                        <div className={SVGActive === "questions__item-3" ? 'rect rect--active' : 'rect'}>более 120 м2</div>
                                        <div className="arrow2">
                                            <svg width="24" height="292" viewBox="0 0 24 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className={SVGActive === "questions__item-3" ? 'questions__item--active' : 'questions__item--disable'} d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807612 11.0711 0.807612 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM10.9394 291.061C11.5251 291.646 12.4749 291.646 13.0607 291.061L22.6066 281.515C23.1924 280.929 23.1924 279.979 22.6066 279.393C22.0208 278.808 21.0711 278.808 20.4853 279.393L12 287.879L3.51473 279.393C2.92894 278.808 1.9792 278.808 1.39341 279.393C0.807624 279.979 0.807624 280.929 1.39341 281.515L10.9394 291.061ZM10.5 2L10.5 290L13.5 290L13.5 2L10.5 2Z" fill="#4F4F4F" />
                                            </svg>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                        <div className="questions__content">
                            <div className="questions__header">
                                <h6 className="questions__title">Вопрос 2:</h6>
                                <span className="questions__text">Какой стиль лучше подходит для вашего проекта?</span>
                            </div>
                            <ul className="questions-style__list">
                                {style.map((el, index) => {
                                    return (
                                        <li key={index} onClick={() => { setStyleActive(index) }} className={styleActive == index ? "questions-style__item questions-style__item--active" : "questions-style__item"}>
                                            <div className="questions-style__img-wrapper">
                                                {/* import ss2,ss3 */}
                                                <img src={ss1} alt="стиль" className="questions-style__img" />
                                            </div>
                                            <h6 className="questions-style__title">{el.style}</h6>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="questions__content">
                            <div className="questions__header">
                                <h6 className="questions__title">Вопрос 3:</h6>
                                <span className="questions__text">Когда примерно планируете начать работы над проектом?</span>
                            </div>
                            <div className="questions-terms__list-wrapp">
                                <ul className="questions-terms__list">
                                    {time.map((el, index) => {
                                        return (<li onClick={() => setTimeActive(index)} key={index} className={timeActive == index ? "questions-terms__item questions-terms__item--active" : "questions-terms__item"}>
                                            <span className="questions-terms-span">{el}</span>
                                        </li>)
                                    })}

                                </ul>
                            </div>

                        </div>

                        <div className="questions__content">
                            <div className="questions__header">
                                <h6 className="questions__title">Завершение</h6>
                            </div>
                            <div className="questions__end-wrapp">
                                <div className="questions__end">
                                    <div className="questions__end-formInput">
                                        <div className="questions__end-formInput_container">
                                            <p className='questions__end-text'>Заполните ваши данные для обрвтной связи и мы вам позвоним</p>
                                            <input className='questions__end-input' type="tel" name="questions__end" id="questions__end" placeholder='Введите ваш номер телефона' />
                                            <input className='questions__end-input' type="email" name="questions__end" id="questions__end" placeholder='Введите ваш E-mail' />
                                            <div className="e-mail__container">
                                                <input className='input_e-mail__personal' type="checkbox" name="questions__end-input__personal" id="questions__end-input__personal" />
                                                <label className='input_e-mail__personal-label' htmlFor='questions__end-input__personal'>Я согласен на <a href="#">обработку персональных данных</a></label>
                                            </div>
                                        </div>
                                        <button className='questions__end-btn'>Оставить заявку</button>
                                    </div>
                                    <div className="questions__end-links">
                                        <NavLink to="/projects">
                                            <div onClick={() => setNavOpened(false)} className="questions__itemList">
                                                <div className="questions__itemList-inner">
                                                    <img className='questions__itemList-img' src={m1} alt="Каталог работ" />
                                                    <img className='questions__itemList-logo' src={Logo} alt="Каталог работ" />
                                                    <div className='questions__itemList-desc' >Каталог работ</div>
                                                </div>
                                                <h6 className='questions__itemList-title' >Каталог работ</h6>
                                            </div>
                                        </NavLink>
                                        <div className="questions__itemList">
                                            <div className="questions__itemList-inner">
                                                <img className='questions__itemList-img' src={m2} alt="Каталог работ" />
                                                <img className='questions__itemList-logo' src={Logo} alt="Каталог работ" />
                                                <div className='questions__itemList-desc' >Журанал дизайна</div>
                                            </div>
                                            <h6 className='questions__itemList-title' >Журанал дизайна</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div> <div className="questions__buttons">
                        <button className="questions__btn questions__btn--prev" onClick={countSliderItems < questionsSlide && questionsSlide != 0 ? () => setQuestionsSlide((prevState) => prevState + 100) : null}>Назад</button>
                        <button className="questions__btn questions__btn--next" onClick={countSliderItems < questionsSlide - 100 ? () => setQuestionsSlide((prevState) => prevState - 100) : null}>Далее</button>
                    </div>

                </div>


            </Modal>
            <h2 className="section-title">СТОИМОСТЬ ПРОЕКТА</h2>

            <div className="price__inner">
                <div className="price__container">
                    <h4 className="price__title">Узнайте стоимость дизайн-проекта, ответив на 3 вопроса</h4>
                    <p className="price__text">Пройдите короткий тест, узнайте цену, получите консультацию по будущему проекту</p>
                    <div className="btn__wrap">
                        <button id='btn-big-1' onClick={() => setModal(true)} className="btn-big">Узнать стоимость</button>
                    </div>

                </div>
                <div className="price__container-bonus">
                    <div className="price__pict">
                        <svg className='price__svg-polygon' width="607" height="333" viewBox="0 0 607 333" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 126.338L291.945 0V126.338H461.345V177.568H607L259.719 333H0V126.338Z" fill="#0E0E0E" />
                        </svg>
                        {/* <svg className='price__svg-polygon' width="276" height="151">
                            <g class="layer">
                                <path d="m0.080169,57.593118l131.92374,-57.08903l0,57.08903l76.548,0l0,23.1501l65.818,0l-156.929,70.2356l-117.36074,0l0,-93.3857z" fill="#0E0E0E" id="svg_1" />
                                <path d="m208.872714,40.711366l0,-40.181821l40.181821,40.181821l-40.181821,0z" fill="#0E0E0E" id="svg_8" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="null" />
                            </g>
                        </svg> */}
                    </div>
                    <div className="wrapper__bonus">
                        <h6 className="price__title-bonus">Бонусы:</h6>
                        <ul className="price__list">
                            <li className="price__item">чек листы на 5 ошибок в строительстве</li>
                            <li className="price__item">5 трендов 2021 года на дизайн интерьеров</li>
                        </ul>
                    </div>
                    <button id='btn-big-2' className="btn-big">Узнать стоимость</button>
                </div>

            </div>
        </section>
    );
}

export default Price;