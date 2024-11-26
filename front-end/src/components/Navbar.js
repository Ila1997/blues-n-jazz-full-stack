import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSignOutAlt } from 'react-icons/fa'; 

function Navbar({ isLoggedIn, handleLogout, toggleSidebar }) {
  return (
    <nav className="navbar">
      {/* Logo cliccabile per reindirizzare alla homepage */}
      <Link to="/home">
        <img src={require('../assets/images/logo.png')} alt="Logo" className="navbar-logo" />
      </Link>

      <div className="navbar-controls">
        {isLoggedIn && (
          <>
            {/* Icona di hamburger per aprire la sidebar */}
            <button onClick={toggleSidebar} className="hamburger-menu">
              <FaBars size={24} />
            </button>
            {/* Icona di logout */}
            <button onClick={handleLogout} className="logout-button">
              <FaSignOutAlt size={24} />
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
