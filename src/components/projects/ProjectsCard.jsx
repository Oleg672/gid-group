import React from 'react';
import { NavLink } from 'react-router-dom';
function ProjectsCard({ projects }) {
    return (
        <div className="projects__cards-wrapper">
            <ul className="projects__cards">
                {projects.map((item,index) => {
                    return ( 
                        <li key={index} className="projects__card">
                            <div className="projects__img-inner">
                                <NavLink to="/project">
                                    <button className='projects__view-project'>Смотреть проект</button>
                                </NavLink>
                                <img className='projects__img' src={process.env.PUBLIC_URL + "/" + item.images} alt="card" />
                            </div>
                            <div className="projects__desc">
                                <h6 className="projects__title">{item.title}</h6>
                                <div className="projects__desc-inner">
                                    <span className="projects__style">{item.style}</span>
                                    <span className="projects__space">{item.square}</span>
                                </div>

                            </div>
                        </li>
                    )

                })}

            </ul>
            <button className='projects__load'><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.65907 0H9.9924V8.33811H8.32573V2.48976C6.01685 3.45651 4.1136 5.19314 2.93925 7.40469C1.76489 9.61624 1.39184 12.1663 1.88345 14.6219C2.37506 17.0774 3.70103 19.287 5.63614 20.8753C7.57124 22.4636 9.99617 23.3327 12.4991 23.335C15.1568 23.3376 17.7227 22.3626 19.7087 20.5955C21.6947 18.8284 22.9622 16.3925 23.2701 13.7512C23.5779 11.1099 22.9047 8.44748 21.3784 6.27051C19.8522 4.09353 17.5794 2.55387 14.9924 1.94445V0.236803C17.8579 0.820193 20.4282 2.39029 22.2563 4.67391C24.0843 6.95754 25.0544 9.81015 24.9976 12.7354C24.9409 15.6607 23.861 18.4736 21.9458 20.6845C20.0306 22.8955 17.4013 24.3646 14.5154 24.8363C11.6294 25.3081 8.66958 24.7525 6.15072 23.2664C3.63187 21.7802 1.71346 19.4575 0.729271 16.7024C-0.254918 13.9472 -0.242593 10.934 0.7641 8.18702C1.77079 5.44003 3.70814 3.1331 6.23907 1.66762H1.65907V0Z" fill="#F2F2F2" />
            </svg>
                Еще проекты</button>
        </div>);
}

export default ProjectsCard;