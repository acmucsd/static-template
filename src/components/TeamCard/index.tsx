import React from 'react';
import './style.less';

interface Props {
  pic: string;
  member: string;
  role: string;
}
const TeamCard: React.FC<Props> = ({pic, member, role}) => {
  return (
    <div className="TeamCard">
      <img className="image" src={pic} alt="Avatar"/>
      <div className="text-container">
        <p className="name"><b>{member}</b></p>
        <p className="role">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
