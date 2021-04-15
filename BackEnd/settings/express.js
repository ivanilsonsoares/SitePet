const express = require('express');
const userRoutes = require("../app/routes/usersRoutes");
const postRoutes = require("../app/routes/postRoutes");
const teamRoutes = require("../app/routes/teamRoutes");
const projectsRoutes = require("../app/routes/projectsRoutes");
const bodyParser = require('body-parser');
 
module.exports = function(){
    let app = express();
    app.set("port", 8000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static('./public'));
    userRoutes(app);
    postRoutes(app);
    teamRoutes(app);
    projectsRoutes(app);

    return app;
}
