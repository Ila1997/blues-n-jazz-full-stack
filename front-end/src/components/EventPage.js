import React, { useState } from 'react';
import evento1 from '../assets/images/evento1.png';
import evento2 from '../assets/images/evento2.png';
import evento3 from '../assets/images/evento3.png';
import evento4 from '../assets/images/evento4.png';
import '../styles.css';

function Eventi() {
  // Stato per gestire la visualizzazione del messaggio di conferma
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Funzione per gestire la sottoscrizione alla newsletter
  const handleSubscription = (e) => {
    e.preventDefault();
    setIsSubscribed(true);

    // Rimuovere il messaggio dopo 6 secondi
    setTimeout(() => {
      setIsSubscribed(false);
    }, 6000);
  };

  return (
    <div className="events-page">
      <div className="eventi-container">
        <h1>Eventi in Arrivo</h1>
        <p>Scopri gli eventi jazz e blues in programma per quest'anno.</p>

        <div className="events-grid">
          <div className="event-item slide-in-left">
            <img src={evento1} alt="Evento 1" />
          </div>
          <div className="event-item slide-in-right">
            <img src={evento2} alt="Evento 2" />
          </div>
          <div className="event-item slide-in-left">
            <img src={evento3} alt="Evento 3" />
          </div>
          <div className="event-item slide-in-right">
            <img src={evento4} alt="Evento 4" />
          </div>
        </div>

        <div className="newsletter-signup">
          <h2>Iscriviti alla nostra newsletter</h2>

          {/* Mostra il messaggio di conferma sopra il form */}
          {isSubscribed && (
            <p className="subscription-confirmation">
              Grazie per esserti iscritto alla newsletter!
            </p>
          )}

          <form onSubmit={handleSubscription}>
            <input type="email" placeholder="Inserisci la tua email" required />
            <button type="submit" className="btn-signup">Iscriviti</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Eventi;
