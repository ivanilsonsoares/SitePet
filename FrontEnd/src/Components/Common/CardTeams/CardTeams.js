import "./CardTeams.css"
//import vitinho from '../../../Images/equipe1.jpg'
export function CardTeams({name,semester,field,urlImg}){

    return(

        <div className="card">
            <img src={urlImg} className="img" alt="imagens"></img>
            
            <div className="right">
                <span>{name}</span>
                <span>{semester}</span>
                <span>{field}</span>
            </div>
        </div>
    )
}

// let img = document.createElement("img");
// img.classList.add("img");
// img.src = "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png";
// console.log(img)