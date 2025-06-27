import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

const BudgetChart = ({ selectedEvent, getEventVendors }) => {
  const spentAmount = getEventVendors(selectedEvent.id).reduce((sum, v) => sum + (v.cost || 0), 0);
  const remainingAmount = (selectedEvent.budget || 0) - spentAmount;
  const spentPercentage = ((spentAmount / (selectedEvent.budget || 1)) * 100);

  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white">
        <h6 className="mb-0">Budget Details</h6>
      </Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-between mb-2">
          <span>Total Budget:</span>
          <strong>${selectedEvent.budget}</strong>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Amount Spent:</span>
          <span className="text-danger">
            ${spentAmount}
          </span>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <span>Remaining:</span>
          <span className="text-success">
            ${remainingAmount}
          </span>
        </div>
        <ProgressBar 
          now={spentPercentage} 
          variant="info" 
          label={`${Math.round(spentPercentage)}%`}
        />
      </Card.Body>
    </Card>
  );
};

export default BudgetChart;