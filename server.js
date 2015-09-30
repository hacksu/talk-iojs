var express = require('express');
var questions = require('./controllers/questions');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('json spaces', 2);

app.post('/questions', questions.create);
app.get('/questions', questions.list);
app.get('/questions/:id', questions.find);
app.delete('/questions/:id', questions.delete);

app.listen(3000);