import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faShuffle, faAnglesLeft, faAnglesRight, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { playAudio } from './Until';

function Player({
    currentSong, 
    isPlaying, 
    setPlaying,
    audioRef,
    setSongInfo,
    songInfo,
    songs,
    setCurrentSong,
    timeUpdateHandler,
    setSongs
  }) {

    useEffect(() => {
      const newSongs = songs.map((song) => {
        if(song.id === currentSong.id) {
          return {
            ...song,
            active: true
          }
        }
        else {
          return {
            ...song,
            active: false
          }
        }
      });
      setSongs(newSongs);

      playAudio(isPlaying, audioRef)
    }, [currentSong])
    

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

  const skipTrackHandler = (track) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if(track === 'next') {
      setCurrentSong(songs[(currentIndex + 1) % songs.length])
    }

    if(track === 'back') {
      if((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length -1])
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length])
    }
  }

  const tranckAnim = {
    transform: `translateX(${songInfo.animatedPercentage}%)`
  }

  const songEndHanler = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      setCurrentSong(songs[(currentIndex + 1) % songs.length])
  }

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.current)}</p>
        <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className='track'>
        <input 
          min={0} 
          max={songInfo.duration || 0}
          value={songInfo.current}
          onChange={dragHandler}
          type="range" />
          <div style={tranckAnim} className='animated-track'></div>
        </div>
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon className='icons' icon={faShuffle} />
        <FontAwesomeIcon onClick={() => skipTrackHandler("back")} className='back' size='2x' icon={faAnglesLeft} />
        <FontAwesomeIcon className='play' onClick={playSongHandler} size='2x' icon={isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon onClick={() => skipTrackHandler("next")} className='next'size='2x' icon={faAnglesRight} />
        <FontAwesomeIcon className='icons' icon={faArrowsRotate} />
      </div>
      
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        onLoadMetadata={timeUpdateHandler}
        onEnded={songEndHanler}
        src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default Player;