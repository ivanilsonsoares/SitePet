import { Browser } from "../../Common/Browser/Browser";
import { Footer } from "../../Common/Footer/Footer";
import {CardTeams} from "../../Common/CardTeams/CardTeams"
import "./Team.css"

import team from '../../../data/team.json'

export function Team(){


    let montarCards = team.map(
        (team)=>(
            <CardTeams name={team.name} ingress={team.semester} field={team.field} urlImg={team.urlImg}/>
        )
    )


    return(
        <div>
            <Browser></Browser>
            <div className="banner">
                <span className="title">Equipe</span>
                <span className="subtitle">Nossa equipe de Bolsistas</span>
            </div>

            <div className="card">
                {montarCards}
            </div>

            <Footer></Footer>
        </div>
    )
}