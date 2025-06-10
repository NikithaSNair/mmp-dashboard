import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import './App.css';

const App: React.FC = () => (
  <>
    
    <div className="site-container">
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  </>
);

export default App;
