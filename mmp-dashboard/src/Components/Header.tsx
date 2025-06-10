import '../styles/Header.css';

const Header: React.FC = () => (
  <header className="main-header">
    <div className="header-left">
      <div className="logo-row">
        <div className="logo-group">
          <img src="/icon/mainlogo.png" alt="Main Logo" className="logo-img" />
          <span className="brand-name">MakeMyPass</span>
        </div>
      </div>
      <div className="event-title">
        <img src="/icon/Button.png" alt="button" className="left-button" />
        <img src="/icon/Eventlogo.png" alt="Add Guest" className="event-logo" />
        <span className="title">
          <h2>Frontend Developer Skills Assessment</h2>
        </span>
      </div>
    </div>
    <div className="header-right">
      <span className="user-info">
        Hi, adnankattekaden43
        <img src="/icon/useravatar.png" alt="User Avatar" className="user-avatar" />
      </span>
      <button className="view-docs-btn">
        <img src="/icon/book.png" alt="book" className="right-end-button" />
        View Docs
      </button>
    </div>
  </header>
);

export default Header;
