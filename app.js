var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send ('Ola mundo');

});

app.listen(3000, function (){
    console.log('Excutando na porta 3000')
});