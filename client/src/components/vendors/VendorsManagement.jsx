import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Plus } from 'lucide-react';
import BudgetOverview from './BudgetOverview.jsx';
import BudgetChart from './BudgetChart.jsx';
import VendorsList from './VendorsList.jsx';
import AddVendorModal from './AddVendorModal.jsx';

const VendorManagement = ({ 
  selectedEvent, 
  vendors, 
  onAddVendor, 
  onDeleteVendor
}) => {
  const [showVendorModal, setShowVendorModal] = useState(false);

  // Helper functions
  const getEventVendors = (eventId) => {
    return vendors.filter(v => v.eventId === eventId);
  };

  const getEventBudgetData = () => {
    const eventVendors = getEventVendors(selectedEvent.id);
    const spentAmount = eventVendors.reduce((sum, v) => sum + (v.cost || 0), 0);
    const remainingBudget = (selectedEvent.budget || 0) - spentAmount;
    
    return [
      { name: 'Spent', amount: spentAmount, color: '#dc3545' },
      { name: 'Remaining', amount: remainingBudget, color: '#28a745' }
    ];
  };

  const handleAddVendor = (vendorData) => {
    onAddVendor(vendorData);
    setShowVendorModal(false);
  };

  if (!selectedEvent) {
    return (
      <div className="text-center py-5">
        <h5>Please select an event to manage vendors</h5>
        <p className="text-muted">Choose an event from the dashboard to view and manage its vendors and budget.</p>
      </div>
    );
  }

  return (
    <>
      <Row className="mb-3">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4>Vendors & Budget</h4>
              <p className="text-muted mb-0">Event: {selectedEvent.title}</p>
            </div>
            <Button variant="primary" onClick={() => setShowVendorModal(true)}>
              <Plus size={16} className="me-1" />Add Vendor
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <BudgetOverview 
            getEventBudgetData={getEventBudgetData}
          />
        </Col>
        <Col md={6}>
          <BudgetChart 
            selectedEvent={selectedEvent}
            getEventVendors={getEventVendors}
          />
        </Col>
      </Row>

      <VendorsList 
        selectedEvent={selectedEvent}
        getEventVendors={getEventVendors}
        onDeleteVendor={onDeleteVendor}
      />

      <AddVendorModal 
        show={showVendorModal}
        onHide={() => setShowVendorModal(false)}
        onAddVendor={handleAddVendor}
        selectedEvent={selectedEvent}
      />
    </>
  );
};

export default VendorManagement;