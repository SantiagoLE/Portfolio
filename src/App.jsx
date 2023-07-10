import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Header from './components/Header'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {


  return (
    <div className="App">

      <Header />
      <div className='app_components'>
        <Home />
        <AboutMe />
<Portfolio/>
                <Contact />
      </div>




    </div>
  )

}

export default App