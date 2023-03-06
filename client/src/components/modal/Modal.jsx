import React from 'react';
import './modal.scss'


function Modal({ modal, setModal, children }) {
    const bodyScrollLock1 = require('body-scroll-lock');
    const disableBodyScroll1 = bodyScrollLock1.disableBodyScroll;
    const enableBodyScroll1 = bodyScrollLock1.enableBodyScroll;
    const targetElement1 = document.querySelector('body');
    modal ? disableBodyScroll1(targetElement1) : enableBodyScroll1(targetElement1);
    return (
        <div className={modal ? "modal modal-active" : "modal"}>
            <div className="modal__container">
                <div className="modal__container-btn">
                    <div onClick={() => setModal(false) } className="modal__close-btn">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {children}
            </div>

        </div>
    );
}

export default Modal;