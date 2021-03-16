import Pet from '../../../Images/pet-si.png'
//import { NavLink } from 'react-router-dom';
import './Browser.css';

export function Browser() {
    return (
        <header>
            <img src={Pet} alt="pet" className="logo"></img>
            <input id="check" type="checkbox"></input>
            <label for="check">
                <div class="hamburguer"></div>
            </label>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/team">Equipe</a></li>
                <li><a href="/projects">Projetos</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contato</a></li>
                <li><a href="/sobre">Sobre</a></li>
            </ul>
        </header>
    )
}

window.addEventListener("scroll", function(){
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0)
})