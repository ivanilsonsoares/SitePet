const teamModel = require('../models/teamModel')
const teamView = require('../views/teamView')

module.exports.listarTeam = function(req,res){
    let promise = teamModel.find().exec();
    promise.then(function(team){
        res.status(200).json(teamView.renderMany(team));
    }).catch(function(error){
        res.status(500).json({message:"Aconteceu algo de errado"});
    });
}

module.exports.criarTeam = function(req,res){
    const {name, start, preference} = req.body;
    const { filename } = req.file;
    const promise = teamModel.create({
        name: name,
        start: start,
        preference: preference,
        imagePerfil: filename
    })

    promise.then(function(team){
        res.status(201).json(teamView.render(team))
    }).catch(function(error){
        res.status(400).json({menssage: "algo deu errado"})
    })
    
}

module.exports.deleteTeam = function(req,res){
    let idTeam = req.params.id;
    let promise = teamModel.findOneAndRemove(idTeam).exec();

    promise.then(function(team){
        res.status(200).json(teamView.render(team));
    }).catch(function(error){
        res.status(500).json({message:"Aconteceu algo de errado"})
    })
}