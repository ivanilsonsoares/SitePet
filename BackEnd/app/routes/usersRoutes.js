const userController = require("../controllers/usersController");

module.exports = function(app){
    app.get("/api/usuarios", userController.listarUsuarios);
    app.get("/api/usuarios/:id", userController.buscarUsuarioPorId);
    app.post("/api/usuarios",userController.inserirUsuario);
    app.delete("/api/usuarios/:id",userController.removerUsuario);
}