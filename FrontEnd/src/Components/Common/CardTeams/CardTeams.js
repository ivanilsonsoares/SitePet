import "./CardTeams.css"
//import vitinho from '../../../Images/equipe1.jpg'
export function CardTeams({name,ingress,field,urlImg}){

    return(

        <div className="card-team">
            <img src={urlImg} className="img" alt="imagens"></img>
            
            <div className="info">
                <span>{name}</span>
                <span>Ingressou: {ingress}</span>
                <span>Interesse: {field}</span>
            </div>
        </div>
    )
}

// let img = document.createElement("img");
// img.classList.add("img");
// img.src = "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png";
// console.log(img)