import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './layout/Header.jsx';
import TabNavigation from './common/TabNavigation.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import GuestManagement from './guests/GuestManagement';
import VendorManagement from './vendors/VendorsManagement.jsx';
import AddEventModal from './events/AddEventModal';
import { useEvents } from '../hooks/useEvents';
import { useGuests } from '../hooks/useGuests';
import { useVendors } from '../hooks/useVendors';

const EventPlannerRSVP = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showEventModal, setShowEventModal] = useState(false);

  const { 
    events, 
    selectedEvent, 
    setSelectedEvent,
    addEvent
  } = useEvents();

  const {
    guests,
    addGuest,
    updateGuestStatus,
    deleteGuest,
    getEventGuests,
    getEventStats
  } = useGuests();

  const {
    vendors,
    addVendor,
    deleteVendor,
    getEventVendors
  } = useVendors();

  const handleAddEvent = (eventData) => {
    addEvent(eventData);
    setShowEventModal(false);
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <Dashboard 
            events={events}
            guests={guests}
            vendors={vendors}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
            setShowEventModal={setShowEventModal}
            setActiveTab={setActiveTab}
            getEventStats={getEventStats}
          />
        );
      case 'guests':
        return (
          <GuestManagement
            selectedEvent={selectedEvent}
            guests={guests}
            onAddGuest={addGuest}
            onUpdateGuestStatus={updateGuestStatus}
            onDeleteGuest={deleteGuest}
          />
        );
      case 'vendors':
        return (
          <VendorManagement
            selectedEvent={selectedEvent}
            vendors={vendors}
            onAddVendor={addVendor}
            onDeleteVendor={deleteVendor}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container fluid className="py-4 bg-light min-vh-100">
      <Header />
      
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderTabContent()}
      </TabNavigation>

      <AddEventModal
        show={showEventModal}
        onHide={() => setShowEventModal(false)}
        onAddEvent={handleAddEvent}
      />
    </Container>
  );
};

export default EventPlannerRSVP;