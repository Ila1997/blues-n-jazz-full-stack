import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="content-container">
        <h2>Benvenuti su Blues'n'Jazz</h2>
        <p>
          Il jazz e il blues sono generi musicali nati nello stesso periodo, cresciuti assieme, nello stesso contesto culturale, nella stessa area geografica, sono quasi inseparabili, ma presentano delle differenze in certi casi nette.
        </p>
        <div className="buttons">
          <button className="btn" onClick={() => navigate('/blues')}>Scopri di più sul Blues</button>
          <button className="btn" onClick={() => navigate('/jazz')}>Scopri di più sul Jazz</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
