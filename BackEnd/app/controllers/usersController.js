const UserModels = require("../models/usersModel");
const UserViews = require("../views/usersView");

module.exports.listarUsuarios = function (req, res) {
    let promise = UserModels.find().exec();
    promise.then(function(usuario){
        res.status(200).json(UserViews.renderMany(usuario));
    }).catch(function(error){
        res.status(500).json({mensagem: "Deu pau..."})
    });
}

module.exports.buscarUsuarioPorId = function (req, res) {
    

}
module.exports.inserirUsuario = function (req, res) {
    let usuario = req.body;
    let promise =  UserModels.create(usuario);
   
    promise.then(function(usuario){
        res.status(201).json(UserViews.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem:"Sua mensagem não foi..."})
    })

}

module.exports.removerUsuario = function (req, res) {
   
}