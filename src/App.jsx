import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Header from './components/Header'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import { useCallback, useState } from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './utils/particlesConfig'
import { loadFull } from 'tsparticles'



function App() {


  const [darkMode, setDarkMode] = useState(true)

  const handleWhatsApp = () => {
    window.open(" https://api.whatsapp.com/send?phone=573148398862", "_blank")
  }

  const handleLinkedin = () => {
    window.open(" https://www.linkedin.com/in/santiago-loaiza-escobar/", "_blank")
  }

  const handleGithub = () => {
    window.open(" https://github.com/SantiagoLE", "_blank")
  }

  const [viewMenu, setViewMenu] = useState(false)


  const particlesInit = useCallback((engine) => {
    loadFull(engine)
  }, [darkMode])

  const particlesConfigWithColor = {
    ...particlesConfig,
    particles: {
      ...particlesConfig.particles,
      color: {
        ...particlesConfig.particles.color,
        value: darkMode ? '#ffff' : '#000000',
      },
    },
  };


  return (
    <div className={`App ${!darkMode && "ligth"}`}>


      <Header
        setDarkMode={setDarkMode}
        darkMode={darkMode}

      />

      <div className='app_components'>
        <Home darkMode={darkMode} />
        <AboutMe />
        <Portfolio />
        <Contact />
      </div>

     

      {
        viewMenu

          ? <div className='icons_container'>

            <div className='btn_exit' onClick={() => { setViewMenu(false) }}>
              <p className='x'>X</p>
            </div>

            <div className="btn_whatsapp" onClick={handleWhatsApp} >
              <i className='bx bxl-whatsapp'></i>
            </div>

            <div className='btn_linkedin' onClick={handleLinkedin}>
              <i className='bx bxl-linkedin'></i>
            </div>

            <div className='btn_github' onClick={handleGithub}>
              <i className='bx bxl-github'></i>
            </div>
          </div>

          : <div className='menssage_icon' onClick={() => { setViewMenu(true) }}>
            <i className='bx bxs-message-rounded'></i>
          </div>
      }

<Particles style={{position: "absoluted", zIndex: "-1"}}
        init={particlesInit}
        options={particlesConfigWithColor}
      />

    </div>
  )

}

export default App