import React, {useState, useRef, useEffect } from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause} from '@fortawesome/free-solid-svg-icons';

function Player(props) {
  const audioEL = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEL.current.currentTime = 62;
      audioEL.current.play();
    } else {
      audioEL.current.pause();
    }
  });

  return(
    
    <div className="c-player">
      <div className="details-img">
        
        <audio src={props.songs[props.currentSongIndex].src} ref={audioEL}></audio>
        <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        
      </div>
    </div>
  );
};

function PlayerControls(props) {
  return(
    <div className="c-player--controls">
        <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
          <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </button>
        
    </div>
  );
};
export default Player;