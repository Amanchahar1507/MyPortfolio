import React from 'react';

const ProjectItem = ({ title, liveLink, githubLink, modalTarget, isMainProject, image }) => {
  const columnClass = isMainProject ? "col-12" : "col-md-6";

  return (
    <div className={columnClass + " project-item"}>
      <a className={`portfolio-item ${image}`}>
        <div className="details">
          <h4>{title}</h4>
          <div className='mogo'>
            <span id='live'><a className='btn m-3 btn-dark' href={liveLink} rel="noreferrer" target="_blank">live link</a></span>
            <span id='code'><a className='btn m-3 btn-dark' href={githubLink} rel="noreferrer" target="_blank">github</a></span>
            <span id='preview'><a className='btn m-3 btn-dark' href={`#${modalTarget}`} data-bs-toggle="modal" data-bs-target={`#${modalTarget}`} >Preview</a></span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectItem;
