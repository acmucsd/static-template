import React from 'react';
import LandingCard from 'components/LandingCard';
import calendar from 'assets/calendar.svg';
import EventList from 'containers/Events/EventsListContainer';
import './style.less';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <LandingCard />
      <div className='container'>
        <h2>Content</h2>
        <p>Who we are!</p>
        <h2>Events <img alt="calendar icon" src={calendar}></img> </h2>
        <p>Participate in fun activities!</p>
        <EventList limit={4}/>
      </div>
    </div>
  );
};

export default Home;
