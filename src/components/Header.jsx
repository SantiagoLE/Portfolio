import { useEffect, useState } from 'react';
import "./style/header.css"
import { Link } from 'react-scroll';

const Header = () => {

    const [barIsActive, setBarIsActive] = useState(false)



    useEffect(() => {

        const handleClickOutsideMenu = (event) => {
            if (event.target.id !== "menu" && barIsActive) {
                setBarIsActive(false)

            }
        }

        document.addEventListener('click', handleClickOutsideMenu);
        return () => {
            document.removeEventListener('click', handleClickOutsideMenu);
        }
    }, [document, barIsActive]);


    return (
        <header className='header'>

            <i id='menu' className='bx bx-menu' onClick={() => setBarIsActive(!barIsActive)} ></i>

            <div id='menu' className={`menu_contain ${barIsActive && "menu_contain-active"}`} >
                <ul id='menu' className='menu_list'>
                    <li id='menu' className='menu_list-item' ><Link to='home' smooth={true} duration={500} offset={-100} onClick={() => setBarIsActive(false)}>Inicio</Link></li>
                    <li id='menu' className='menu_list-item' ><Link to='aboutMe' smooth={true} duration={500} offset={-80} onClick={() => setBarIsActive(false)}>Sobre mi</Link></li>
                    <li id='menu' className='menu_list-item' ><Link to='portfolio' smooth={true} duration={500} offset={-80} onClick={() => setBarIsActive(false)}>Portafolio</Link></li>
                    <li id='menu' className='menu_list-item' ><Link to='contact' smooth={true} duration={500} offset={-80} onClick={() => setBarIsActive(false)}>Contacto</Link></li>

                </ul>
            </div>
        </header>
    )
}

export default Header