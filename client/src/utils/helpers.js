import React from 'react';
import { Badge } from 'react-bootstrap';

export const RSVP_COLORS = {
  confirmed: '#28a745',
  pending: '#ffc107',
  declined: '#dc3545'
};

export const STATUS_VARIANTS = {
  'Confirmed': 'success',
  'Pending': 'warning',
  'Declined': 'danger',
  'Booked': 'success',
  'Planning': 'info',
  'Active': 'primary'
};

export const getDashboardData = (events, guests) => {
  const totalEvents = events.length;
  const totalGuests = guests.length;
  const confirmedGuests = guests.filter(g => g.status === 'Confirmed').length;
  const totalBudget = events.reduce((sum, e) => sum + (e.budget || 0), 0);
  
  return { totalEvents, totalGuests, confirmedGuests, totalBudget };
};

export const getStatusBadge = (status) => {
  const badgeVariant = STATUS_VARIANTS[status] || 'secondary';
  return <Badge bg={badgeVariant}>{status}</Badge>;
};

export const getRSVPChartData = (stats) => [
  { name: 'Confirmed', value: stats.confirmed, color: RSVP_COLORS.confirmed },
  { name: 'Pending', value: stats.pending, color: RSVP_COLORS.pending },
  { name: 'Declined', value: stats.declined, color: RSVP_COLORS.declined }
];

export const getBudgetData = (selectedEvent, vendors) => {
  const spentAmount = vendors.reduce((sum, v) => sum + (v.cost || 0), 0);
  const remainingBudget = (selectedEvent.budget || 0) - spentAmount;
  
  return [
    { name: 'Spent', amount: spentAmount, color: '#dc3545' },
    { name: 'Remaining', amount: remainingBudget, color: '#28a745' }
  ];
};