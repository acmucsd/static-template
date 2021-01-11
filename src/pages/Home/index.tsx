import React from 'react';
import LandingCard from 'components/LandingCard';
import Description from 'components/Description';
import calendar from 'assets/calendar.svg';
import EventList from 'containers/Events/EventsListContainer';
import NavBar from 'components/NavBar';
import './style.less';
import Team from 'components/Team';

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <LandingCard />
      <div className='container'>
        <Description />
        <p>Who we are!</p>
        <h2>Events <img alt="calendar icon" src={calendar}></img> </h2>
        <p>Participate in fun activities!</p>
        <EventList limit={4}/>
        <Team/>
      </div>
    </div>
  );
};

export default Home;
