import { useState } from 'react';
import { initialGuests } from '../data/initialData';

export const useGuests = () => {
  const [guests, setGuests] = useState(initialGuests);
  const [newGuest, setNewGuest] = useState({
    name: '', email: '', phone: '', dietaryReqs: ''
  });

  const addGuest = (eventId) => {
    if (newGuest.name && newGuest.email) {
      const guest = {
        id: Date.now(),
        eventId,
        ...newGuest,
        status: 'Pending'
      };
      setGuests([...guests, guest]);
      return true;
    }
    return false;
  };

  const updateGuestStatus = (guestId, status) => {
    setGuests(guests.map(g => g.id === guestId ? { ...g, status } : g));
  };

  const deleteGuest = (guestId) => {
    setGuests(guests.filter(g => g.id !== guestId));
  };

  const resetNewGuest = () => {
    setNewGuest({ name: '', email: '', phone: '', dietaryReqs: '' });
  };

  const getEventGuests = (eventId) => guests.filter(g => g.eventId === eventId);

  const getEventStats = (eventId) => {
    const eventGuests = getEventGuests(eventId);
    return {
      total: eventGuests.length,
      confirmed: eventGuests.filter(g => g.status === 'Confirmed').length,
      pending: eventGuests.filter(g => g.status === 'Pending').length,
      declined: eventGuests.filter(g => g.status === 'Declined').length
    };
  };

  return {
    guests,
    addGuest,
    updateGuestStatus,
    deleteGuest,
    newGuest,
    setNewGuest,
    resetNewGuest,
    getEventGuests,
    getEventStats
  };
};