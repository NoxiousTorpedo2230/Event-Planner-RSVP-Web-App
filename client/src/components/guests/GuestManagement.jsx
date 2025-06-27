import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Plus } from 'lucide-react';
import RSVPChart from './RSVPChart.jsx';
import GuestList from './GuestList.jsx';
import GuestSummary from './GuestSummary.jsx';
import AddGuestModal from './AddGuestModal.jsx';

const GuestManagement = ({ 
  selectedEvent, 
  guests, 
  onAddGuest, 
  onUpdateGuestStatus, 
  onDeleteGuest
}) => {
  const [showGuestModal, setShowGuestModal] = useState(false);

  // Helper functions
  const getEventGuests = (eventId) => {
    return guests.filter(g => g.eventId === eventId);
  };

  const getEventStats = (eventId) => {
    const eventGuests = getEventGuests(eventId);
    return {
      total: eventGuests.length,
      confirmed: eventGuests.filter(g => g.status === 'Confirmed').length,
      pending: eventGuests.filter(g => g.status === 'Pending').length,
      declined: eventGuests.filter(g => g.status === 'Declined').length
    };
  };

  const handleAddGuest = (guestData) => {
    onAddGuest(guestData);
    setShowGuestModal(false);
  };

  if (!selectedEvent) {
    return (
      <div className="text-center py-5">
        <h5>Please select an event to manage guests</h5>
        <p className="text-muted">Choose an event from the dashboard to view and manage its guests.</p>
      </div>
    );
  }

  return (
    <>
      <Row className="mb-3">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4>Guest Management</h4>
              <p className="text-muted mb-0">Event: {selectedEvent.title}</p>
            </div>
            <Button variant="primary" onClick={() => setShowGuestModal(true)}>
              <Plus size={16} className="me-1" />Add Guest
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <RSVPChart 
            selectedEvent={selectedEvent}
            getEventStats={getEventStats}
          />
        </Col>
        <Col md={6}>
          <GuestSummary 
            selectedEvent={selectedEvent}
            getEventStats={getEventStats}
          />
        </Col>
      </Row>

      <GuestList 
        selectedEvent={selectedEvent}
        getEventGuests={getEventGuests}
        onUpdateGuestStatus={onUpdateGuestStatus}
        onDeleteGuest={onDeleteGuest}
      />

      <AddGuestModal 
        show={showGuestModal}
        onHide={() => setShowGuestModal(false)}
        onAddGuest={handleAddGuest}
        selectedEvent={selectedEvent}
      />
    </>
  );
};

export default GuestManagement;