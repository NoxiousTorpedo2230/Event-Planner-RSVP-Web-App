import React from 'react';
import { Card } from 'react-bootstrap';

const GuestSummary = ({ selectedEvent, getEventStats }) => {
  const stats = getEventStats(selectedEvent.id);

  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white">
        <h6 className="mb-0">Guest Summary</h6>
      </Card.Header>
      <Card.Body>
        <div className="row text-center">
          <div className="col-4">
            <h4 className="text-success">{stats.confirmed}</h4>
            <small className="text-muted">Confirmed</small>
          </div>
          <div className="col-4">
            <h4 className="text-warning">{stats.pending}</h4>
            <small className="text-muted">Pending</small>
          </div>
          <div className="col-4">
            <h4 className="text-danger">{stats.declined}</h4>
            <small className="text-muted">Declined</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GuestSummary;