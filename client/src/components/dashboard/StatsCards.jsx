import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Calendar, Users, CheckCircle, DollarSign } from 'lucide-react';

const StatsCards = ({ stats }) => {
  const cards = [
    {
      icon: Calendar,
      value: stats.totalEvents,
      label: 'Total Events',
      color: 'primary'
    },
    {
      icon: Users,
      value: stats.totalGuests,
      label: 'Total Guests',
      color: 'success'
    },
    {
      icon: CheckCircle,
      value: stats.confirmedGuests,
      label: 'Confirmed RSVPs',
      color: 'info'
    },
    {
      icon: DollarSign,
      value: `$${stats.totalBudget}`,
      label: 'Total Budget',
      color: 'warning'
    }
  ];

  return (
    <Row className="mb-4">
      {cards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <Col md={3} key={index}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <IconComponent className={`text-${card.color} mb-2`} size={32} />
                <h4 className={`text-${card.color}`}>{card.value}</h4>
                <small className="text-muted">{card.label}</small>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default StatsCards;