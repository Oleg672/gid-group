import React ,{ useState, useEffect} from 'react';
import Catalog from '../../components/catalog/Catalog';
import Expetience from '../../components/experience/Experience';
import Footer from '../../components/footer/Footer';
import Instagram from '../../components/instagram/Instagram';
import MapWork from '../../components/map/Map';
import Price from '../../components/price/Price';
import Projects from '../../components/projects/Projects';
import Quality from '../../components/quality/Quality';
import Services from '../../components/services/Services';
import Home from '../../components/home/Home';

function HomePage({ projects}) {
    const [workMap, setWorkMap] = useState();
    const [instagram, setInstagram] = useState();



    useEffect(() => {
        fetch("http://localhost:3001/workMap")
            .then(res => res.json())
            .then(
                (result) => {
                    setWorkMap(result)

                },
                (error) => {
                    console.log(error)
                }
            )
    }, []);
    useEffect(() => {
        fetch("http://localhost:3001/instagram")
            .then(res => res.json())
            .then(
                (result) => {
                    setInstagram(result)

                },
                (error) => {
                    console.log(error)
                }
            )
    }, []);
    return (
        <>  
            <Home />
            <Expetience />
            <Price />
            <Services />
            {projects ? <Projects projects={projects} /> : null}
            {workMap ? <MapWork workMap={workMap} /> : null}
            <Quality />
            {instagram ? <Instagram instagram={instagram} /> : null}
            <Catalog />
            <Footer />
        </>
    );
}

export default HomePage;