import React from 'react';
function ProjectPageDescription({img1, img2, img3, img4, img5, img6, img7, img8}) {
    return ( 
        <>
        <div className="description-mini__wrapper">
            <img className='project__img-full' src={img1} alt="Проект" />
            <div className="description-mini">
                    <h4 className="description-mini__title">Квартира на Рижской</h4>
                    <span className="description-mini__address">ЖК - “Чистые пруды”</span>
                    <span className="description-mini__space">94 м2</span>
                    <span className="description-mini__autor">Дизайнер - <span className="description-mini__autor--yellow">Андрей Иванов</span> </span>
            </div>
        </div>
        
            <div className="project__content">
                <div className="project__content_title">
                    <h4 className="project__title">Квартира на Рижской</h4>
                    <span className="project__style">Стиль - Скандинавский</span>
                    <span className="project__space">94 м2</span>
                </div>
                <div className="project__content_text">
                    <div className="text">
                        Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений. Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи.
                    </div>
                </div>
            </div>
            <div className="project__img-wrap--2">
                <img className='project__img-full' src={img2} alt="Проект" />
                <img className='project__img-full' src={img3} alt="Проект" />
            </div>
            <img className='project__img-full' src={img4} alt="Проект" />

            <div className="project__content">
                <div className="project__content_title">
                    <h4 className="project__title">Современная кухня в Скандинавском стиле</h4>
                </div>
                <div className="project__content_text">
                    <div className="text">
                        Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений. Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи.
                        <br />
                        <br />
                        Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи.

                    </div>
                </div>
            </div>
            <div className="project__img-wrap--3">
                <img className='project__img-full' src={img5} alt="Проект" />
                <img className='project__img-full' src={img6} alt="Проект" />
                <img className='project__img-full' src={img7} alt="Проект" />
            </div>
            <img className='project__img-full' src={img8} alt="Проект" />
            <div className="project__content">
                <div className="project__content_title">
                    <h4 className="project__title">Уютная спальня с личным просторным гардеробом</h4>
                </div>
                <div className="project__content_text">
                    <div className="text">
                        Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений. Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи.
                        <br />
                        <br />
                        Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи.
                    </div>
                </div>
            </div>
        </>

     );
}

export default ProjectPageDescription;