import React from 'react';
import '../styles.css'; 

function ArtistsPage() {
  const bluesArtists = [
    { id: 1, name: 'Stevie Ray Vaughan', description: 'Chitarrista, cantante e compositore statunitense. Annoverato tra i più influenti esponenti della storia del blues, è considerato uno dei migliori chitarristi di ogni tempo. Tra le sue canzoni più note troviamo: Pride and Joy, Cold Shot, Texas Flood, The Sky is Crying, Lenny, e Riviera Paradise.', image: 'Blues1' },
    { id: 2, name: 'Joe Bonamassa', description: 'Chitarrista e cantautore statunitense, diventato uno fra i più apprezzati chitarristi del contemporaneo panorama musicale blues/rock grazie alla sua notevole tecnica e pulizia del suono. Tra le sue canzoni più note troviamo: The Ballad of John Henry, I’ll Play the Blues for You, Mountain Climbing e Sloe Gin.', image: 'Blues2' },
    { id: 3, name: 'Eric Clapton', description: 'Chitarrista, cantautore e compositore britannico. La sua voce inconfondibile e il suo stile di chitarra distintivo lo hanno reso una leggenda vivente che continua a esercitare un’influenza indelebile sulla scena musicale mondiale. Tra le sue canzoni più iconiche troviamo: Layla, Wonderful Tonight, Cocaine, Crossroads e I Shot the Sheriff.', image: 'Blues3' },
    { id: 4, name: 'B.B. King', description: 'Chitarrista, cantante e compositore statunitense. È stato uno dei più importanti esponenti della storia del blues ed è considerato come uno dei chitarristi più influenti della storia della musica. Tra le sue canzoni più iconiche troviamo: The thrill is gone, Three O’Clock Blues, Everyday I have the blues e Don’t answer the door.', image: 'Blues4' },
    { id: 5, name: 'Etta James', description: 'Cantante statunitense. È una delle regine indiscusse del blues nonché una delle grandi voci femminili più belle. Tra le sue canzoni più note troviamo: At last, I just wanna make love to you, I’d Rather Go Blind e Something is got a hold on me.', image: 'Blues5' },
  ];

  const jazzArtists = [
    { id: 1, name: 'Ella Fitzgerald', description: 'Considerata una delle migliori e più influenti cantanti jazz della storia. Dotata di un potente strumento vocale, vantando una estensione di più di tre ottave. Tra le sue canzoni più iconiche troviamo: Misty, The man I love, Blue skies, The way you look tonight e Cry me a river.', image: 'Jazz1' },
    { id: 2, name: 'Nat King Cole', description: 'Cantante, pianista e attore statunitense. La potenza della sua musica è stata in grado di varcare confini, di superare il tempo, la morte, le differenze sociali, i pregiudizi e l’ignoranza. Tra le sue canzoni più iconiche troviamo: Unforgettable, Nature boy, When I fall in love, Mona Lisa e Stardust.', image: 'Jazz2' },
    { id: 3, name: 'Ray Charles', description: 'Cantante e pianista statunitense. Seppe coniugare sonorità diverse, dal rhythm and blues alla musica country, dal Vocal jazz al piano blues fino al soul blues. Tra le sue canzoni più note troviamo: Georgia on my mind, I got a woman, Hit the road Jack,  I Can not Stop Loving You, Here we go again e Unchain my heart,', image: 'Jazz3' },
    { id: 4, name: 'Louis Armstrong', description: 'Trombettista, cantante e attore statunitense. Uno tra i più famosi musicisti jazz del XX secolo. Le sue innovazioni hanno permesso alla musica jazz di evolversi ed espandersi, contribuendo a renderlo un genere celebre in tutto il mondo. Tra le sue canzoni più note troviamo: What a wonderful world e We have all the time in the world.', image: 'Jazz4' },
    { id: 5, name: 'George Gershwin', description: 'Compositore, pianista e direttore di orchestra statunitense. Considerato un iniziatore del musical statunitense, la sua opera spazia dalla musica colta al jazz. Tra le sue opere più note troviamo: Summertime, The man I love, Un americano a Parigi e Someone to watch over me.', image: 'Jazz5' },
  ];
  
  return (
    <div className="artists-page">
      <h1 className="page-title">Artisti</h1>
      <div className="artists-container">
        {/* Blues Artists Section */}
        <div className="artists-section blues-artists">
          <h2>Blues</h2>
          {bluesArtists.map((artist) => (
            <div className="artist-card" key={artist.id}>
              <img
                src={require(`../assets/images/${artist.image}.png`)}
                alt={artist.name}
                className="artist-image"
              />
              <div className="artist-overlay">
                <div className="artist-info">
                  <h3>{artist.name}</h3>
                  <p>{artist.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Jazz Artists Section */}
        <div className="artists-section jazz-artists">
          <h2>Jazz</h2>
          {jazzArtists.map((artist) => (
            <div className="artist-card" key={artist.id}>
              <img
                src={require(`../assets/images/${artist.image}.png`)}
                alt={artist.name}
                className="artist-image"
              />
              <div className="artist-overlay">
                <div className="artist-info">
                  <h3>{artist.name}</h3>
                  <p>{artist.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistsPage;
