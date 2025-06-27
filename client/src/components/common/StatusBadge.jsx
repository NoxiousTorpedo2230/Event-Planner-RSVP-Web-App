import React from 'react';
import { Badge } from 'react-bootstrap';

const StatusBadge = ({ status, variant = null }) => {
  const STATUS_VARIANTS = {
    'Confirmed': 'success',
    'Pending': 'warning',
    'Declined': 'danger',
    'Booked': 'success',
    'Planning': 'info',
    'Active': 'primary'
  };
  
  const badgeVariant = variant || STATUS_VARIANTS[status] || 'secondary';
  
  return (
    <Badge bg={badgeVariant}>
      {status}
    </Badge>
  );
};

export default StatusBadge;