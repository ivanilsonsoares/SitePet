const teamControllers = require('../controllers/teamControllers');
const multer = require('multer');
const uploadConfig = require('../config/multer');

const upload = multer(uploadConfig);

module.exports = function(app){
    app.post("/api/team",upload.single('imagePerfil'),teamControllers.criarTeam);
    app.get("/api/team",teamControllers.listarTeam);
    app.delete("/api/team/:id", teamControllers.deleteTeam);
}