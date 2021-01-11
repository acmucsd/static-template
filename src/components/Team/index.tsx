import React from 'react';
import './style.less';
import TeamCard from '../TeamCard';
import { team } from "../../configs/team"
import person from "assets/person.svg";
// import emily from "assets/emily.png";

const Team: React.FC = () => {
  return (
    <div className="Team" id="team">
      <h2>Our Team <img alt="person" src={person}></img></h2>
      <div className="teamCardContainer">
        { team.map((teamMember => (
          <TeamCard member={teamMember.name} role={teamMember.role} pic={teamMember.profilePicture} plugs={teamMember.plugs}/>
        )))}
      </div>
    </div>
  );
};

export default Team;
