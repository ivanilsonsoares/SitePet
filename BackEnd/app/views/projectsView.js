function render(projects){
    return{
        id: projects._id,
        name: projects.name,
        type: projects.type,
        description: projects.description,
        imageProject: projects.imageProject,
        imageProject_url: projects.imageProject_url
    }
}

module.exports.render = render;

function renderMany(projects){
    return projects.map(render);
}

module.exports.renderMany = renderMany;