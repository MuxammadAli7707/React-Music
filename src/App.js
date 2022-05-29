import { useRef, useState } from 'react';
import './App.css';
import Library from './Components/Library';
import Nav from './Components/Nav';
import Player from './Components/Player';
import Songs from './Components/Songs';
import data from './data';
function App() {

  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
    animatedPercentage: 0,
  });
  
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundcurrent = Math.round(current);
    const roundduration = Math.round(duration);
    const animate = Math.round((roundcurrent / roundduration) * 100)
    setSongInfo({...songInfo, current, duration, animatedPercentage: animate})
  }

  const [libraryStatus, setLibraryStatus] = useState(false);


  const [songs, setSongs] = useState(data());
  const [isPlaying, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className="App">
     <div className={`container ${libraryStatus ? "ml" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
        <Songs currentSong={currentSong} isPlaying={isPlaying} />
        <Player 
          audioRef={audioRef} 
          isPlaying={isPlaying}
          setPlaying={setPlaying} 
          currentSong={currentSong} 
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          timeUpdateHandler={timeUpdateHandler}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
          />
     </div>
        <Library 
          isPlaying={isPlaying}
          audioRef={audioRef} 
          songs={songs} 
          setSongs={setSongs}
          setCurrentSong={setCurrentSong}
          libraryStatus={libraryStatus}
          />
    </div>
  );
}

export default App;
