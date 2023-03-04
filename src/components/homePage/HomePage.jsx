import React, { useState, useEffect } from 'react';
import Catalog from '../../components/catalog/Catalog';
import Expetience from '../../components/experience/Experience';
import Footer from '../../components/footer/Footer';
import Instagram from '../../components/instagram/Instagram';
import MapWork from '../../components/map/Map';
import Price from '../../components/price/Price';
import Projects from '../../components/projects/Projects';
import Quality from '../../components/quality/Quality';
import Services from '../../components/services/Services';
import Home from '../../components/home/Home';

function HomePage({ projects }) {
    const [workMap, setWorkMap] = useState();
    const [instagram, setInstagram] = useState();
    const experienceData = [
        {
            title:"100+",
            subTitle:"Реализованные проекты",
            desc:"Работаем с любой недвижимостью – от дворцов до квартир"
        },
        {
            title:"10 лет",
            subTitle:"Безупречная репутация",
            desc:"Наши специалисты постоянно стажируются у лидеров строительных работ"
        },
        {
            title:"3 года",
            subTitle:"Гарантии на все работы",
            desc:"Мы внимательно изучаем рынок отделочных материалов и инновационной техники"
        },
        {
            title:"Сроки",
            subTitle:"Процесс",
            desc:"Нужно лучшее – закажи это у лучших!"
        },
    ]


    useEffect(() => {
        fetch("http://localhost:3001/workMap")
            .then(res => res.json())
            .then(
                (result) => {
                    setWorkMap(result)

                },
                (error) => {
                    console.log(error)
                }
            )
    }, []);
    useEffect(() => {
        fetch("http://localhost:3001/instagram")
            .then(res => res.json())
            .then(
                (result) => {
                    setInstagram(result)

                },
                (error) => {
                    console.log(error)
                }
            )
    }, []);
    return (
        <>
            <Home />
            <Expetience experienceData={experienceData}/>
            <Price />
            <Services />
            {projects ? <Projects projects={projects} /> : null}
            {workMap ? <MapWork workMap={workMap} /> : null}
            <Quality />
            {instagram ? <Instagram instagram={instagram} /> : null}
            <Catalog />
            <Footer />
        </>
    );
}

export default HomePage;