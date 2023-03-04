import ProjectsPages from './components/ProjectsPages/ProjectsPages';
import HomePage from './components/homePage/HomePage';
import ProjectPage from './components/projectPage/ProjectPage';
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.scss';
import './media.scss';
import Header from './components/header/Header';
function App() {
  const [navOpened, setNavOpened] = useState(false);

  const [projects, setProjects] = useState();
  const [modal, setModal] = useState(false);

  function addProjects(value) {
    return setProjects(value);
  }
  // function scrollToTop(){
  //  return window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // }
  // }
  useEffect(() => {
    fetch("http://localhost:3001/projects")
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
        <Route path="/git-group" element={<HomePage projects={projects} />} />
        <Route path="/projects" element={<ProjectsPages projects={projects} navOpened={navOpened} setNavOpened={setNavOpened} />} />
        <Route path="/project" element={<ProjectPage navOpened={navOpened} setNavOpened={setNavOpened} />} />
      </Routes>
    </>


  );
}

export default App;
