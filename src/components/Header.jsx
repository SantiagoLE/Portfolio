import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import "./style/header.css"

const Header = () => {

    const [barIsActive, setBarIsActive] = useState(false)

    const toggleClass = () => {
        setBarIsActive(!barIsActive)
    }

    return (
        <header className='header'>

            <i className='bx bx-menu' onClick={toggleClass}></i>

            <div className={`menu_contain ${barIsActive ? "menu_contain-active" : ""}`}>
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