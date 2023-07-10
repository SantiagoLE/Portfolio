import React, { useState } from 'react'
import "./style/proyects.css"

const Proyects = () => {
  const [videoState, setVideoState] = useState({});
console.log(videoState)
  const handleMouseEnter = (videoId) => {
    setVideoState({ [videoId]: true });
  };

  const handleMouseLeave = (videoId) => {
    console.log(videoId)
    setVideoState({ [videoId]: false });
  }

  return (
    <section id="proyects">
     
      <div
        className="card"
        onMouseEnter={() => handleMouseEnter("video1")}
        onMouseLeave={() => handleMouseLeave("video1")}
      >
        {videoState.video1 ? (
          <video src="./Clips/video1.webm" autoPlay muted loop />
        ) : (
          "por defecto"
        )}
      </div>
      <div
        className="card"
        onMouseEnter={() => handleMouseEnter("video2")}
        onMouseLeave={() => handleMouseLeave("video2")}
      >
        {videoState.video2 ? (
          <video src="./Clips/video2.webm" autoPlay muted loop />
        ) : (
          "por defecto"
        )}
      </div>
      <div
        className="card"
        onMouseEnter={() => handleMouseEnter("video3")}
        onMouseLeave={() => handleMouseLeave("video3")}
      >
        {videoState.video3 ? (
          <video src="./video3.mp4" autoPlay muted loop />
        ) : (
          "por defecto"
        )}
      </div>
      <div
        className="card"
        onMouseEnter={() => handleMouseEnter("video4")}
        onMouseLeave={() => handleMouseLeave("video4")}
      >
        {videoState.video4 ? (
          <video src="./video4.mp4" autoPlay muted loop />
        ) : (
          "por defecto"
        )}
      </div>
    </section>
  );
};


export default Proyects