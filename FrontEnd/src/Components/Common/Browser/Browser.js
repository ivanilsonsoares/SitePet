import { NavLink } from 'react-router-dom';
import Pet from '../../../assets/pet-si.png'
import './Browser.css';

export function Browser() {
    return (
        <header>
            <img src={Pet} alt="pet" className="logo"></img>
            <input id="check" type="checkbox"></input>
            <label htmlFor="check">
                <div className="hamburguer"></div>
            </label>
            <ul>
                <li><NavLink className="nav" to="/">Inicio</NavLink></li>
                <li><NavLink className="nav" to="/team">Equipe</NavLink></li>
                <li><NavLink className="nav" to="/projects">Projetos</NavLink></li>
                {/* <li><NavLink className="nav" to="/">Blog</NavLink></li> */}
                <li><NavLink className="nav" to="/">Contato</NavLink></li>
                <li><NavLink className="nav" to="/sobre">Sobre</NavLink></li>
            </ul>
        </header>
    )
}

window.addEventListener("scroll", function(){
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0)
})