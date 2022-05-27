import { useRef, useState } from 'react';
import './App.css';
import Library from './Components/Library';
import Player from './Components/Player';
import Songs from './Components/Songs';
import data from './data';
function App() {

  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0
  });
  
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, current, duration})
  }

  const [songs, setSongs] = useState(data());
  const [isPlaying, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
     <div className='container'>
        <Songs currentSong={currentSong} />
        <Player 
          audioRef={audioRef} 
          isPlaying={isPlaying}
          setPlaying={setPlaying} 
          currentSong={currentSong} 
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          />
     </div>
        <Library 
          isPlaying={isPlaying}
          audioRef={audioRef} 
          songs={songs} 
          setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
