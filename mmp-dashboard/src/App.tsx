import React from 'react';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-background">
      <div className="dashboard-panel">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
