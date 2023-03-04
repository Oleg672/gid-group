import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss'
function Home() {
    return (
        <section className="home">
            <h3 className="home__title">Лучшее для лучших</h3>
            <div className="home__ContainerBTN">
                <Link to="/projects"><button className="btn_home">Проекты</button></Link>
                <button className="btn_home">Расчитать стоимость</button>
            </div>
        </section>
    );
}

export default Home;