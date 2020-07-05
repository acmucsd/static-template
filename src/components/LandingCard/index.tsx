import React from 'react';
import backdrop from "assets/backdrop.png";
import './style.less';
import { siteConfigs } from 'configs';

const LandingCard: React.FC = () => {
  return (
    <div className="LandingCard">
      <div className='backdrop-wrapper'>
        <img src={backdrop} className='backdrop' alt='backdrop'/>
      </div>
      <div className='landing-text'>
        <h1 className="landing-title">ACM Design</h1>
        <p className='landing-slogan'>slogan</p>
      </div>

      <div className='arrow'>
        <div>Learn More</div>
        <div>V</div>
      </div>
      
    </div>
  );
};

export default LandingCard;
