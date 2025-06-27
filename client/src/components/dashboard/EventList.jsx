import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Plus } from 'lucide-react';
import EventCard from '../events/EventCard';

const EventsList = ({ 
  events, selectedEvent, setSelectedEvent, getEventStats, setShowEventModal 
}) => {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Upcoming Events</h5>
          <Button variant="primary" size="sm" onClick={() => setShowEventModal(true)}>
            <Plus size={16} className="me-1" />New Event
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        {events.length === 0 ? (
          <div className="text-center p-4">
            <p className="text-muted">No events created yet.</p>
            <Button variant="primary" onClick={() => setShowEventModal(true)}>
              <Plus size={16} className="me-1" />Create Your First Event
            </Button>
          </div>
        ) : (
          events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              stats={getEventStats(event.id)}
              isSelected={selectedEvent?.id === event.id}
              onClick={() => setSelectedEvent(event)}
            />
          ))
        )}
      </Card.Body>
    </Card>
  );
};

export default EventsList;