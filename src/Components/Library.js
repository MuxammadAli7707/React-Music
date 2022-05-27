import React from 'react';
import LibrarySong from './LibrarySong';

function Library({songs, isPlaying, setCurrentSong, audioRef}) {
  return (
    <div className='library'>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map(song => (
          <LibrarySong 
            key={song.id} 
            setCurrentSong={setCurrentSong}
            songs={songs}
            id={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            currentSong={song} 
          />
        ))}
      </div>
    </div>
  );
}

export default Library;