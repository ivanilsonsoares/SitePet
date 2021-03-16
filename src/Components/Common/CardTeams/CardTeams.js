import "./CardTeams.css"

export function CardTeams({name,semester,field,urlImg}){
    return(
        <div className="card">
            <img src={{urlImg}} alt="imagens"></img>
            <div className="right">
                <span>{name}</span>
                <span>{semester}</span>
                <span>{field}</span>
            </div>
        </div>
    )
}