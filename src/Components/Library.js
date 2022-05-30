import React from 'react';
import LibrarySong from './LibrarySong';

function Library({songs, libraryStatus, isPlaying, currentSong, setCurrentSong, audioRef, setSongs}) {
  return (
    <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library Musics</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong 
            key={song.id} 
            setCurrentSong={setCurrentSong}
            songs={songs}
            id={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            currentSong={song} 
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;