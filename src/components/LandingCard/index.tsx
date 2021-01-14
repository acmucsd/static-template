import React from 'react';
import leftside from 'assets/left_diamonds.svg';
import rightside from 'assets/right_diamonds.svg';
import './style.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import TypistLoop from 'components/TypistLoop';
library.add(faChevronDown);

const LandingCard: React.FC = () => {
  return (
    <div className="LandingCard">
      <div className="backdrop-wrapper">
        <img src={leftside} className="backdrop-left" alt="backdrop" />
        <img src={rightside} className="backdrop-right" alt="backdrop" />
        <div className="arrow">
          <div>Learn More</div>
          <br></br>
          <FontAwesomeIcon
            icon="chevron-down"
            style={{ cursor: 'pointer' }}
            onClick={() => document.getElementById('description')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
        <span className="landing-text">
          <h1 className="landing-title">ACM Devs</h1>
          <TypistLoop
            words={[
              'This could be your slogan.',
              'Do you like to code?',
              'Nah coding takes too much time',
              'Bruh what are you talking about this IS code',
              '*life crisis*: wait are we code?',
              "how can you not realize that we're just lines on a vscode editor?",
              'dang that hurts',
              'whatever lets just get back to the regularly scheduled programming',
              "oh right we're supposed to promote the cool things you can do with this template",
            ]}
          />
        </span>
      </div>
    </div>
  );
};

export default LandingCard;
