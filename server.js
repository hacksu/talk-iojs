var express = require('express');
var questions = require('./controllers/questions');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('json spaces', 2);

app.get('/questions', questions.list);

app.listen(3000);