import React from 'react';
import'./helpRequest.scss'
function HelpRequest() {
    return ( 
        <section className="helpRequest">
            <div className="helpRequest__inner">
                <h5 className="helpRequest__title">Оставьте заявку и мы поможем вам с проектом</h5>
                <button className="helpRequest__btn">Оставить заявку</button>
            </div>
        </section>
     );
}

export default HelpRequest;