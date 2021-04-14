function render(post){
    return{
        id: post._id,
        title: post.title,
        content: post.content,
        image: post.image,
        image_url: post.image_url
    }
}
module.exports.render = render;

function renderMany(post){
    return post.map(render);
}

module.exports.renderMany = renderMany;