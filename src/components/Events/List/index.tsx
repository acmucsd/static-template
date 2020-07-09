import React, { useEffect, useState } from 'react';
import { getAllCommunityEvents, EventObject } from 'actions/events';
import EventCard from '../EventCard';
import './style.less';

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Array<EventObject>>([]);
  useEffect(() => {
    getAllCommunityEvents().then((events) => {
      if (events) {
        setEvents(events);
      }
    });
  }, []);
  return (
    <div className="EventList">
      {events.map((event) => {
        return <EventCard event={event} />
      })}
    </div>
  );
};

export default EventList;
