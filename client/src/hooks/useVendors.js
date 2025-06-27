import { useState } from 'react';
import { initialVendors } from '../data/initialData';

export const useVendors = () => {
  const [vendors, setVendors] = useState(initialVendors);
  const [newVendor, setNewVendor] = useState({
    type: '', name: '', cost: '', contact: ''
  });

  const addVendor = (eventId) => {
    if (newVendor.name && newVendor.type) {
      const vendor = {
        id: Date.now(),
        eventId,
        ...newVendor,
        cost: parseFloat(newVendor.cost) || 0,
        status: 'Pending'
      };
      setVendors([...vendors, vendor]);
      return true;
    }
    return false;
  };

  const deleteVendor = (vendorId) => {
    setVendors(vendors.filter(v => v.id !== vendorId));
  };

  const resetNewVendor = () => {
    setNewVendor({ type: '', name: '', cost: '', contact: '' });
  };

  const getEventVendors = (eventId) => vendors.filter(v => v.eventId === eventId);

  return {
    vendors,
    addVendor,
    deleteVendor,
    newVendor,
    setNewVendor,
    resetNewVendor,
    getEventVendors
  };
};