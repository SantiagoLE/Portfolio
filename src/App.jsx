import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Header from './components/Header'
import Skills from './components/Skills'
import Proyects from './components/Proyects'
import Contact from './components/Contact'

function App() {


  return (
    <div className="App">

 <Header />
 <div className='app_components'>
 <Home />
<AboutMe/>
<Skills/>
<Proyects/>
<Contact/>
 </div>
 

     

    </div>
  )

}

export default App