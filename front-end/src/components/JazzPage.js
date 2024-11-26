import React, { useEffect, useRef } from 'react';
import '../styles.css'; 
import jazzMusic from '../assets/music/Jazz.mp3';

function JazzPage() {
  const audioRef = useRef(null); // Creiamo un riferimento all'elemento audio

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play(); // Fa partire la musica quando il componente viene montato
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause(); // Ferma la musica quando il componente viene smontato
        audioRef.current.currentTime = 0; // Resetta il tempo della musica
      }
    };
  }, []);

  return (
    <div className="jazz-page">
      <div className="overlay">
        <div className="content">
          <blockquote className="quote">"La vita è un po’ come il jazz… è meglio quando s’improvvisa." – George Gershwin</blockquote>
          <p className="description">
          Il Jazz è un genere musicale nato negli Stati Uniti, la cui caratteristica peculiare è l'improvvisazione. Il jazz si differenzia in particolare per la grande libertà di espressione degli strumenti solisti, per il ritmo basato essenzialmente sul sincopato e per l'uso del vibrato. <br />
          L'origine del jazz è molto antica. Già a partire dal XVII secolo sbarcarono nella colonia inglese della Virginia i primi schiavi di colore provenienti dal continente africano, i quali venivano impiegati nelle sterminate piantagioni di tabacco, riso, zucchero e cotone. Fu durante questo periodo che nacquero i primi canti con cui gli schiavi erano soliti accompagnare il loro duro lavoro.
          Si trattava prevalentemente di cori collettivi e cadenzati, i cosiddetti 'work songs', la cui cadenza ritmica coincideva con quella dello sforzo fisico. <br />
          Il jazz vero e proprio cominciò a diffondersi a New Orleans a partire dal 1920 e si crearono le prime band, inizialmente costituite da sette o otto strumenti: una o due cornette (uno strumento simile alla tromba ma più corta e larga), un clarinetto, un trombone e un violino. <br />
          Nel 1917, durante la Prima guerra mondiale, molti locali di New Orleans vengono chiusi per ragioni di ordine pubblico e i musicisti sono costretti a spostarsi in città del Nord come Chicago dove l’industria automobilistica offre possibilità di lavoro. Qui nei locali notturni i musicisti sono molto richiesti.
          <br />
A New York il quartiere di Harlem è largamente popolato da neri: si diffonde da qui la grande passione per il jazz, che coinvolge ben presto anche i musicisti bianchi.
<br />
All’originaria strumentazione della band si aggiungono poi la tromba, il pianoforte e i sassofoni; le grandi case discografiche cominciano a pubblicare brani di jazz.

          </p>
          <div className="audio-player">
            <audio ref={audioRef} controls>
              <source src={jazzMusic} type="audio/mp3" />
              Il tuo browser non supporta file audio.
            </audio>
            <p>Misty - Ella Fitzgerald</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JazzPage;
