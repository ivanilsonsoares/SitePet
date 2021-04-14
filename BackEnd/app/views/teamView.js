function render(team){
    return{
        id: team._id,
        name: team.name,
        start: team.start,
        preference: team.preference,
        imagePerfil: team.imagePerfil,
        imagePerfil_url: team.imagePerfil_url
    }
}

module.exports.render = render;

function renderMany(team){
    return team.map(render);
}

module.exports.renderMany = renderMany;