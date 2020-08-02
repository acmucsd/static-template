import React from 'react';
import './style.less';
import TeamCard from '../TeamCard';
import emily from "assets/emily.png";
import person from "assets/person.svg";

const Team: React.FC = () => {
  return (
    <div className="Team">
      <h2>Our Team <img alt="person" src={person}></img></h2>
      <div className="teamCardContainer">
        <TeamCard member="Emily" role="Supreme Leader" pic={emily}/>
        <TeamCard member="Emily" role="Supreme Leader" pic={emily}/>
        <TeamCard member="Emily" role="Supreme Leader" pic={emily}/>
        <TeamCard member="Emily" role="Supreme Leader" pic={emily}/>
      </div>
    </div>
  );
};

export default Team;
