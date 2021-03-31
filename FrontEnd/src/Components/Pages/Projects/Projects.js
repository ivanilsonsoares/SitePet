import { Browser } from "../../Common/Browser/Browser";
import { Footer } from "../../Common/Footer/Footer";
import {CardProjects} from "../../Common/CardProjects/CardProjects"
import "./Projects.css"

import projects from '../../../data/projects.json'

export function Projects(){


    let montarCards = projects.map(
        (project)=>(
            <CardProjects name={project.name} category={project.category} description={project.description} urlImg={project.urlImg}/>
        )
    )


    return(
        <div>
            <Browser></Browser>
            <div className="banner">
                <span className="title">Projetos</span>
                <span className="subtitle">Nossos projetos são baseados nos nossos pilares</span>
            </div>

            <div className="container">
                {montarCards}
            </div>

            <Footer></Footer>
        </div>
    )
}

