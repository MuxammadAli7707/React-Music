import React from 'react';
import LibrarySong from './LibrarySong';

function Library({songs, libraryStatus, isPlaying, setCurrentSong, audioRef, setSongs}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
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