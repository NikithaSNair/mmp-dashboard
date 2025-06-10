import "../styles/RecentGuests.css";

type Guest = {
  name: string;
  username: string;
  role: string;
  status: string;
  time: string;
};

const guests: Guest[] = [
  { name: 'Cifin Cletus', username: 'cifin', role: 'Frontend Developer', status: 'Frontend Developer', time: '3 days ago' },
  { name: 'Sreenandhu Jacy', username: 'sreenandhu', role: 'Frontend Developer', status: 'Backend Developer', time: '3 days ago' },
  { name: 'Vinayakjya C C', username: 'vinayakjya85403', role: 'Frontend Developer', status: 'Backend Developer', time: '3 days ago' },
  { name: 'harshir', username: 'harshiriukkku', role: 'Frontend Developer', status: 'Backend Developer', time: '3 days ago' },
];

const RecentGuests: React.FC = () => (
  <div className="recent-guests">

   
    <div className="guest-list-header">
      <h2 className="guest-list-title">Guests List</h2>
      <input
        type="text"
        className="guest-search"
        placeholder="Type to search"
      />
    </div>

    
    <div className="guests-controls">
      <div className="guests-count">Recent Guests (24)</div>
      <div className="filter-controls">
        <select className="filter-select">
          <option>Select Multiple</option>
        </select>
        <select className="filter-select">
          <option>Checked In</option>
        </select>
        <select className="filter-select">
          <option>Approval Status</option>
        </select>
        <select className="filter-select">
          <option>Registration Status</option>
        </select>
      </div>
    </div>

    
    <div className="guests-table">
      {guests.map((guest, idx) => (
        <div key={idx} className="guest-row">
          <div className="guest-info">
            <div className="guest-details">
              <div className="guest-name">{guest.name}</div>
              <div className="guest-username">{guest.username}</div>
            </div>
          </div>
          <div className="guest-role">{guest.role}</div>
          <div className={`guest-status ${guest.status.toLowerCase().replace(/\s/g, '-')}`}>
            {guest.status}
          </div>
          <div className="guest-time">{guest.time}</div>
          <div className="guest-actions">
            <button className="action-icon"><img src="/icon/pen.png" alt="Edit" className="icon" /></button>
            <button className="action-icon"><img src="/icon/tick.png" alt="Check" className="icon" /></button>
            <button className="action-icon"><img src="/icon/dollar.png" alt="Pay" className="icon" /></button>
            <button className="action-icon"><img src="/icon/final.png" alt="Final" className="icon" /></button>
          </div>
        </div>
      ))}
    </div>

  </div>
);

export default RecentGuests;
