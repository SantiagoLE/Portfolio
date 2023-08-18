import { useEffect, useState } from 'react';
import "./style/header.css"
import { Link } from 'react-scroll';

const Header = ({ darkMode, setDarkMode }) => {

    const [barIsActive, setBarIsActive] = useState(false)


    useEffect(() => {

        const handleClickOutsideMenu = (event) => {
            if (event.target.id !== "menu" && barIsActive) {
                setBarIsActive(false)

            }
        }

        const handleScroll = () => {

        }

        document.addEventListener('click', handleClickOutsideMenu);
        document.addEventListener('scroll', handleScroll);


        return () => {
            document.removeEventListener('click', handleClickOutsideMenu);
            document.removeEventListener('scroll', handleScroll);
        }
    }, [document, barIsActive]);


    const [activeLink, setActiveLink] = useState()
    console.log(activeLink)

    const handleClickLink = (link) => {
        // setActiveLink(link)
    }


    return (
        <header className='header'>




            <i id='menu' className='bx bx-menu' onClick={() => setBarIsActive(!barIsActive)} ></i>

            <div id='menu' className={`menu_contain ${barIsActive && "menu_contain-active"}`} >
                <ul id='menu' className='menu_list'>
                    <li id='menu' className='menu_list-item' ><Link to='home' className={`${activeLink === "home" && "active"}`} smooth={true} duration={500} offset={-100} spy={true} onClick={() => { setBarIsActive(false); handleClickLink("home") }}>Inicio</Link></li>
                    <li id='menu' className='menu_list-item' ><Link to='aboutMe' className={`${activeLink === "aboutMe" && "active"}`} smooth={true} duration={500} offset={-70} spy={true} onClick={() => { setBarIsActive(false); handleClickLink("aboutMe") }}>Sobre mi</Link></li>
                    <li id='menu' className='menu_list-item' ><Link to='portfolio' className={`${activeLink === "portfolio" && "active"}`} smooth={true} duration={500} offset={-50} spy={true} onClick={() => { setBarIsActive(false); handleClickLink("portfolio") }}>Portafolio</Link></li>
                    <li id='menu' className='menu_list-item' ><Link to='contact' className={`${activeLink === "contact" && "active"}`} smooth={true} duration={500} offset={-80} spy={true} onClick={() => { setBarIsActive(false); handleClickLink("contact") }}>Contacto</Link></li>

                </ul>
            </div>

            <div className='darkmode_icons-container'>
                {
                    darkMode
                        ? <i id='menu'className='bx bxs-sun' onClick={() => { setDarkMode(false) }}></i>
                        : <i id='menu' className='bx bxs-moon' onClick={() => { setDarkMode(true) }}></i>

                }
            </div>
        </header>
    )
}

export default Header