import React from 'react';
import { Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BudgetOverview = ({ getEventBudgetData }) => {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Header className="bg-white">
        <h6 className="mb-0">Budget Overview</h6>
      </Card.Header>
      <Card.Body>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={getEventBudgetData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

export default BudgetOverview;