import React from 'react';
import icon from '../images/download.svg';
import resumeUrl from '../images/Resume-v2.docx.pdf'
export default function Resume() {

  return (
    <div className='resumepage'>
    <div className='resumecard card mx-auto rounded-lg shadow'>
      <h1>Resume</h1>
      <a className='download' href={resumeUrl} target="_blank" download = "My_File.pdf" ><img className='icon' src={icon} alt="Download Resume"></img></a>
     
      <ul>
        <h3>front-end proficiencies</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <ul>
        <h3>Back-end proficiencies</h3>
        <li>Apis</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
    </div>
  );
}
