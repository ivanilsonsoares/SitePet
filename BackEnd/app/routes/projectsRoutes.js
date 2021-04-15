const projectsControllers = require('../controllers/projectsControllers');
const multer = require('multer');
const uploadConfig = require('../config/multer');

const upload = multer(uploadConfig);

module.exports = function(app){
    app.post("/api/projects", upload.single('imageProject'),projectsControllers.criarProjects)
    app.get("/api/projects",projectsControllers.listProjects);
    app.delete("/api/projects/:id",projectsControllers.deleteProjects);
}