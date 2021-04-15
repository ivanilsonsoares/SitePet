const postModels = require('../models/postModel');
const postViews = require('../views/postsView');


module.exports.listarPost = function(req, res){
    let promise = postModels.find().exec();
    promise.then(function(post){
        res.status(200).json(postViews.renderMany(post));
    }).catch(function(error){
        res.status(500).json({message:"Aconteceu algo de errado"});
    });
}

module.exports.criarPost =  function(req, res){
    const {title, content} = req.body;
    const { filename } = req.file;
    const promise =  postModels.create({
        title: title,
        content: content,
        image: filename
    });

     promise.then(function(post){
         res.status(201).json(postViews.render(post));
     }).catch(function(error){
         res.status(400).json({message:"Aconteceu algo de errado"})
     })
}

module.exports.deletePost = function(req, res){
    let idPost = req.params.id;
    let promise =postModels.findOneAndRemove(idPost).exec();

    promise.then(function(post){
        res.status(200).json(postViews.render(post));
    }).catch(function(error){
        res.status(500).json({message:"Aconteceu algo de errado"})
    })
}