import React, { useEffect, useState } from 'react';
import { getAllCommunityEvents, EventObject } from 'actions/events';
import EventList from 'components/Events/List';

type EventsListContainerProps = {
  /**
   * Max number of events to display
   */
  limit: number
}
const EventsListContainer = ({ limit }: EventsListContainerProps) => {
  const [events, setEvents] = useState<Array<EventObject>>([]);
  useEffect(() => {
    getAllCommunityEvents(limit).then((events) => {
      if (events) {
        setEvents(events);
      }
    });
  }, [limit]);
  return (
    <EventList events={events} />
  );
};

export default EventsListContainer;
