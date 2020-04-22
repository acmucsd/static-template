import React from 'react';
import './style.less';

import Diamond from '../../components/diamond';

const Page1: React.FC = () => {
  return (
    <div className="page page1">
      <div className="home_items">
        <Diamond />
        <h1>
          <span className="bold">ACM</span> UCSD
        </h1>
      </div>
    </div>
  );
};

export default Page1;
