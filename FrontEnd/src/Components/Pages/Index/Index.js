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
                    <p>A Portaria 976, do Ministério da Educação, de 27 de julho de 2010, explica que o Programa de Educação Tutorial (PET) deve desenvolver atividades de Ensino em suas ações. Nesse sentido, o grupo PET-SI busca realizar atividades deste pilar, onde os bolsistas possam repassar seu conhecimento à comunidade acadêmica, fazendo com que os mesmos tenham mais experiência em atividades de docência.</p>
                </div>
                <div className="three-pillars">
                    <h1 className="fa">&#xf002;</h1>
                    <h2>Pesquisa</h2>
                    <p>A Portaria 976, do Ministério da Educação, de 27 de julho de 2010, explica que o Programa de Educação Tutorial (PET) deve desenvolver atividades de Pesquisa em suas ações. Nesse sentido, o grupo PET-SI busca realizar atividades deste pilar, onde os bolsistas possam ler e escrever trabalhos científicos, proporcionando assim, um maior conhecimento no assunto.
</p>
                </div>
                <div className="three-pillars">
                    <h1 className="fa">&#xf19c;</h1>
                    <h2>Extansão</h2>
                    <p>A Portaria 976, do Ministério da Educação, de 27 de julho de 2010, explica que o Programa de Educação Tutorial (PET) deve desenvolver atividades de Extensão em suas ações. Nesse sentido, o grupo PET-SI busca realizar atividades deste pilar, onde são realizados projetos para a comunidade de fora da universidade, fazendo com que a UFC tenha maior contato e parceria com essa comunidade.</p>
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
