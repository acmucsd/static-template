import React from 'react';
import LandingCard from 'components/LandingCard';
import Description from 'components/Description';
import './style.less';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <LandingCard />
      <div className='container'>
        <Description />
        <p>Who we are!</p>
        <h2>More Content</h2>
      </div>
    </div>
  );
};

export default Home;
