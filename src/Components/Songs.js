import React from 'react';

function Songs({currentSong}) {
  return (
    <div className='song-container'>
      <img src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h1>{currentSong.artist}</h1>
    </div>
  );
}

export default Songs;