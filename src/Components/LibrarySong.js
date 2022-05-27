import React from 'react';

function LibrarySong({currentSong, setCurrentSong, songs, id, audioRef, isPlaying}) {

  const songSelectHandler = () => {
    const selectedSong = songs.filter((el) => el.id === id)
    setCurrentSong(selectedSong[0])
    if(isPlaying) {
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined) {
        playPromise.then((_) => {
          audioRef.current.play();
        })
      }
    }
  }
  return (
    <div onClick={songSelectHandler} className='library-song'>
      <img src={currentSong.cover} alt={currentSong.name} />
      <div className='song-desc'>
        <h3>{currentSong.name}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;