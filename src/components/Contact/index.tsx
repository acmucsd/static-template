import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { siteConfigs } from 'configs';
import './style.less';

library.add(fab);

const Contact: React.FC = () => (
  <div id="contact" className="contact">
    <span className="contactLabel">Contact Us</span>
    <span className="emailContact">
      <a href={`mailto:${siteConfigs.contactEmail}`}>{siteConfigs.contactEmail}</a>
    </span>
    <div className="contactIcons">
      <a href={siteConfigs.links.facebook} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon color="white" icon={['fab', 'facebook']} size="lg"/>
      </a>
      <a href={siteConfigs.links.medium} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon color="white" icon={['fab', 'medium']} size="lg"/>
      </a>
      <a href={siteConfigs.links.github} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon color="white" icon={['fab', 'github']} size="lg"/>
      </a>
      <a href={siteConfigs.links.instagram} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon color="white" icon={['fab', 'instagram']} size="lg"/>
      </a>
    </div>
  </div>
);

export default Contact;
