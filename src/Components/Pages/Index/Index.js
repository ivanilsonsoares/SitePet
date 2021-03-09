import { Browser } from "../../Common/Browser/Browser";
import { Footer } from "../../Common/Footer/Footer";
import Projects from '../../../Images/splash.png'
import Ufc from '../../../Images/ufc-preto.png'
import Pet from '../../../Images/pet-preto.png'
import './Index.css'

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis orci, sed sit massa ultricies nec. Consectetur sed nulla.
                    </p>
                    <button className="fa">Ver tudo &#xf061;</button>
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
                    <button className="fa">&#xf0e0; Enviar uma mensagem</button>
                </div>
            </div>
            <Footer></Footer>


        </div>
    )
}
