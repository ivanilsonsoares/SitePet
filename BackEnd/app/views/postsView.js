function render(post){
    return{
        id: post._id,
        title: post.title,
        content: post.content,
    }
}
module.exports.render = render;

function renderMany(post){
    return post.map(render);
}

module.exports.renderMany = renderMany;