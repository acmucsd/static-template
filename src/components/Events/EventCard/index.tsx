import React, { useEffect, useState } from 'react';
import './style.less';
import { EventObject } from 'actions/events';
import { formatDateToMonthAndDay, formatDateToTimeWithAMPM } from 'utils/date';
import { isURL, getAbsoluteURL } from 'utils/url';

export type EventCardProps = {
  /**
   * Event to display as a card
   */
  event: EventObject
}

const EventCard = ({ event }: EventCardProps) => {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    setTimeString(`${formatDateToTimeWithAMPM(event.start)} - ${formatDateToTimeWithAMPM(event.end)}`);
  }, [event]);
  return (
    <div className="EventCard">
      <div className="date">
        <span>{formatDateToMonthAndDay(event.start)}</span>
      </div>
      <h1 className="title">
        {event.title}
      </h1>
      <p>{isURL(event.location) ? <a target="_blank" rel="noopener noreferrer" href={getAbsoluteURL(event.location)}>{event.location}</a> : event.location}</p>
      <div className="time">
        <p>{timeString}</p>
      </div>
    </div>
  );
};

export default EventCard;
