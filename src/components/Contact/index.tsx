import React from 'react';

import FacebookLogo from '../../assets/facebook.svg';
import MediumLogo from '../../assets/medium.svg';
import GitHubLogo from '../../assets/github.svg';
import InstagramLogo from '../../assets/instagram.svg';
import { siteConfigs } from 'configs'
import './style.less';

const Contact: React.FC = () => (
  <div id="contact" className="contact">
    <span className="contactLabel">Contact Us</span>
    <span className="emailContact">
      <a href={`mailto:${siteConfigs.contactEmail}`}>{siteConfigs.contactEmail}</a>
    </span>
    <div className="contactIcons">
      <a href={siteConfigs.links.facebook}>
        <img src={FacebookLogo} alt="Facebook" />
      </a>
      <a href={siteConfigs.links.medium}>
        <img src={MediumLogo} alt="Medium" />
      </a>
      <a href={siteConfigs.links.github}>
        <img src={GitHubLogo} alt="GitHub" />
      </a>
      <a href={siteConfigs.links.instagram}>
        <img src={InstagramLogo} alt="Instagram" />
      </a>
    </div>
  </div>
);

export default Contact;
