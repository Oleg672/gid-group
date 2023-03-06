import React from 'react';
import ProjectPageSection from './ProjectPageSection';
function ProjectPageProces({ img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, }) {
    return (
        <>
            <ProjectPageSection
                number={"01"}
                title={"Выбор стиля проекта"}
                style={"Был выбран - Скандинавский стиль"}
                text={"Наши дизайнеры постарались выбрать  самые современные элементы дизайна и мебель в стиле проекта под запросы клиента."}
                messageTitle={"Заказчик"}
                messageText={"Хочется видеть смешение цветов - зелёного, серого и черного в дизайне. Уж больно нравятся такие цвета))"}
            >
                <div className="project__img-wrap--2-1">
                    <img className='project__img-full' src={img11} alt="Проект" />
                    <img className='project__img-full' src={img12} alt="Проект" />
                </div>

            </ProjectPageSection>
            <ProjectPageSection
                number={"02"}
                title={"Чертежи и согласование с закачиком идей по проекту"}
                style={"Был выбран - Скандинавский стиль"}
                text={"Наши дизайнеры постарались выбрать  самые современные элементы дизайна и мебель в стиле проекта под запросы клиента."}
                messageTitle={"Заказчик"}
                messageText={"Да, утверждаем выбранные идеи по стилю проекта!"}
                messageTitleBlak={"Арт-директор"}
                messageTextBlak={"Отлично! Тогда согласовываем сроки и договор по проекту! И наши сотрудники выпонят работу в наилучшем качестве."}
            >
                <div className="project__img-container">
                    <div className="project__img-wrap--3">
                        <img className='project__img-full' src={img5} alt="Проект" />
                        <img className='project__img-full' src={img6} alt="Проект" />
                        <img className='project__img-full' src={img7} alt="Проект" />
                    </div>
                    <img className='project__img-full' src={img8} alt="Проект" />
                </div>

            </ProjectPageSection>
            <ProjectPageSection
                number={"03"}
                title={"3D визуализация проекта"}
                style={"Был выбран - Скандинавский стиль"}
                text={"Наши дизайнеры постарались выбрать  самые современные элементы дизайна и мебель в стиле проекта под запросы клиента."}
                messageTitle={"Заказчик"}
                messageText={"Отличные визы. Очень нравятся! Надеюсь, так же будет и “в живую”))"}
                messageTitleBlak={"Арт-директор"}
                messageTextBlak={"Наши дизайнеры и мастера настоящие профессионалы. Уверены, Вы останетесь довольны результатом!"}
            >

                <div className="project__img-wrap--2">
                    <img className='project__img-full' src={img9} alt="Проект" />
                    <img className='project__img-full' src={img10} alt="Проект" />
                </div>


            </ProjectPageSection>
            <ProjectPageSection
                number={"04"}
                title={"Ремонт "}
                style={"Был выбран - Скандинавский стиль"}
                text={"Наши дизайнеры постарались выбрать  самые современные элементы дизайна и мебель в стиле проекта под запросы клиента."}
            >
                <div className="project__img-wrap--2">
                    <img className='project__img-full' src={img2} alt="Проект" />
                    <img className='project__img-full' src={img3} alt="Проект" />
                </div>
                <img className='project__img-full' src={img4} alt="Проект" />
                <div className="project__img-container">
                    <div className="project__img-wrap--3">
                        <img className='project__img-full' src={img5} alt="Проект" />
                        <img className='project__img-full' src={img6} alt="Проект" />
                        <img className='project__img-full' src={img7} alt="Проект" />
                    </div>
                    <img className='project__img-full' src={img8} alt="Проект" />
                </div>


            </ProjectPageSection>

            <ProjectPageSection
                number={"05"}
                title={"Сдача готового объекта"}
                style={"Был выбран - Скандинавский стиль"}
                text={"Наши дизайнеры постарались выбрать  самые современные элементы дизайна и мебель в стиле проекта под запросы клиента."}
                messageTitle={"Заказчик"}
                messageText={"Спасибо вам за превосходную работу! Очень довольны результатом))"}
                messageTitleBlak={"Арт-директор"}
                messageTextBlak={"Мы делаем лучшее для лучших! Спасибо вам, что обратились в нашу компанию))"}
            >

                <div className="project__img-container">
                    <img className='project__img-full' src={img4} alt="Проект" />
                </div>


            </ProjectPageSection>















        </>
    );
}

export default ProjectPageProces;