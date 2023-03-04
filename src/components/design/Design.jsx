import React from 'react';
import Expetience from '../experience/Experience';
function Design() {
    const experienceData = [
        {
            title: "24/7",
            subTitle: "Ваш личный менеджер всегда на связи"
        },
        {
            title: "Наблюдение",
            subTitle: "На объекте ведётся круглосуточное видеонаблюдение"
        },
        {
            title: "7 лет",
            subTitle: "Гарантии на все работы"
        },
        {
            title: "Документация",
            subTitle: "Подготовим и утвердим всю проектную документацию"
            
        }
    ]

    return (
        <>
            <Expetience experienceData={experienceData} />
        </>
    );
}

export default Design;