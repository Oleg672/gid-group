import React from 'react';
import './design.scss'
import Expetience from '../experience/Experience';
import Catalog from '../catalog/Catalog';
import img1 from '../../images/tt1.png'
import Price from '../price/Price';
import Projects from '../projects/Projects';
import Quality from '../quality/Quality';
import Employment from '../../employment/Employment';
import Result from '../result/Result';
import HelpRequest from '../helpRequest/HelpRequest';
import Reviews from '../reviews/Reviews';
import Blog from '../blog/Blog';
import Team from '../team/Team';
import ProcessWork from '../processWork/ProcessWork';
function Design({ projects }) {
    const experienceData = [
        {
            title: "25 проектов",
            titleImg: "",
            subTitle: "Сделали за прошлый год. Все - уникальны."
        },
        {
            title: "37 лет",
            titleImg: "",
            subTitle: "Суммарный опыт специалистов студии в дизайне"
        },
        {
            title: "30 млн. руб.",
            titleImg: "",
            subTitle: "Сумма, сэкономленная клиентам при закупке мебели"
        },
        {
            title: "30 млн. руб.",
            titleImg: "путь к картинке EXP.svg",
            subTitle: "Удовольствие от возможности взять всё под свой контроль."

        }
    ]

    return (
        <div className='design'>
            <section className='top-content'>
                <div className="img-wrapp">
                    <img src={img1} alt="img" />
                    <h2 className='img__title'>3D-дизайн</h2>
                </div>
                <div className="individual">
                    <Expetience experienceData={experienceData} />
                </div>

            </section>
            <Price />
            {projects ? <Projects projects={projects} /> : null}
            <Employment />
            <Quality />
            <ProcessWork />
            <Result />
            <Reviews />
            <Team />
            <Blog />
            <Catalog title={"ЕЩЕ НЕ ГОТОВЫ ЗАКАЗАТЬ РЕМОНТ?"} />
            <HelpRequest />
        </div>
    );
}

export default Design;