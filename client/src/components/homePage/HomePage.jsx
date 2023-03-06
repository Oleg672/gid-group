import React, { useState, useEffect } from 'react';
import Catalog from '../../components/catalog/Catalog';
import Expetience from '../../components/experience/Experience';
import Instagram from '../../components/instagram/Instagram';
import MapWork from '../../components/map/Map';
import Price from '../../components/price/Price';
import Projects from '../../components/projects/Projects';
import Quality from '../../components/quality/Quality';
import Services from '../../components/services/Services';
import Home from '../../components/home/Home';

function HomePage({ projects, setNavOpened }) {
    const [workMap, setWorkMap] = useState();
    const [experienceData, setExperienceData] = useState();
    const [instagram, setInstagram] = useState();

    useEffect(() => {
        fetch("/experience")
            .then(res => res.json())
            .then(
                (result) => {
                    setExperienceData(result)

                },
                (error) => {
                    console.log(error)
                }
            )
    }, []);
    useEffect(() => {
        fetch("/workMap")
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
        fetch("/instagram")
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
            {experienceData?<Expetience experienceData={experienceData}/>:null}
            <Price setNavOpened={setNavOpened}/>
            <Services />
            {projects ? <Projects projects={projects} /> : null}
            {workMap ? <MapWork workMap={workMap} /> : null}
            <Quality />
            {instagram ? <Instagram instagram={instagram} /> : null}
            <Catalog title={"ПОЛУЧИТЕ КАТАЛОГ НАШИХ ПРОЕКТОВ"}/>
        </>
    );
}

export default HomePage;