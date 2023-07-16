import React from 'react'
import "./style/aboutMe.css"

const AboutMe = () => {
  return (
    <section className='aboutMe' id='aboutMe'>
      <h2 className='aboutMe_title'>SOBRE MI</h2>

      <p className='aboutMe_paragraph'>
        Soy un apasionado desarrollador Web Full Stack enfocado en la creación de aplicaciones que garantizen la mejor experiencia de usuario, mediante el uso de mi creatividad y habilidades técnicas.
      </p>

      <p className='aboutMe_paragraph'>
        Poseo solidos conocimientos que me permiten afrontar cualquier tipo de desafio y trabajar en todas la etapas de cualquier proyecto, desde el diseño y desarrollo frontend hasta la implementación y administración del backend.
        <br />
        Si estás buscando un desarrollador Full Stack comprometido, creativo y orientado a resultados, no dudes en contactarme. Mi prioridad es la satisfaccion del cliente final, el éxito de tu empresa y mi crecimiento a nivel personal y laboral.
      </p>

      <div className='aboutMe_info-container'>

        <div className='aboutMe-info-content'>
          <h3 className='aboutMe_education title'>Estudios</h3>

          <div className='aboutMe_education container'>

            <div className='aboutMe_education content'>
              <i className='bx bx-code aboutMe_icon'></i>

              <div className='aboutMe_education info'>
                <p className='info_instition'>Institucion: Academlo (2023)</p>
                <p className='info_program'>Titulo:  Web Full-Stack Developer  </p>
              </div>
            </div>

            <div className='aboutMe_education content'>
              <i className='bx bxs-graduation aboutMe_icon'  ></i>
              <div className='aboutMe_education info'>
                <p className='info_instition'>Institucion:  Servicio Nacional de Aprendizaje (SENA) (2008 - 2010)</p>
                <p className='info_program'>Titulo:  Tecnologo Mantenimiento Electronico e Instrumental Industrial  </p>
              </div>
            </div>
          </div>

        </div>


        <div className='aboutMe-info-content'>

          <h3 className='aboutMe_experience title'>Experiencia</h3>

          <div className='aboutMe_experience container'>

            <div className='aboutMe_experience content'>
              <i className='bx bxs-briefcase aboutMe_icon'></i>
              <div className='aboutMe_experience info'>
                <p className='info_instition'>Empresa:  Servicios ByR (2022 - Actual)</p>
                <p className='info_program'>Cargo:  Tecnico Programador  </p>
              </div>
            </div>

            <div className='aboutMe_experience content'>
              <i className='bx bxs-briefcase aboutMe_icon'></i>          <div className='aboutMe_experience info'>
                <p className='info_instition'>Empresa:  Aires y Aires (2021 - 2022)</p>
                <p className='info_program'>Cargo:  Tecnologo Automatizacion y Control</p>
              </div>
            </div>

            <div className='aboutMe_experience content'>
              <i className='bx bxs-briefcase aboutMe_icon'></i>          <div className='aboutMe_experience info'>
                <p className='info_instition'>Empresa:  Aire Ambiente (2011 - 2021)</p>
                <p className='info_program'>Cargo:  Tecnologo Automatizacion y Control</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default AboutMe