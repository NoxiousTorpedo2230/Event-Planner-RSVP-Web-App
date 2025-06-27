import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Calendar, Users, Utensils } from 'lucide-react';

const TabNavigation = ({ activeTab, setActiveTab, children }) => {
  return (
    <Tabs activeKey={activeTab} onSelect={setActiveTab} className="mb-4">
      <Tab eventKey="dashboard" title={
        <span><Calendar className="me-2" size={16}/>Dashboard</span>
      }>
        {activeTab === 'dashboard' && children}
      </Tab>
      
      <Tab eventKey="guests" title={
        <span><Users className="me-2" size={16}/>Guest Management</span>
      }>
        {activeTab === 'guests' && children}
      </Tab>
      
      <Tab eventKey="vendors" title={
        <span><Utensils className="me-2" size={16}/>Vendors & Budget</span>
      }>
        {activeTab === 'vendors' && children}
      </Tab>
    </Tabs>
  );
};

export default TabNavigation;