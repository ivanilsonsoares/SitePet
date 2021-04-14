const postController = require('../controllers/postsControllers');
const multer = require('multer');
const uploadConfig = require('../config/multer');

const upload = multer(uploadConfig);

module.exports = function(app){
    app.get("/api/post", postController.listarPost);
    app.post("/api/post",upload.single('image'),postController.criarPost);
    app.delete("/api/post/:id", postController.deletePost);
}