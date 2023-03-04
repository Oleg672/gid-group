import React from 'react';
import './services.scss'
import img1 from '../../images/s1.png'
import img2 from '../../images/s2.png'
import img3 from '../../images/s3.png'
import img4 from '../../images/s4.png'
function Services() {
    return (
        <section className="services">
            <h2 className="section-title">ОСНОВНЫЕ УСЛУГИ</h2>

            <ul className="services__list">
                <li className="services__item">
                    <div className="services__img-wrapper">
                        <img className='services__img' src={img2} alt="services" />
                    </div>
                    <h4 className="services__title">3D-дизайн</h4>
                    <p className="services__text">Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений. </p>
                </li>
                <li className="services__item">
                    <div className="services__img-wrapper">
                        <img className='services__img' src={img1} alt="services" />
                    </div>
                    <h4 className="services__title">Ремонт</h4>
                    <p className="services__text">Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.</p>
                </li>
                <li className="services__item">
                    <div className="services__img-wrapper">
                        <img className='services__img' src={img4} alt="services" />
                    </div>
                    <h4 className="services__title">Строительство</h4>
                    <p className="services__text">Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.</p>
                </li>
                <li className="services__item">
                    <div className="services__img-wrapper">
                        <img className='services__img' src={img3} alt="services" />
                    </div>
                    <h4 className="services__title">Ландшафтный дизайн</h4>
                    <p className="services__text">Идейные соображения высшего порядка обеспечивает актуальность глубокомысленных рассуждений. </p>
                </li>
            </ul>

        </section>
    );
}

export default Services;