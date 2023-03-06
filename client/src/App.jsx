import ProjectsPages from './components/ProjectsPages/ProjectsPages';
import HomePage from './components/homePage/HomePage';
import ProjectPage from './components/projectPage/ProjectPage';
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.scss';
import './media.scss';
import Header from './components/header/Header';
import Design from './components/design/Design';
import Repair from './components/repair/Repair';
import Footer from './components/footer/Footer';
function App() {
  const [navOpened, setNavOpened] = useState(false);

  const [projects, setProjects] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch("/projects")
      .then(res => res.json())
      .then(
        (result) => {
          setProjects(result)

        },
        (error) => {
          console.log(error)
        }
      )
  }, []);
  return (


    <>
      <Header setModal={setModal} navOpened={navOpened} setNavOpened={setNavOpened} />
      <Routes>
        <Route path="/" element={<HomePage projects={projects} />} />
        <Route path="/gid-group" element={<HomePage projects={projects} setNavOpened={setNavOpened} />} />
        <Route path="/projects" element={<ProjectsPages projects={projects} navOpened={navOpened} setNavOpened={setNavOpened} />} />
        <Route path="/project" element={<ProjectPage navOpened={navOpened} setNavOpened={setNavOpened} />} />
        <Route path="/3D-design" element={<Design projects={projects} />} />
        <Route path="/repair" element={<Repair navOpened={navOpened} setNavOpened={setNavOpened} />} />
      </Routes>
      <Footer />
    </>


  );
}

export default App;
