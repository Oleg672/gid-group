import React from 'react';
import ProjectMessage from './ProjectMessage';
function ProjectPageSection({ number, title, style, text, messageTitle, messageText, messageTitleBlak, messageTextBlak, children }) {
    return (
        <section className="project-process">
            <div className="project-process__container">
                <div className="project-process__content">
                    <div className="project-process__number">{number}</div>
                    <div className="project-process__inner">
                        <h4 className="project-process__title">{title}</h4>
                        <span className="project-process__style">{style}</span>
                        <p className="project-process__text">{text}</p>
                    </div>
                </div>
                <div className="project-process__messages">
                    {messageTitle ? <ProjectMessage color={true} messageTitle={messageTitle} messageText={messageText} /> : null}
                    {messageTitleBlak ? <ProjectMessage color={false} messageTitle={messageTitleBlak} messageText={messageTextBlak} /> : null}
                </div>
            </div>
            {children}
        </section>
    );
}

export default ProjectPageSection;