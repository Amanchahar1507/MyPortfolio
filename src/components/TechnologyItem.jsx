import React from 'react';

const TechnologyItem = ({ imageSrc, title }) => (
  <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="col-lg-3 col-md-4 col-sm-6 service-item">
    <div className="service-icon"><i className="fa fa-desktop"></i></div>
    <h4 className="service-title"><img src={imageSrc} alt={`${title} icon`}></img></h4>
    <p className="service-description text-center">{title}</p>
  </div>
);

export default TechnologyItem;
