import React from 'react';
import TechnologyItem from './TechnologyItem';
import html from "../images/html.svg";
import nextjs from "../images/nextjs.png";
import css from "../images/css.svg";
import javascript from "../images/javascript.svg";
import redux from "../images/redux.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.svg"
import node from "../images/node.svg"
import reacticon from "../images/react1.svg"
import MongoDB from "../images/mongodb.png"
import sql from "../images/sql.png"
import github from "../images/github3.svg"

const technologies = [
  { imageSrc: reacticon, title: "React" },
  { imageSrc: javascript, title: "JavaScript" },
  { imageSrc: node, title: "Node.js" },
  { imageSrc: redux, title: "Redux" },
  { imageSrc: nextjs, title: "Next.js" },
  { imageSrc: html, title: "HTML5" },
  { imageSrc: css, title: "CSS" },
  { imageSrc: bootstrap, title: "Bootstrap" },
  { imageSrc: tailwind, title: "Tailwind UI" },
  { imageSrc: MongoDB, title: "MongoDB" },
  { imageSrc: sql, title: "MySQL" },
  { imageSrc: github, title: "Github" },
];

const TechnologySection = () => (
  <section id="Technology">
    <div className="container technology">
      <div className="row">
        <div className="col-md-12">
          <h3 data-aos="flip-up" className="section-title">Technologies</h3>
          <div className="section-title-divider"></div>
        </div>
      </div>
      <div className="row">
        {technologies.map((tech, index) => (
          <TechnologyItem key={index} imageSrc={tech.imageSrc} title={tech.title} />
        ))}
      </div>
    </div>
  </section>
);

export default TechnologySection;
