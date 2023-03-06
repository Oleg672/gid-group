import React from 'react';
import MapList from './Map-list';
import './Map.scss';
function MapWork({ workMap }) {
    return (
        <section className="map-work">
            <h3 className="section-title">6 ЭТАПОВ ОТ ЗАЯВКИ ДО СДАЧИ ГОТОВОГО ОБЪЕКТА</h3>
            <div className="map-work__container">
                <ul className="map-work__list">
                    {workMap.map((item, index) => {return <MapList key={index} workMap={item} /> })}
                </ul>
                <button className='map-work__btn'>
                    <span>Начать</span>
                    <svg width="117" height="16" viewBox="0 0 117 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M116.707 8.70712C117.098 8.31659 117.098 7.68343 116.707 7.2929L110.343 0.928942C109.953 0.538417 109.319 0.538417 108.929 0.928942C108.538 1.31947 108.538 1.95263 108.929 2.34316L114.586 8.00001L108.929 13.6569C108.538 14.0474 108.538 14.6806 108.929 15.0711C109.319 15.4616 109.953 15.4616 110.343 15.0711L116.707 8.70712ZM-8.74228e-08 9L116 9.00001L116 7.00001L8.74228e-08 7L-8.74228e-08 9Z" fill="black" />
                    </svg>

                </button>
            </div>

        </section>
    );
}

export default MapWork;