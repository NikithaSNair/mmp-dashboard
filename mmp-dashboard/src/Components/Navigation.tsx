import React, { useState } from 'react';
import '../styles/Navigation.css';

const tabs = [
  'Overview Insights Guests |', 'Event Page Form Builder |',
  'Scan QR In-Event |', 'Logs Finance|', 'Post Event|', 'Child Events'
];

const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Overview');

  return (
    <nav className="navigation">
      <div className="nav-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`nav-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
