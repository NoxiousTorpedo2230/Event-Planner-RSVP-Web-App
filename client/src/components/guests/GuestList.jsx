import React from 'react';
import { Card, Table, Button, Badge } from 'react-bootstrap';
import { CheckCircle, Trash2 } from 'lucide-react';

const GuestList = ({ 
  selectedEvent, 
  getEventGuests, 
  onUpdateGuestStatus, 
  onDeleteGuest 
}) => {
  const getStatusBadge = (status) => {
    const variants = {
      'Confirmed': 'success',
      'Pending': 'warning',
      'Declined': 'danger'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white">
        <h6 className="mb-0">Guest List</h6>
      </Card.Header>
      <Card.Body className="p-0">
        <Table responsive hover className="mb-0">
          <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Dietary Requirements</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {getEventGuests(selectedEvent.id).map(guest => (
              <tr key={guest.id}>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.phone}</td>
                <td>{getStatusBadge(guest.status)}</td>
                <td>{guest.dietaryReqs || 'None'}</td>
                <td>
                  <div className="btn-group btn-group-sm">
                    <Button 
                      variant="outline-success" 
                      size="sm"
                      onClick={() => onUpdateGuestStatus(guest.id, 'Confirmed')}
                      title="Confirm Guest"
                    >
                      <CheckCircle size={14} />
                    </Button>
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => onDeleteGuest(guest.id)}
                      title="Delete Guest"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default GuestList;