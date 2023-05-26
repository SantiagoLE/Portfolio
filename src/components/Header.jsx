import { useEffect, useRef, useState } from 'react';
import "./style/header.css"
import { Link } from 'react-scroll';

const Header = () => {

    const [barIsActive, setBarIsActive] = useState(false)

    const toggleClass = () => {
        setBarIsActive(!barIsActive)
    }
console.log(barIsActive)
    const menuContainRef = useRef()
    const handleClickOutsideMenu = (event) => {
       if(event.target.id !== "menu"  && barIsActive){
        setBarIsActive(false)
       }
       
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideMenu);

        return () => {
            document.removeEventListener('click', handleClickOutsideMenu);
        }
    }, [barIsActive]);


    return (
        <header className='header'>

            <i id='menu' className='bx bx-menu' onClick={toggleClass} ></i>

            <div id='menu' className={`menu_contain ${barIsActive ? "menu_contain-active" : ""}`} ref={menuContainRef}>
                <ul id='menu' className='menu_list'>
                  <li id='menu' className='menu_list-item' ><Link to='home' smooth={true} duration={500} offset={-100} onClick={() => setBarIsActive(false)}>Inicio</Link></li>
                  <li id='menu' className='menu_list-item' ><Link to='aboutMe' smooth={true} duration={500} offset={-80} onClick={() => setBarIsActive(false)}>Sobre mi</Link></li>
                  <li id='menu' className='menu_list-item' ><Link to='skills' smooth={true} duration={500} offset={-80} onClick={() => setBarIsActive(false)}>Habilidades tecnicas</Link></li>
                  <li id='menu' className='menu_list-item' ><Link to='proyects' smooth={true} duration={500} offset={-80} onClick={() => setBarIsActive(false)}>Proyectos</Link></li>
                  <li id='menu' className='menu_list-item' ><Link to='contact' smooth={true} duration={500} onClick={() => setBarIsActive(false)}>Contacto</Link></li>
   </ul>
    </div>
        </header>
    )
}

export default Header