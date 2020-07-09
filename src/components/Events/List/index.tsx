import React from 'react';
import { EventObject } from 'actions/events';
import EventCard from '../EventCard';
import './style.less';

export type EventListProps = {
  events: Array<EventObject>
}
const EventList = ({ events }: EventListProps) => {
  return (
    <div className="EventList">
      {events.map((event) => {
        return <EventCard event={event} />
      })}
    </div>
  );
};

export default EventList;
