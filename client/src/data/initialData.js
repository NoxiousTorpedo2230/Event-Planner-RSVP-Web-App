export const initialEvents = [
  {
    id: 1,
    title: 'Sarah\'s Birthday Party',
    date: '2025-07-15',
    time: '18:00',
    venue: 'Community Center Hall',
    type: 'Birthday Party',
    budget: 2500,
    description: 'Come celebrate Sarah\'s 25th birthday with music, food, and fun!',
    maxAttendees: 50,
    status: 'Planning'
  },
  {
    id: 2,
    title: 'Company Annual Meeting',
    date: '2025-07-20',
    time: '09:00',
    venue: 'Conference Room A',
    type: 'Corporate',
    budget: 5000,
    description: 'Annual company meeting and team building activities',
    maxAttendees: 100,
    status: 'Active'
  }
];

export const initialGuests = [
  { id: 1, eventId: 1, name: 'John Smith', email: 'john@email.com', phone: '+1234567890', status: 'Confirmed', dietaryReqs: 'Vegetarian' },
  { id: 2, eventId: 1, name: 'Emily Johnson', email: 'emily@email.com', phone: '+1234567891', status: 'Pending', dietaryReqs: 'None' },
  { id: 3, eventId: 1, name: 'Mike Wilson', email: 'mike@email.com', phone: '+1234567892', status: 'Declined', dietaryReqs: 'Gluten-free' },
  { id: 4, eventId: 2, name: 'Alice Brown', email: 'alice@email.com', phone: '+1234567893', status: 'Confirmed', dietaryReqs: 'None' },
  { id: 5, eventId: 2, name: 'David Lee', email: 'david@email.com', phone: '+1234567894', status: 'Confirmed', dietaryReqs: 'Vegan' }
];

export const initialVendors = [
  { id: 1, eventId: 1, type: 'Catering', name: 'Delicious Delights', cost: 800, status: 'Booked', contact: 'catering@delicious.com' },
  { id: 2, eventId: 1, type: 'Photography', name: 'Capture Moments', cost: 500, status: 'Pending', contact: 'photo@capture.com' },
  { id: 3, eventId: 1, type: 'Music/DJ', name: 'Party Beats', cost: 400, status: 'Booked', contact: 'dj@partybeats.com' },
  { id: 4, eventId: 2, type: 'Catering', name: 'Corporate Cuisine', cost: 1200, status: 'Booked', contact: 'corp@cuisine.com' }
];