import React from 'react';
import './style.less';
import { EventObject } from 'actions/events';
import { formatDateToMonthAndDay } from 'utils/date';
import { isURL, getAbsoluteURL } from 'utils/url';
interface EventCardProps {
  event: EventObject
}

const EventCard = ({ event }: EventCardProps) => {

  return (
    <div className="EventCard">
      <div className="date">
        <span>{formatDateToMonthAndDay(event.start)}</span>
      </div>
      <h1 className="title">
        {event.title}
      </h1>
      {isURL(event.location) ? <a href={getAbsoluteURL(event.location)}>{event.location}</a> : event.location}
    </div>
  );
};

export default EventCard;
