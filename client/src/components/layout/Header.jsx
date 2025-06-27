import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Calendar } from 'lucide-react';

const Header = () => {
  return (
    <Row className="mb-4">
      <Col>
        <Card className="border-0 shadow-sm bg-gradient" 
              style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
          <Card.Body className="text-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="mb-1">🎉 Event Planner & RSVP Manager</h2>
                <p className="mb-0 opacity-75">Create, manage, and track your events with ease</p>
              </div>
              <Calendar size={48} className="opacity-75" />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Header;