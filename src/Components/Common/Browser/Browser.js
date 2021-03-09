import Pet from '../../../Images/pet-si.png'

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
                <li><h1>Inicio</h1></li>
                <li><h1 >Equipe</h1></li>
                <li><h1 >Projetos</h1></li>
                <li><h1>Blog</h1></li>
                <li><h1>Contato</h1></li>
                <li><h1>Sobre</h1></li>
            </ul>
        </header>
    )
}

window.addEventListener("scroll", function(){
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0)
})