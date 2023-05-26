import React from 'react'
import ReactTyped from 'react-typed';
import "./style/home.css"


const Home = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CVV_Santiago_Loaiza_Escobar.pdf';
        link.download = 'Santiago_Loaiza_Escobar.pdf';
        link.click();
      };
    

    const name = ["Santiago Loaiza Escobar"]
    const text= ["Full Stack Developer", "Front-End Developer", "Back-End Developer"]

    return (
        <section id='home'>
          

            <div className='home__img-container'>
                <img className='home_img' src="/SantiagoLoaizaEscobar.jpg" alt="" />
            </div>

            <h2 className='home_title'>¡Hola! Soy Santiago Loaiza Escobar</h2>

            <div className='text_animate'>
                <ReactTyped strings={text} typeSpeed={100} loop />
            </div>


<p className='home_paragraph'>
 Soy un apasionado desarrollador Web Full Stack enfocado en la creación de aplicaciones que garantizen la mejor experiencia de usuario, mediante el uso de mi creatividad y habilidades técnicas.
 </p>

<p className='home_paragraph'>
Poseo solidos conocimientos que me permiten afrontar cualquier tipo de desafio y trabajar en todas la etapas de cualquier proyecto, desde el diseño y desarrollo frontend hasta la implementación y administración del backend.
<br />
Si estás buscando un desarrollador Full Stack comprometido, creativo y orientado a resultados, no dudes en contactarme. Mi prioridad es la satisfaccion del cliente final, el éxito de tu empresa y mi crecimiento a nivel personal y laboral.
</p>

<button className='home_btn' onClick={handleDownload}><i className='bx bx-download'></i> CV</button>

        </section>
    )
};

export default Home;
