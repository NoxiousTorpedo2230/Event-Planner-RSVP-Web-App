import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Plus, Users, Utensils, Send } from 'lucide-react';

const QuickActions = ({ setShowEventModal, setActiveTab }) => {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white">
        <h5 className="mb-0">Quick Actions</h5>
      </Card.Header>
      <Card.Body>
        <div className="d-grid gap-2">
          <Button variant="outline-primary" onClick={() => setShowEventModal(true)}>
            <Plus size={16} className="me-2" />Create New Event
          </Button>
          <Button variant="outline-success" onClick={() => setActiveTab('guests')}>
            <Users size={16} className="me-2" />Manage Guests
          </Button>
          <Button variant="outline-info" onClick={() => setActiveTab('vendors')}>
            <Utensils size={16} className="me-2" />Manage Vendors
          </Button>
          <Button variant="outline-warning">
            <Send size={16} className="me-2" />Send Invitations
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuickActions;