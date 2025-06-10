import React from 'react';
import '../styles/AtAGlance.css';

const AtAGlance: React.FC = () => (
  <div className="at-a-glance">
    <div className="section-header">
      <h2 className="at-a-glance-title">At a Glance</h2>
      <span className="last-registered">Last Registered 2nd May at 8:07 PM</span>
    </div>

    <div className="stats-container">
      <div className="stats-left">
        <div className="top-row">
          <div className="unique-guests">
            <span className="stat-number">24/250</span>
            <span className="stat-label green-label">unique guests</span>
          </div>
          <div className="shortlisted-box">
            <span className="shortlisted">24 </span>
            <span className="shortlistednum">shortlisted</span>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '9.6%' }}></div>
        </div>

        <div className="progress-labels">
          <span className="registered-users purple-label"> • (24) Registered users</span>
          <span className="target-users green-label"> • (226) To achieve target</span>
          </div>
      </div>
    </div>

    <div className="action-buttons">
      <button className="action-btn dropped">
        <img src="/icon/droppedusers.png" alt="Dropped" className="icon" />
        Dropped Users
      </button>

      <button className="action-btn blacklisted">
        <img src="/icon/bblacklistedusers.png" alt="Blacklisted" className="icon" />
        Blacklisted Users
      </button>

      <button className="action-btn export">
        <img src="/icon/exportdata.png" alt="Export" className="icon" />
        Export Data
      </button>

      <button className="action-btn add-guest">
        <img src="/icon/addguest.png" alt="Add Guest" className="icon" />
        Add Guest
      </button>
    </div>
  </div>
);

export default AtAGlance;
