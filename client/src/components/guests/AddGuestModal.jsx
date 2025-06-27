import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddGuestModal = ({ show, onHide, onAddGuest, selectedEvent }) => {
  const [newGuest, setNewGuest] = useState({
    name: '',
    email: '',
    phone: '',
    dietaryReqs: ''
  });

  const handleSubmit = () => {
    if (newGuest.name && newGuest.email) {
      const guest = {
        id: Date.now(),
        eventId: selectedEvent.id,
        ...newGuest,
        status: 'Pending'
      };
      
      onAddGuest(guest);
      setNewGuest({ name: '', email: '', phone: '', dietaryReqs: '' });
      onHide();
    }
  };

  const handleInputChange = (field, value) => {
    setNewGuest(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Guest</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={newGuest.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter guest name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={newGuest.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter email address"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              value={newGuest.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter phone number"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Dietary Requirements</Form.Label>
            <Form.Control
              type="text"
              value={newGuest.dietaryReqs}
              onChange={(e) => handleInputChange('dietaryReqs', e.target.value)}
              placeholder="Enter dietary requirements"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Guest
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddGuestModal;