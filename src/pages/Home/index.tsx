import React from 'react';
import LandingCard from 'components/LandingCard';
import EventList from 'components/Events/List';
import './style.less';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <LandingCard />
      <div className='container'>
        <h2>Content</h2>
        <p>Who we are!</p>
        <h2>More Content</h2>
        <EventList />
      </div>
    </div>
  );
};

export default Home;
