import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import Modal from '../modal/Modal';
import Nav from '../nav/Nav';
import './header.scss'

function Header({ navOpened, setNavOpened }) {
    const [scroll, setScroll] = useState(false);
    const [modal, setModal] = useState(false);

    let location = useLocation();

    const handleScroll = () => {
        window.scrollY > 100 ? setScroll(true) : setScroll(false)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Modal modal={modal} setModal={setModal} >
                <div className="call">
                    <h6 className="call__title">Обратный звонок</h6>
                    <input className="call__name" type="text" placeholder="Ваше имя"></input>
                    <input className="call__phone" placeholder="Номер телефона" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
                    <button className='call__btn' >Позвонить мне</button>
                </div>
                
            </Modal>
            <header className={!navOpened ? "header" : "header header-nav"}>
                <div className={location.pathname !== "/" ? "header__inner-mini" : "header__inner"}>
                    <div className={scroll || location.pathname !== "/" ? "header__Container header__Container-mini" : "header__Container"}>
                        <div onClick={() => setNavOpened(!navOpened)} className={!navOpened ? "burger" : "burger close-btn"}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <NavLink to="/"><img className='header__logo' src={process.env.PUBLIC_URL + "/images/Logo.png"} alt="logo" /></NavLink>

                        <svg onClick={() => setModal(true)} className='phone' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3346 20.6101L21.8317 18.1119C22.1681 17.7796 22.5936 17.5521 23.0567 17.4571C23.5198 17.3621 24.0005 17.4036 24.4404 17.5766L27.4839 18.7922C27.9284 18.9728 28.3097 19.2809 28.5795 19.6779C28.8493 20.0748 28.9956 20.5428 29 21.0228V26.5991C28.9974 26.9256 28.9288 27.2482 28.7983 27.5475C28.6678 27.8468 28.4781 28.1166 28.2406 28.3406C28.0031 28.5646 27.7228 28.7383 27.4165 28.8511C27.1102 28.9638 26.7842 29.0134 26.4582 28.9969C5.13184 27.6697 0.82866 9.60246 0.0148465 2.68783C-0.0229313 2.34827 0.0115853 2.00456 0.116125 1.67931C0.220665 1.35405 0.39286 1.05463 0.62138 0.800733C0.8499 0.546836 1.12957 0.344221 1.44198 0.206217C1.7544 0.0682136 2.09248 -0.00205115 2.43399 4.55797e-05H7.81854C8.29904 0.00146842 8.76812 0.146666 9.16545 0.416964C9.56279 0.687261 9.87021 1.0703 10.0482 1.5168L11.2633 4.56147C11.442 4.99985 11.4875 5.48116 11.3944 5.9453C11.3012 6.40944 11.0734 6.83582 10.7394 7.17119L8.24217 9.66938C8.24217 9.66938 9.68028 19.4056 19.3346 20.6101Z" fill="#BDBDBD" />
                        </svg>

                    </div>
                </div>

            </header>
            <Nav navOpened={navOpened} setNavOpened={setNavOpened}/>
        </>
    );
}

export default Header;