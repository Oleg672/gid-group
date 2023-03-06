import React from 'react';
function ProjectMessage({ color, messageTitle, messageText }) {
    return (
        <>
            <div className={color ? "project-process__message" : "project-process__message  black"}>
                <h6 className="project-process__message-title">{messageTitle}</h6>
                <p className="project-process__message-text">{messageText}</p>
            </div>
        </>
    );
}

export default ProjectMessage;