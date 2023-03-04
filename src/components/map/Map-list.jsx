import React from 'react';
function MapList({workMap}) {
    return ( 
        
            <li className="map-work__item">
                {/* <div className="map-work__item-number">{workMap.number}</div> */}
                <div className="map-work__item-container">
                   <img className='map-work__item-img' src={process.env.PUBLIC_URL +"/"+ workMap.images} alt="svg" />
                    <h6 className="map-work__item-title">{workMap.number} {workMap.title}</h6>
                    <div className="map-work__item-text">{workMap.text}</div>
                    <div className="map-work__input">
                        <input type="checkbox" name="map-work__item-checkbox" id={workMap.number} className='map-work__item-checkbox' />
                        {workMap.action?<label className='map-work__item-label' for={workMap.number}>{workMap.action}</label>:null}
                    </div>
                </div>
            </li>
    )
     
}

export default MapList;