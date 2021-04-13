const http = require("http");
const app = require('./settings/express.js')();
const db = require('./settings/database.js');

http.createServer(app).listen(app.get('port'), function(){
    console.log('Servidor rodando '+app.get('port'));
});

db('mongodb://localhost/petBackEnd');
