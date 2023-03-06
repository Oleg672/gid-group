import React from 'react';
import './blog.scss'
function Blog() {
    return (
        <section className="blog">
            <h2 className="section-title">НАШ БЛОГ</h2>
            <div className="blog__container">
                <ul className="blog__list">
                    <li className="blog__item">
                        <div className="blog__date">2021, Март</div>
                        <h4 className="blog__title">Как определить компетенцию дизайнера ничего не зная о дизайне интерьера?</h4>
                        <div className="blog__desc">Сегодня вопрос профессиональной подготовки дизайнеров интерьера весьма актуален. Существует множество...</div>
                        <button className="btn-normal blog-item__btn">Читать полностью</button>
                    </li>
                    <li className="blog__item">
                        <div className="blog__date">2021, Март</div>
                        <h4 className="blog__title">Как определить компетенцию дизайнера ничего не зная о дизайне интерьера?</h4>
                        <div className="blog__desc">Сегодня вопрос профессиональной подготовки дизайнеров интерьера весьма актуален. Существует множество...</div>
                        <button className="btn-normal blog-item__btn">Читать полностью</button>
                    </li>
                    <li className="blog__item">
                        <div className="blog__date">2021, Март</div>
                        <h4 className="blog__title">Как определить компетенцию дизайнера ничего не зная о дизайне интерьера?</h4>
                        <div className="blog__desc">Сегодня вопрос профессиональной подготовки дизайнеров интерьера весьма актуален. Существует множество...</div>
                        <button className="btn-normal blog-item__btn">Читать полностью</button>
                    </li>
                    <li className="blog__item">
                        <div className="blog__date">2021, Март</div>
                        <h4 className="blog__title">Как определить компетенцию дизайнера ничего не зная о дизайне интерьера?</h4>
                        <div className="blog__desc">Сегодня вопрос профессиональной подготовки дизайнеров интерьера весьма актуален. Существует множество...</div>
                        <button className="btn-normal blog-item__btn">Читать полностью</button>
                    </li>
                </ul>
                <div className="blog_btn-wrapper">
                    <button className="btn-normal blog_btn">Перейти в блог
                        <svg width="72" height="8" viewBox="0 0 72 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M71.3536 4.35355C71.5488 4.15829 71.5488 3.84171 71.3536 3.64645L68.1716 0.464466C67.9763 0.269204 67.6597 0.269204 67.4645 0.464466C67.2692 0.659728 67.2692 0.976311 67.4645 1.17157L70.2929 4L67.4645 6.82843C67.2692 7.02369 67.2692 7.34027 67.4645 7.53553C67.6597 7.7308 67.9763 7.7308 68.1716 7.53553L71.3536 4.35355ZM0 4.5H71V3.5H0V4.5Z" fill="black" />
                        </svg>

                    </button>
                </div>
            </div>
        </section>

    );
}

export default Blog;