import React from 'react';
import video from '../../images/work.png'
import Expetience from '../experience/Experience';
import './repair.scss'
function Repair() {
    const experienceData = [
        {
            title: "24/7",
            titleImg: "",
            subTitle: "Ваш личный менеджер всегда на связи"
        },
        {
            title: "Наблюдение",
            titleImg: "",
            subTitle: "На объекте ведётся круглосуточное видеонаблюдение"
        },
        {
            title: "7 лет",
            titleImg: "",
            subTitle: "Гарантии на все работы"
        },
        {
            title: "Документация",
            titleImg: "",
            subTitle: "Подготовим и утвердим всю проектную документацию"

        }
    ]

    return (<>
        <section className='top-content'>
            <div className="video">
                <img src={video} alt="video" />
                <h2 className='video__title'>Видео работы GID</h2>
            </div>
            <div className="individual">
                <Expetience experienceData={experienceData} />
            </div>

        </section>
    </>);
}

export default Repair;