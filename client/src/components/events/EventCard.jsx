import React from 'react';
import { Badge } from 'react-bootstrap';
import { Calendar, MapPin } from 'lucide-react';

const EventCard = ({ event, stats, isSelected, onClick }) => {
  const getStatusBadge = (status) => {
    const variants = {
      'Planning': 'info',
      'Active': 'primary',
      'Completed': 'success',
      'Cancelled': 'danger'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  return (
    <div 
      className={`border-bottom p-3 ${isSelected ? 'bg-light' : 'hover-bg-light'}`}
      style={{ cursor: 'pointer' }} 
      onClick={onClick}
    >
      <div className="d-flex justify-content-between align-items-start">
        <div className="flex-grow-1">
          <h6 className="mb-1">{event.title}</h6>
          <div className="d-flex align-items-center text-muted small mb-2">
            <Calendar size={14} className="me-1" />
            {event.date} at {event.time}
            <MapPin size={14} className="ms-3 me-1" />
            {event.venue}
          </div>
          <div className="d-flex align-items-center">
            {getStatusBadge(event.status)}
            <span className="ms-2 small text-muted">
              {stats?.confirmed || 0}/{stats?.total || 0} confirmed
            </span>
          </div>
        </div>
        <Badge bg="outline-primary">{event.type}</Badge>
      </div>
    </div>
  );
};

export default EventCard;