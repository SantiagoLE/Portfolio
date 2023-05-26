import { useEffect, useRef, useState } from 'react';
import "./style/header.css"

const Header = () => {

    const [barIsActive, setBarIsActive] = useState(false)

    const toggleClass = () => {
        setBarIsActive(!barIsActive)
    }
console.log(barIsActive)
    const menuContainRef = useRef()
    const handleClickOutsideMenu = (event) => {
       if(event.target.id !== "menu_contain" && event.target.id !== "bx-menu" && barIsActive){
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

            <i id='bx-menu' className='bx bx-menu' onClick={toggleClass} ></i>

            <div id='menu_contain' className={`menu_contain ${barIsActive ? "menu_contain-active" : ""}`} ref={menuContainRef}>
                <ul className='menu_list'>
                  <li className='menu_list-item' onClick={() => setBarIsActive(false)}><a href="#home">Inicio</a></li>
                  <li className='menu_list-item' onClick={() => setBarIsActive(false)}><a href="#aboutMe">Sobre mi</a></li>
                  <li className='menu_list-item' onClick={() => setBarIsActive(false)}><a href="#skills">Habilidades Tecnicas</a></li>
                  <li className='menu_list-item' onClick={() => setBarIsActive(false)}><a href="#proyects">Proyectos</a></li>
                  <li className='menu_list-item' onClick={() => setBarIsActive(false)}><a href="#contact">Contacto</a></li>
                </ul>
            </div>

        </header>
    )
}

export default Header