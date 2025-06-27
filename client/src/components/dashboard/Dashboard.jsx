import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StatsCards from './StatsCards';
import EventsList from './EventList.jsx';
import QuickActions from '../layout/QuickActions';
import { getDashboardData } from '../../utils/helpers';

const Dashboard = ({ 
  events, guests, vendors, selectedEvent, setSelectedEvent, 
  setShowEventModal, setActiveTab, getEventStats 
}) => {
  const dashboardStats = getDashboardData(events, guests);

  return (
    <>
      <StatsCards stats={dashboardStats} />
      <Row>
        <Col md={8}>
          <EventsList 
            events={events}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
            getEventStats={getEventStats}
            setShowEventModal={setShowEventModal}
          />
        </Col>
        <Col md={4}>
          <QuickActions 
            setShowEventModal={setShowEventModal}
            setActiveTab={setActiveTab}
          />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;