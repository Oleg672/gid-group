import React, {useState} from 'react';
import HelpRequest from '../helpRequest/HelpRequest';
import ProjectPageDescription from './ProjectPageDescription';
import ProjectPageProces from './ProjectPageProces';
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.png'
import img8 from '../../images/8.png'
import img9 from '../../images/9.png'
import img10 from '../../images/10.png'
import img11 from '../../images/11.png'
import img12 from '../../images/12a.png'
import './ProjectPage.scss'


function ProjectPage() {

    const[checked,setChecked]=useState(true)

    return (
  
        <div className='project'>    
            <div className="filter">
                <ul className="filter__list">
                    <li onClick={()=>setChecked(true)} className={checked?"filter__item filter__item--active":"filter__item"}>Описание</li>
                    <li onClick={()=>setChecked(false)} className={!checked?"filter__item filter__item--active":"filter__item"}>Процесс</li>
                </ul>
            </div>
            {
            checked?
            <ProjectPageDescription img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} img7={img7} img8={img8} img9={img9} img10={img10} img11={img11} img12={img12}/>
            :
            <ProjectPageProces img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} img7={img7} img8={img8} img9={img9} img10={img10} img11={img11} img12={img12}/>
            }
            <HelpRequest />
            
        </div>
    );
}

export default ProjectPage;