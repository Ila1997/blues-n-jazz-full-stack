import React, { useEffect, useRef } from 'react';
import '../styles.css'; 
import bluesMusic from '../assets/music/Blues.mp3';

  function BluesPage() {
    const audioRef = useRef(null); // Creo un riferimento all'elemento audio
  
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
    <div className="blues-page">
      <div className="overlay">
        <div className="content">
          <blockquote className="quote">"Ogni grande musicista ha un cuore blues. È la base fondamentale di tutto quello che facciamo" – John Mayall</blockquote>
          <p className="description">
          Il blues pone le sue radici nella storia afro-americana. Questo genere musicale nasce nel diciannovesimo secolo dalla fusione e dall’evoluzione dei canti africani spiritual e di quelli del lavoro. Gli artisti, ovvero gli schiavi in questo frangente, cantavano il dolore e la sofferenza che provavano conducendo quella vita. Insicurezza, paura per la propria incolumità, pregiudizi e costanti maltrattamenti o ancor peggio linciaggi erano alla base di questa musica. <br />
          Il blues venne così presto associato all’espressione inglese “the blue Devils”, ovvero i diavoli blu. Infine, quest’espressione subì un’evoluzione diventando “the blues” e voleva indicare uno stato psicofisico negativo di depressione, agitazione e malessere.<br />
          Il genere blues si sviluppa nei pressi del delta del fiume Mississippi, nella parte settentrionale di New Orleans, il luogo d'origine del jazz. Il blues e il jazz si sono sempre influenzati a vicenda, e fino ad oggi i due stili interagiscono fra loro in innumerevoli modi. <br />
          La maggior parte della musica blues è composta da 12 barre (o misure). Le specifiche serie di note utilizzate sono quelle che compongono la cosiddetta "scala del blues". <br />
I pionieri degli anni '20 come Son House, Blind Lemon Jefferson, Leadbelly, Charlie Patton e Robert Johnson solitamente si esibivano come solisti con solamente la chitarra. Occasionalmente si riunivano con alcuni colleghi bluesmen per esibirsi nelle piantagioni e nelle "juke joints" di periferia, termine dialettale usato per descrivere i locali frequentati da afro-americani dove si consumava alcol e si suonava la musica.

          </p>
          <div className="audio-player">
            <audio ref={audioRef} controls>
              <source src={bluesMusic} type="audio/mp3" />
              Il tuo browser non supporta file audio.
            </audio>
            <p>Riviera Paradise - Stevie Ray Vaughan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BluesPage;
