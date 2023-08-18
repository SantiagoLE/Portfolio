import React, { useEffect, useRef, useState } from 'react'
import "./style/proyects.css"



const Proyects = () => {

  const carrouselRef = useRef()
  const [rotateAngle, setRotateAngle] = useState()
  const [rotateY, setRotateY] = useState(0)

  useEffect(() => {

    //Refencio el contenedor de los elementos y pregunto cuantos elementos hijos tiene
    const carrouselDivs = carrouselRef.current?.children;


    // Calculo el ángulo de rotación en grados 360 grados del circulo completo / logitud de hijos del carrusel
    const rotateAngle = 360 / ((carrouselDivs.length));
    setRotateAngle(rotateAngle)

    //Creo un nuevo array en base al numero de elementos
    const newArray = Array.from({ length: carrouselDivs.length })

    //Aplico a cada elemento un angulo especifico en funcion al index
    newArray?.map((_, index) => {
      const rotacionY = rotateAngle * index;
      carrouselDivs[index].style.transform = `rotateY(${rotacionY}deg) translateZ(300px) `;

    });

  }, []);


  const [videoState, setVideoState] = useState({});
  // console.log(videoState)

  const handleMouseEnter = (videoId) => {
    setVideoState({ [videoId]: true });
  };

  const handleMouseLeave = (videoId) => {
    console.log(videoId)
    setVideoState({ [videoId]: false });
  }

  return (
    <section id="proyects" >

      <div className='content_proyects'>

        <div className='content_carrousel' ref={carrouselRef} >

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

          <div
            className="card"
            onMouseEnter={() => handleMouseEnter("video5")}
            onMouseLeave={() => handleMouseLeave("video5")}
          >
            {videoState.video5 ? (
              <video src="./Clips/video1.webm" autoPlay muted loop />
            ) : (
              "por defecto"
            )}
          </div>

          <div
            className="card"
            onMouseEnter={() => handleMouseEnter("video6")}
            onMouseLeave={() => handleMouseLeave("video6")}
          >
            {videoState.video6 ? (
              <video src="./Clips/video1.webm" autoPlay muted loop />
            ) : (
              "por defecto"
            )}
          </div>

          <div
            className="card"
            onMouseEnter={() => handleMouseEnter("video7")}
            onMouseLeave={() => handleMouseLeave("video7")}
          >
            {videoState.video7 ? (
              <video src="./Clips/video1.webm" autoPlay muted loop />
            ) : (
              "por defecto"
            )}
          </div>

          <div
            className="card"
            onMouseEnter={() => handleMouseEnter("video8")}
            onMouseLeave={() => handleMouseLeave("video8")}
          >
            {videoState.video8 ? (
              <video src="./Clips/video1.webm" autoPlay muted loop />
            ) : (
              "por defecto"
            )}
          </div>

          <div
            className="card"
            onMouseEnter={() => handleMouseEnter("video9")}
            onMouseLeave={() => handleMouseLeave("video9")}
          >
            {videoState.video9 ? (
              <video src="./Clips/video1.webm" autoPlay muted loop />
            ) : (
              "por defecto"
            )}
          </div>

          <div
            className="card"
            onMouseEnter={() => handleMouseEnter("video10")}
            onMouseLeave={() => handleMouseLeave("video10")}
          >
            {videoState.video10 ? (
              <video src="./Clips/video1.webm" autoPlay muted loop />
            ) : (
              "por defecto"
            )}
          </div>

          <div
            className="card"
            onMouseEnter={() => handleMouseEnter("video11")}
            onMouseLeave={() => handleMouseLeave("video11")}
          >
            {videoState.video11 ? (
              <video src="./Clips/video1.webm" autoPlay muted loop />
            ) : (
              "por defecto"
            )}
          </div>

        </div>



      </div>

    </section>

  );
};


export default Proyects