import React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => (
  <div className="main-nav">
    <div className="logo">
      MyGoals
    </div>
    <div className="nav-items">
      <a href="#" className="nav-item">Profile</a>
      <a href="#" className="nav-item">Logout</a>
    </div>
  </div>
);

export default Navbar;
