const postController = require('../controllers/postsControllers');

module.exports = function(app){
    app.get("/api/post", postController.listarPost);
    app.post("/api/post",postController.criarPost);
    app.delete("/api/post/:id", postController.deletePost);
}