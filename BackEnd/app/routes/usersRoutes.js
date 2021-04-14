const userController = require("../controllers/usersController");
const path = require('path');
const express = require("express");
module.exports = function(app){
    app.get("/api/usuarios", userController.listarUsuarios);
    app.get("/api/usuarios/:id", userController.buscarUsuarioPorId);
    app.post("/api/usuarios",userController.inserirUsuario);
    app.delete("/api/usuarios/:id",userController.removerUsuario);
    app.use("/files/", express.static(path.resolve(__dirname, '..','..', 'tmp', 'upload')));
}