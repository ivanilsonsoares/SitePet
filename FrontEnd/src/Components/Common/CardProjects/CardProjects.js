import "./CardProjects.css"

export function CardProjects({name,category,description,urlImg}){
    return(
        <div className="card-project">
                <span className="name">{name}</span>
                <span className="category">Categoria: {category}</span>
                <span className="description">{description}</span>
        </div>
    )
}