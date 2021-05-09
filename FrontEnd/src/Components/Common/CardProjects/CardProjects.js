import "./CardProjects.css"

export function CardProjects({name,category,description,urlImg}){
    return(
        <div className="card-project">
            <div className="line1">
                <div className="right">
                    <span className="name">{name}</span>
                    <span className="category">{category}</span>
                </div>
            </div>
            <div className="line2">
                <span className="description">{description}</span>
            </div>
        </div>
    )
}