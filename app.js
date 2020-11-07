var express = require('express');
var port = process.env.PORT || 3000;
var app = express(),
path = require('path'),

app.get('/', function(req, res, next){
    res.send('Hello, world!');
})

app.listen(port);
module.exports = app;
