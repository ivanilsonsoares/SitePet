const projectsModel = require('../models/projectsModel');
const projectsModels = require('../models/projectsModel');
const projectsView = require('../views/projectsView');

module.exports.criarProjects = function(req,res){
    const {name, type, description} = req.body;
    const {filename} = req.file;

    const promise = projectsModels.create({
        name: name,
        type: type,
        description: description,
        imageProject: filename
    });

    promise.then(function(projects){
        res.status(201).json(projectsView.render(projects));
    }).catch(function(error){
        res.status(400).json({message:"Aconteceu algo de errado"});
    })
}

module.exports.listProjects = function(req,res){
    let promise = projectsModels.find().exec();
    promise.then(function(projects){
        res.status(200).json(projectsView.renderMany(projects));
    }).catch(function(error){
        res.status(500),json({message:"Aconteceu algo de errado"})
    });
}

module.exports.deleteProjects = function(req,res){
    let idProjects = req.params.id;
    let promise = projectsModel.findOneAndRemove(idProjects).exec();

    promise.then(function(projects){
        res.status(200).json(projectsView.render(projects));
    }).catch(function(error){
        res.status(500).json({message:"Aconteceu algo de errado"})
    })
}