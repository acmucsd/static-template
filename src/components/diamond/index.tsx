import React from 'react';
import './style.less';

import logo from '../../assets/logo.png';

const Diamond: React.FC = () => {
  return <img className="diamond" src={logo} alt={logo} />;
};

export default Diamond;
