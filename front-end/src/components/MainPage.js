import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(false); // Per gestire il form di login
  const [showRegister, setShowRegister] = useState(false); // Per gestire il form di registrazione
  const [accountCreated, setAccountCreated] = useState(false); // Per mostrare un messaggio dopo la registrazione
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
    setAccountCreated(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Simulazione del login
    onLogin();
    setShowLogin(false);
    navigate('/home'); // Reindirizza alla HomePage
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Simulazione della registrazione
    setShowRegister(false);
    setAccountCreated(true); // Mostra il messaggio che l'account è stato creato
  };

  return (
    <div className="main-page">
      <div className="content-container">
        <div className="description">
          <h2>Benvenuti su Blues'n'Jazz</h2>
          <p>Scopri la storia del blues e del jazz, i principali artisti che hanno segnato questi generi musicali ed accedi ad eventi esclusivi.</p>
        </div>

        <div className="buttons">
          {!showLogin && !showRegister && !accountCreated && (
            <>
              <button className="btn" onClick={handleLoginClick}>Login</button>
              <p>Non hai un account? <span className="link" onClick={handleRegisterClick}>Registrati</span></p>
            </>
          )}

          {showLogin && (
            <div className="form-container">
              <form onSubmit={handleLoginSubmit}>
                <h3>Login</h3>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="btn">Accedi</button>
              </form>
              <p>Non hai un account? <span className="link" onClick={handleRegisterClick}>Registrati</span></p>
            </div>
          )}

          {showRegister && (
            <div className="form-container">
              <form onSubmit={handleRegisterSubmit}>
                <h3>Registrazione</h3>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <input type="email" placeholder="Email" required />
                <button type="submit" className="btn">Registrati</button>
              </form>
              <p>Hai già un account? <span className="link" onClick={handleLoginClick}>Accedi</span></p>
            </div>
          )}

          {accountCreated && (
            <div className="form-container">
              <p>Nuovo account creato!<br />Ora puoi effettuare il <span className="link" onClick={handleLoginClick}>Login</span>.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
