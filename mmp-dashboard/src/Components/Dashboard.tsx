import React from 'react';
import Navigation from './Navigation';
import AtAGlance from './AtAGlance';
import RecentGuests from './RecentGuests';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <div className="dashboard-content">
        <AtAGlance />
        <RecentGuests />
      </div>
    </div>
  );
};

export default Dashboard;
