import React from 'react';

function Songs({currentSong, isPlaying}) {
  return (
    <div  style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}}className='song-container'>
      <img className={`${isPlaying ? "imgAnim" : "" }`} src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h1>{currentSong.artist}</h1>
    </div>
  );
}

export default Songs;