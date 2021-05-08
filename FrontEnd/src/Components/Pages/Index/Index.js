import { Browser } from "../../Common/Browser/Browser";
import { Footer } from "../../Common/Footer/Footer";
import Projects from '../../../assets/splash.png'
import Ufc from '../../../assets/ufc-preto.png'
import Pet from '../../../assets/pet-preto.png'
import './Index.css'
import { NavLink } from "react-router-dom";


export function Index() {
    return (
        <div>
            <Browser></Browser>
            <div className="Banner">
                <div className="info">
                    <h1>Ensino,</h1>
                    <h1>Pesquisa</h1>
                    <h1>e Extensão</h1>
                    <p>São os pilares do Programa de Educação Tutorial - Sistemas de informação</p>
                </div>
            </div>
            <h1 className="title">Três Pilares</h1>
            <div className="content">

                <div className="three-pillars">
                    <h1 className="fa">&#xf02d;</h1>
                    <h2>Ensino</h2>
                    <p>É o pilar que estimula os membros a ensinar as coisas</p>
                </div>
                <div className="three-pillars">
                    <h1 className="fa">&#xf002;</h1>
                    <h2>Pesquisa</h2>
                    <p>É o pilar que estimula os membros a pesquisar as coisas</p>
                </div>
                <div className="three-pillars">
                    <h1 className="fa">&#xf19c;</h1>
                    <h2>Extansão</h2>
                    <p>É o pilar que estimula os membros a ensinar as coisas</p>
                </div>
            </div>

            <h1 className="title-projects">Principais Projetos</h1>

            <div className="projects">
                <div className="projects-images">
                    <img src={Projects} alt="projects"></img>

                </div>
                <div className="projects-info">
                    <p>
                    A Portaria 976, do Ministério da Educação, de 27 de julho de 2010, 
                    explica que o Programa de Educação Tutorial (PET) deve ser orientado pelo 
                    princípio da indissociabilidade entre ensino, pesquisa e extensão. 
                    </p>
                    <NavLink  className="fa button-projects" to="/projects">Ver tudo &#xf061;</NavLink>
                </div>
            </div>
        
            <div className="support">
                <div className="logos">
                    <img src={Pet} alt="Ufc" className="pet"></img>
                    <img src={Ufc} alt="Ufc"></img>
                </div>
            </div>

            <div className="enter-contact">
                <div className="contact">
                    <h1>
                        Se você tiver quaisquer perguntas, comentários ou sugestões,
                        por favor entre em contato conosco.
                </h1>
                    <a className="fa" href="https://discord.gg/vfDzqaKKpS">&#xf0e0; Enviar uma mensagem</a>
                </div>
            </div>
            <Footer></Footer>


        </div>
    )
}
