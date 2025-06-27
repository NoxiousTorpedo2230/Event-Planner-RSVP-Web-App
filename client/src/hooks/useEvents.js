import { useState } from 'react';
import { initialEvents } from '../data/initialData';

export const useEvents = () => {
  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(initialEvents[0]);
  const [newEvent, setNewEvent] = useState({
    title: '', date: '', time: '', venue: '', type: '', 
    budget: '', description: '', maxAttendees: ''
  });

  const addEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.venue) {
      const event = {
        id: Date.now(),
        ...newEvent,
        budget: parseFloat(newEvent.budget) || 0,
        maxAttendees: parseInt(newEvent.maxAttendees) || 50,
        status: 'Planning'
      };
      setEvents([...events, event]);
      return true;
    }
    return false;
  };

  const resetNewEvent = () => {
    setNewEvent({
      title: '', date: '', time: '', venue: '', type: '',
      budget: '', description: '', maxAttendees: ''
    });
  };

  return {
    events,
    selectedEvent,
    setSelectedEvent,
    addEvent,
    newEvent,
    setNewEvent,
    resetNewEvent
  };
};