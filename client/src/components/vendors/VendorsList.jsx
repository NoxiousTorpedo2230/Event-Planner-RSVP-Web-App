import React from 'react';
import { Card, Table, Button, Badge } from 'react-bootstrap';
import { Trash2 } from 'lucide-react';

const VendorsList = ({ selectedEvent, getEventVendors, onDeleteVendor }) => {
  const getStatusBadge = (status) => {
    const variants = {
      'Booked': 'success',
      'Pending': 'warning',
      'Cancelled': 'danger'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status}</Badge>;
  };

  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white">
        <h6 className="mb-0">Vendor List</h6>
      </Card.Header>
      <Card.Body className="p-0">
        <Table responsive hover className="mb-0">
          <thead className="bg-light">
            <tr>
              <th>Type</th>
              <th>Vendor Name</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {getEventVendors(selectedEvent.id).map(vendor => (
              <tr key={vendor.id}>
                <td>
                  <Badge bg="outline-secondary">{vendor.type}</Badge>
                </td>
                <td>{vendor.name}</td>
                <td>${vendor.cost}</td>
                <td>{getStatusBadge(vendor.status)}</td>
                <td>{vendor.contact}</td>
                <td>
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => onDeleteVendor(vendor.id)}
                    title="Delete Vendor"
                  >
                    <Trash2 size={14} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default VendorsList;