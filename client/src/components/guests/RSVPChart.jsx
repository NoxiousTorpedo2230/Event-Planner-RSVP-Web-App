import React from 'react';
import { Card } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const RSVPChart = ({ selectedEvent, getEventStats }) => {
  const getRSVPChartData = () => {
    const stats = getEventStats(selectedEvent.id);
    return [
      { name: 'Confirmed', value: stats.confirmed, color: '#28a745' },
      { name: 'Pending', value: stats.pending, color: '#ffc107' },
      { name: 'Declined', value: stats.declined, color: '#dc3545' }
    ];
  };

  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white">
        <h6 className="mb-0">RSVP Status</h6>
      </Card.Header>
      <Card.Body>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={getRSVPChartData()}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              dataKey="value"
            >
              {getRSVPChartData().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

export default RSVPChart;