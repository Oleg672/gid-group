import React, { useEffect, useRef, useState } from 'react';
import './reviews.scss'
import irina from '../../images/irina.png'
import autoririna from '../../images/autor-irina.png'





function Reviews() {
    const [carouselPosition, setCarouselPosition] = useState(0);
    const [sliderBTN, setSliderBTN] = useState(0);
    const [reviewsAutor, setReviewsAutor] = useState(0);
    const reviews__viewbord = useRef(null);
    // 
    // 
    const movement = (val) => {
        if (val === +1 && sliderBTN < reviewsAutor.length - 1) { setSliderBTN(sliderBTN => { return sliderBTN + val }) }
        if (val === -1 && sliderBTN > 0) { setSliderBTN(sliderBTN => { return sliderBTN + val }) }
        if (val != -1 && val != +1){ setSliderBTN(val) }
    }
    useEffect(() => {
        const widthViewbord = reviews__viewbord.current.getBoundingClientRect().width;
        setCarouselPosition(widthViewbord * sliderBTN);
        setReviewsAutor([
            {
                autorName: "Ирина Иванова",
                position: "Владелица картиры в ЖК “Черемушки",
                desc: "Ремонт квартиры под ключ, с выбранным стилем - Лофт",
                text: "Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии могут быть своевременно верифицированы. Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы...",
                img: ""
            },
            {
                autorName: "Ирина Иванова",
                position: "Владелица картиры в ЖК “Черемушки",
                desc: "Ремонт квартиры под ключ, с выбранным стилем - Лофт",
                text: "Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии могут быть своевременно верифицированы. Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы...",
                img: ""
            },
            {
                autorName: "Ирина Иванова",
                position: "Владелица картиры в ЖК “Черемушки",
                desc: "Ремонт квартиры под ключ, с выбранным стилем - Лофт",
                text: "Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии могут быть своевременно верифицированы. Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы...",
                img: ""
            },
            {
                autorName: "Ирина Иванова",
                position: "Владелица картиры в ЖК “Черемушки",
                desc: "Ремонт квартиры под ключ, с выбранным стилем - Лофт",
                text: "Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии могут быть своевременно верифицированы. Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы...",
                img: ""
            },
            {
                autorName: "Ирина Иванова",
                position: "Владелица картиры в ЖК “Черемушки",
                desc: "Ремонт квартиры под ключ, с выбранным стилем - Лофт",
                text: "Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии могут быть своевременно верифицированы. Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы...",
                img: ""
            }
        ])

    }, [sliderBTN])




    return (
        <section className="reviews">
            <h2 className="section-title">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
            <div className="carousel">
                <div className="carousel__container">


                    <button onClick={() => movement(-1)} className="carousel__btn carousel__btn--left">
                        <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 21.16L5.72874 12L15 2.82L12.1457 0L0 12L12.1457 24L15 21.16Z" fill="black" />
                        </svg>
                    </button>
                    <div ref={reviews__viewbord} className="reviews__viewbord">
                        <ul className="reviews__list" style={{ marginLeft: -carouselPosition + "px", transition: "margin ease-in-out 0.7s" }}>

                            {reviewsAutor ? reviewsAutor.map((item) => {
                                return (
                                    <li className="reviews__item">
                                        <div className="reviews__content">
                                            <div className="reviews__autor">
                                                <div className="reviews__autor-img-wrapp">
                                                    <img src={irina} alt="Ирина Иванова" className="reviews__autor-img" />
                                                </div>
                                                <div className="reviews__autor-header">
                                                    <div className="reviews__autorName">Ирина Иванова</div>
                                                    <div className="reviews__position">Владелица картиры в ЖК “Черемушки” </div>
                                                    <div className="reviews__desc">Ремонт квартиры под ключ, с выбранным стилем - Лофт</div>
                                                </div>

                                            </div>
                                            <p className="reviews__text">
                                                Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии могут быть своевременно верифицированы. Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы...
                                            </p>
                                            <button className="btn-normal">Читать полностью</button>


                                        </div>
                                        <div className="reviews__images">
                                            <img src={autoririna} alt="Oтзыв" />
                                        </div>
                                    </li>
                                )
                            }) : null}



                        </ul>
                    </div>
                    <button onClick={() => movement(+1)} className="carousel__btn carousel__btn--right">
                        <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 21.16L9.27126 12L0 2.82L2.85425 0L15 12L2.85425 24L0 21.16Z" fill="black" />
                        </svg>
                    </button>
                </div>
                <ul className="carousel__pagination">

                    {reviewsAutor ? reviewsAutor.map((item,index) => {
                        // 

                        return index == sliderBTN ? <li className="carousel__item carousel__item--active"></li>:<li onClick={() => movement(index)} className="carousel__item"></li>
                    }) : null}






                    {/* <li className="carousel__item"></li>
                    <li className="carousel__item carousel__item--active"></li>
                    <li className="carousel__item"></li>
                    <li className="carousel__item"></li>
                    <li className="carousel__item"></li>
                    <li className="carousel__item"></li> */}
                </ul>
            </div>
        </section>
    );
}

export default Reviews;