import React from 'react';
import './team.scss'
import team1 from '../../images/team1.png'
import team2 from '../../images/team2.png'
import team3 from '../../images/team3.png'
import team4 from '../../images/team4.png'
function Team() {
    return (
        <section className='team'>
            <h2 className="section-title">НАША КОМАНДА</h2>
            <div className="team__container">
                <ul className="team__list">
                    <li className="team__item">
                        <div className="team__img-wrapp">
                            <img className='team__img' src={team1} alt="наша команда" />
                        </div>
                        <div className="team__content">
                            <h6 className="team__title">Александр Троицкий</h6>
                            <p className="team__title-desc"> Арт-директор GID</p>
                            <p className="team__text">20 лет в ремонтной компании. Курирует крупные проекты.</p>
                        </div>
                    </li>
                    <li className="team__item">
                        <div className="team__img-wrapp">
                            <img className='team__img' src={team2} alt="наша команда" />
                        </div>
                        <div className="team__content">
                            <h6 className="team__title">Александр Троицкий</h6>
                            <p className="team__title-desc"> Арт-директор GID</p>
                            <p className="team__text">20 лет в ремонтной компании. Курирует крупные проекты.</p>
                        </div>
                    </li>
                    <li className="team__item">
                        <div className="team__img-wrapp">
                            <img className='team__img' src={team3} alt="наша команда" />
                        </div>
                        <div className="team__content">
                            <h6 className="team__title">Александр Троицкий</h6>
                            <p className="team__title-desc"> Арт-директор GID</p>
                            <p className="team__text">20 лет в ремонтной компании. Курирует крупные проекты.</p>
                        </div>
                    </li>
                    <li className="team__item">
                        <div className="team__img-wrapp">
                            <img className='team__img' src={team4} alt="наша команда" />
                        </div>
                        <div className="team__content">
                            <h6 className="team__title">Александр Троицкий</h6>
                            <p className="team__title-desc"> Арт-директор GID</p>
                            <p className="team__text">20 лет в ремонтной компании. Курирует крупные проекты.</p>
                        </div>
                    </li>
                </ul>
                <button className='load-btn'><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.65907 0H9.9924V8.33811H8.32573V2.48976C6.01685 3.45651 4.1136 5.19314 2.93925 7.40469C1.76489 9.61624 1.39184 12.1663 1.88345 14.6219C2.37506 17.0774 3.70103 19.287 5.63614 20.8753C7.57124 22.4636 9.99617 23.3327 12.4991 23.335C15.1568 23.3376 17.7227 22.3626 19.7087 20.5955C21.6947 18.8284 22.9622 16.3925 23.2701 13.7512C23.5779 11.1099 22.9047 8.44748 21.3784 6.27051C19.8522 4.09353 17.5794 2.55387 14.9924 1.94445V0.236803C17.8579 0.820193 20.4282 2.39029 22.2563 4.67391C24.0843 6.95754 25.0544 9.81015 24.9976 12.7354C24.9409 15.6607 23.861 18.4736 21.9458 20.6845C20.0306 22.8955 17.4013 24.3646 14.5154 24.8363C11.6294 25.3081 8.66958 24.7525 6.15072 23.2664C3.63187 21.7802 1.71346 19.4575 0.729271 16.7024C-0.254918 13.9472 -0.242593 10.934 0.7641 8.18702C1.77079 5.44003 3.70814 3.1331 6.23907 1.66762H1.65907V0Z" fill="#F2F2F2" />
                </svg>
                    Еще сотрудники</button>
            </div>
        </section>
    );
}

export default Team;
