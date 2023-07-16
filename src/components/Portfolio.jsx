import React, { useState } from 'react'
import Skills from './Skills'
import Proyects from './Proyects'

import("./style/portfolio.css")



const Portfolio = () => {

  const [viewProyects, setViewProyects] = useState(true)

  return (
    <section id='portfolio'>

      <div className='portfolio_btn-container'>
        <button className={`portfolio_btn ${viewProyects && "btn_active"}`} onClick={() => { setViewProyects(true) }}>Proyectos</button>
        <button className={`portfolio_btn ${!viewProyects && "btn_active"}`} onClick={() => { setViewProyects(false) }}>Tecnologias</button>
      </div>

      {
        viewProyects
          ?
          <Proyects />
          :
          <Skills />
      }


    </section>
  )
}

export default Portfolio