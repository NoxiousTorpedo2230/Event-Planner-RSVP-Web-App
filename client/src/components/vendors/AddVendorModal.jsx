import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddVendorModal = ({ show, onHide, onAddVendor, selectedEvent }) => {
  const [newVendor, setNewVendor] = useState({
    type: '',
    name: '',
    cost: '',
    contact: ''
  });

  const vendorTypes = [
    'Catering', 'Photography', 'Music/DJ', 'Decoration', 
    'Venue', 'Transportation', 'Other'
  ];

  const handleSubmit = () => {
    if (newVendor.name && newVendor.type) {
      const vendor = {
        id: Date.now(),
        eventId: selectedEvent.id,
        ...newVendor,
        cost: parseFloat(newVendor.cost) || 0,
        status: 'Pending'
      };
      
      onAddVendor(vendor);
      setNewVendor({ type: '', name: '', cost: '', contact: '' });
      onHide();
    }
  };

  const handleInputChange = (field, value) => {
    setNewVendor(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Vendor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Vendor Type</Form.Label>
            <Form.Select
              value={newVendor.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
            >
              <option value="">Select vendor type...</option>
              {vendorTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Vendor Name</Form.Label>
            <Form.Control
              type="text"
              value={newVendor.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter vendor name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cost ($)</Form.Label>
            <Form.Control
              type="number"
              value={newVendor.cost}
              onChange={(e) => handleInputChange('cost', e.target.value)}
              placeholder="Enter cost"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              value={newVendor.contact}
              onChange={(e) => handleInputChange('contact', e.target.value)}
              placeholder="Enter contact information"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Vendor
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddVendorModal;