<div align="center">

# 🎉 Event Planner & RSVP Manager

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

<p align="center">
  <strong>A modern, comprehensive event planning and RSVP management solution built with React</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/github/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App?style=flat-square" alt="License" />
  <img src="https://img.shields.io/github/stars/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App?style=flat-square" alt="Stars" />
  <img src="https://img.shields.io/github/forks/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App?style=flat-square" alt="Forks" />
  <img src="https://img.shields.io/github/issues/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App?style=flat-square" alt="Issues" />
</p>

---

</div>

## ✨ Features

<table>
  <tr>
    <td>
      <h3>📅 Event Management</h3>
      <ul>
        <li>Create & manage multiple events</li>
        <li>Set budgets and track spending</li>
        <li>Support for various event types</li>
        <li>Real-time status tracking</li>
      </ul>
    </td>
    <td>
      <h3>👥 Guest Management</h3>
      <ul>
        <li>RSVP tracking with visual analytics</li>
        <li>Dietary requirements management</li>
        <li>Guest contact information</li>
        <li>Interactive response charts</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <h3>💰 Budget & Vendors</h3>
      <ul>
        <li>Vendor cost tracking</li>
        <li>Budget visualization</li>
        <li>Spending analytics</li>
        <li>Multiple vendor categories</li>
      </ul>
    </td>
    <td>
      <h3>📊 Analytics Dashboard</h3>
      <ul>
        <li>Comprehensive statistics</li>
        <li>Interactive charts</li>
        <li>Quick action shortcuts</li>
        <li>Real-time updates</li>
      </ul>
    </td>
  </tr>
</table>

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App

# Navigate to project directory
cd event-planner-rsvp

# Install dependencies
npm install

# Start development server
npm start
```

### 📦 Dependencies

```bash
npm install react react-bootstrap recharts lucide-react
```

## 🛠️ Tech Stack

<div align="center">

| Frontend | UI Framework | Charts | Icons | State Management |
|----------|-------------|---------|-------|------------------|
| React | React Bootstrap | Recharts | Lucide React | React Hooks |

</div>

## 📁 Project Structure

```
src/
├── 📂 components/
│   ├── 📂 common/          # Reusable components
│   ├── 📂 dashboard/       # Dashboard components
│   ├── 📂 events/          # Event management
│   ├── 📂 guests/          # Guest management
│   ├── 📂 vendors/         # Vendor & budget management
│   └── 📂 layout/          # Layout components
├── 📂 hooks/               # Custom React hooks
├── 📂 data/                # Initial data & mock data
├── 📂 utils/               # Utility functions & constants
└── 📄 EventPlannerRSVP.jsx # Main application component
```

## 🎯 Usage

### 🎪 Creating Your First Event

1. **Click "Create New Event"** from the dashboard
2. **Fill in event details** (title, date, venue, budget)
3. **Set event type** (Birthday, Wedding, Corporate, etc.)
4. **Click "Create Event"** to save

### 🤝 Managing Guests

1. **Select an event** from your dashboard
2. **Navigate to "Guest Management"** tab
3. **Add guests** with contact details
4. **Track RSVPs** with visual analytics
5. **Manage dietary requirements**

### 💸 Budget & Vendor Tracking

1. **Go to "Vendors & Budget"** tab
2. **Add vendors** with cost information
3. **Monitor spending** against your budget
4. **View budget analytics** in real-time

## 📊 Screenshots

<div align="center">

### Dashboard Overview
*Comprehensive view of all your events and statistics*

### Guest Management
*Interactive RSVP tracking with visual analytics*

### Budget Tracking
*Real-time budget monitoring and vendor management*

</div>

## 🔧 Data Models

<details>
<summary><strong>Event Model</strong></summary>

```javascript
{
  id: number,
  title: string,
  date: string,
  time: string,
  venue: string,
  type: string,
  budget: number,
  description: string,
  maxAttendees: number,
  status: 'Planning' | 'Active' | 'Completed'
}
```
</details>

<details>
<summary><strong>Guest Model</strong></summary>

```javascript
{
  id: number,
  eventId: number,
  name: string,
  email: string,
  phone: string,
  status: 'Confirmed' | 'Pending' | 'Declined',
  dietaryReqs: string
}
```
</details>

<details>
<summary><strong>Vendor Model</strong></summary>

```javascript
{
  id: number,
  eventId: number,
  type: string,
  name: string,
  cost: number,
  status: 'Booked' | 'Pending' | 'Cancelled',
  contact: string
}
```
</details>

## 🎨 Customization

### Adding New Event Types

```javascript
// src/utils/constants.js
export const EVENT_TYPES = [
  'Birthday Party', 'Wedding', 'Corporate', 'Conference', 
  'Workshop', 'Reunion', 'Your Custom Type', 'Other'
];
```

### Custom Color Themes

```javascript
// src/utils/constants.js
export const RSVP_COLORS = {
  confirmed: '#28a745',  // Green
  pending: '#ffc107',    // Yellow
  declined: '#dc3545'    // Red
};
```

## 🤝 Contributing

We love contributions! Here's how you can help:

<div align="center">

[![Contributors](https://img.shields.io/github/contributors/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App?style=for-the-badge)](https://github.com/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App/graphs/contributors)

</div>

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 🗺️ Roadmap

- [ ] 📧 Email invitation system
- [ ] 📅 Calendar integration (Google, Outlook)
- [ ] 📱 Mobile responsive design
- [ ] 🔄 Recurring events support
- [ ] 📊 Advanced analytics & reporting
- [ ] 🌐 Multi-language support
- [ ] 🔐 User authentication
- [ ] ☁️ Cloud storage integration
- [ ] 📤 Export functionality (PDF, CSV)
- [ ] 🔔 Automated reminder system

## 👨‍💻 Author

**Moses Stephen Arulraj S**
- GitHub: [@NoxiousTorpedo2230](https://github.com/NoxiousTorpedo2230)
- Profile: [https://github.com/NoxiousTorpedo2230](https://github.com/NoxiousTorpedo2230)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components from [React Bootstrap](https://react-bootstrap.github.io/)
- Charts powered by [Recharts](https://recharts.org/)
- Icons by [Lucide React](https://lucide.dev/)

## 💬 Support

<div align="center">

**Need help?** We're here for you!

[![GitHub Issues](https://img.shields.io/github/issues/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App?style=for-the-badge)](https://github.com/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App?style=for-the-badge)](https://github.com/NoxiousTorpedo2230/Event-Planner-RSVP-Web-App/discussions)

</div>

---

<div align="center">

**⭐ Don't forget to star this repo if you found it helpful! ⭐**

Made with ❤️ by Moses Stephen Arulraj S (https://github.com/NoxiousTorpedo2230)

</div>
