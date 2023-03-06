import React from 'react';
import './projects.scss'
import ProjectsCard from './ProjectsCard';
function Projects({ projects }) {
    return (
        <section className="projects">
            <h2 className="section-title">НАШИ ПРОЕКТЫ</h2>
            <ProjectsCard projects={projects}/>

        </section>
    );
}

export default Projects;