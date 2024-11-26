import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import HomePage from './components/HomePage';
import JazzPage from './components/JazzPage';
import BluesPage from './components/BluesPage';
import EventPage from './components/EventPage';
import ArtistsPage from './components/ArtistsPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import './styles.css';

function App() {
  // Stato per il login e la gestione della sidebar
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Funzioni di login e logout
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSidebarOpen(false);  // Chiude la sidebar al logout
  };

  // Funzione per aprire/chiudere la sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className="App">
        {/* Layout generale con Navbar, Sidebar e Footer */}
        <Layout
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        >
          {/* Definizione delle rotte */}
          <Routes>
            {/* Rotta principale */}
            <Route path="/" element={<MainPage onLogin={handleLogin} />} />

            {/* Rotte di login e registrazione */}
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterForm onRegister={handleLogin} />} />

            {/* Rotte protette: visibili solo se l'utente è loggato */}
            <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/jazz" element={isLoggedIn ? <JazzPage /> : <Navigate to="/" />} />
            <Route path="/blues" element={isLoggedIn ? <BluesPage /> : <Navigate to="/" />} />
            <Route path="/events" element={isLoggedIn ? <EventPage /> : <Navigate to="/" />} />
            <Route path="/artists" element={isLoggedIn ? <ArtistsPage /> : <Navigate to="/" />} />
          </Routes>

          {/* Footer che sarà visibile in tutte le pagine */}
          <Footer />
        </Layout>
      </div>
    </Router>
  );
}

// Componente Layout per gestire Navbar, Sidebar e il contenuto delle pagine
function Layout({ isLoggedIn, handleLogout, isSidebarOpen, toggleSidebar, children }) {
  const location = useLocation();  // Ottiene la posizione corrente del percorso
  const isMainPage = location.pathname === "/";  // Controlla se ci troviamo nella pagina principale

  return (
    <div className="layout-container">
      {/* Mostra la Navbar e la Sidebar solo se l'utente è loggato e non si trova nella MainPage */}
      {isLoggedIn && !isMainPage && (
        <>
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} toggleSidebar={toggleSidebar} />
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </>
      )}
      
      {/* Contenuto principale della pagina */}
      <div className="content">{children}</div>
    </div>
  );
}

export default App;
