import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import HelpRequest from '../helpRequest/HelpRequest';
import ProjectsCard from '../projects/ProjectsCard';
import'./projectsPages.scss'
function ProjectsPages({ projects}) {
    return (
        <>
            <div  className="filter">
                <ul className="filter__list">
                    <li className="filter__item">Архитектура</li>
                    <li className="filter__item">3D-дизайн</li>
                    <li className="filter__item">Ремонт</li>
                    <li className="filter__item">Строительство</li>
                </ul>
            </div>
            {projects ? <ProjectsCard projects={projects} /> : null}
            <HelpRequest/>
            <Footer/>

        </>
    );
}

export default ProjectsPages;