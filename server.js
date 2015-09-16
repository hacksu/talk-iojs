var express = require('express');
var questions = require('./app/controllers/questions');

var app = express();

app.set('json spaces', 2);

app.get('/questions', questions.list);

app.listen(3000);