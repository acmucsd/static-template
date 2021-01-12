import React from 'react';
import './style.less';
import heart from '../../assets/heart.svg';
import DescriptionImg from '../../assets/description_image.png';

const Description: React.FC = () => (
  <div className="description" id="description">
    <h2>A Community of Developers <img alt="heart icon" src={heart}></img> </h2>
    <div className="description-content">
      <span className="text">
        Ay wassup gamers its jennifer back with another minecraft
        livestream last time we lost our cat fluffy because some one killed
        it we dont know who did it but today we will avenge our fluffy friend
        first well need one bar of melon ice cream and a bottle of water, mix
        them together into a cup and drink it because were going to have a
        wild ride also were going to need a sad playlist because were still
        sad about fluffys death ok i miss you buddy were gonna kill the
        ender dragon for ya its 4 am
      </span>
      <img className="description-image" src={DescriptionImg} alt="It's us!" />
    </div>
  </div>
);

export default Description;
