import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const AddEventModal = ({ show, onHide, onAddEvent }) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    type: '',
    budget: '',
    description: '',
    maxAttendees: ''
  });

  const eventTypes = [
    'Birthday Party', 'Wedding', 'Corporate', 'Conference', 
    'Workshop', 'Reunion', 'Other'
  ];

  const handleSubmit = () => {
    if (newEvent.title && newEvent.date && newEvent.venue) {
      const event = {
        id: Date.now(),
        ...newEvent,
        budget: parseFloat(newEvent.budget) || 0,
        maxAttendees: parseInt(newEvent.maxAttendees) || 50,
        status: 'Planning'
      };
      
      onAddEvent(event);
      setNewEvent({
        title: '', date: '', time: '', venue: '', type: '',
        budget: '', description: '', maxAttendees: ''
      });
      onHide();
    }
  };

  const handleInputChange = (field, value) => {
    setNewEvent(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Create New Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter event title"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Event Type</Form.Label>
                <Form.Select
                  value={newEvent.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                >
                  <option value="">Select event type...</option>
                  {eventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Venue</Form.Label>
            <Form.Control
              type="text"
              value={newEvent.venue}
              onChange={(e) => handleInputChange('venue', e.target.value)}
              placeholder="Enter event venue"
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Budget ($)</Form.Label>
                <Form.Control
                  type="number"
                  value={newEvent.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  placeholder="Enter budget"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Max Attendees</Form.Label>
                <Form.Control
                  type="number"
                  value={newEvent.maxAttendees}
                  onChange={(e) => handleInputChange('maxAttendees', e.target.value)}
                  placeholder="Enter max attendees"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newEvent.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter event description"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Create Event
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEventModal;