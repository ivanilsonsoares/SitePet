const express = require('express');
const userRoutes = require("../app/routes/usersRoutes");
const bodyParser = require('body-parser');
 
module.exports = function(){
    let app = express();
    app.set("port", 8000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static('./public'));
    userRoutes(app);
    return app;
}