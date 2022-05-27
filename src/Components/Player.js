import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

function Player({
    currentSong, 
    isPlaying, 
    setPlaying,
    audioRef,
    setSongInfo,
    songInfo
  }) {
  // const [songInfo, setSongInfo] = useState({
  //   current: 0,
  //   duration: 0
  // });

  const getTime = (time) => {
    if(time) {
      return (
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
      )
    } 
    else {
      return '0:00'
    }
  }

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, current, duration})
  }
  const playSongHandler = () => {
    if(isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!isPlaying);
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, current: e.target.value})
  }

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.current)}</p>
        <input 
          min={0} 
          max={songInfo.duration || 0}
          value={songInfo.current}
          onChange={dragHandler}
          type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>

      <div className='play-control'>
        <FontAwesomeIcon className='back' size='2x' icon={faAnglesLeft} />
        <FontAwesomeIcon className='play' onClick={playSongHandler} size='2x' icon={isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon className='next'size='2x' icon={faAnglesRight} />
      </div>
      
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        onLoadMetadata={timeUpdateHandler}
        src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default Player;