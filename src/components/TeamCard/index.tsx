import React from 'react';
import './style.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

interface Props {
  pic: string;
  member: string;
  role: string;
  plugs: any;
}
const TeamCard: React.FC<Props> = ({ pic, member, role, plugs }) => {
  const plugRender = [
    {
      img: <FontAwesomeIcon icon={['fab', 'facebook']} color="black" />,
      name: 'facebook',
      url: 'https://facebook.com',
    },
    {
      img: <FontAwesomeIcon icon={['fab', 'linkedin']} color="black" />,
      name: 'linkedin',
      url: 'https://linkedin.com/in',
    },
    {
      img: <FontAwesomeIcon icon={['fab', 'github']} color="black" />,
      name: 'github',
      url: 'https://github.com',
    },
    {
      img: <FontAwesomeIcon icon={['fab', 'instagram']} color="black" />,
      name: 'instagram',
      url: 'https://instagram.com',
    },
  ];
  return (
    <div className="TeamCard">
      <img className="image" src={pic} alt={member} />
      <div className="text-container">
        <h3 className="name">{member}</h3>
        <p className="role">{role}</p>
      </div>

      <div className="plugs">
        {plugRender
          .filter(plug => plugs[plug.name])
          .map(plugHelper => (
            <a target="_blank" rel="noopener noreferrer" href={`${plugHelper.url}/${plugs[plugHelper.name]}`}>
              {plugHelper.img}
            </a>
          ))}
      </div>
    </div>
  );
};

export default TeamCard;
