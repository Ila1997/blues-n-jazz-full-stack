import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isSidebarOpen }) {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}> {/* Classe 'open' se la sidebar è aperta */}
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blues">Blues</Link></li>
        <li><Link to="/jazz">Jazz</Link></li>
        <li><Link to="/artists">Artisti</Link></li>
        <li><Link to="/events">Eventi</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
