var db = require('lowdb')('db.json');
var questions = db('questions');
var uuid = require('uuid');
var schema = require('validate');

module.exports = {

  create: function (req, res) {
    var errors = validate(req.body);
    if (errors.length) return res.json(errors);

    req.body.id = uuid();
    questions.push(req.body);
    return res.json(req.body);
  },

  list: function (req, res) {
    return res.json(questions);
  },

  find: function (req, res) {
    var q = questions.find({id: req.params.id});
    return res.json(q);
  },

  delete: function (req, res) {
    questions.remove({id: req.params.id});
    return res.json({id: req.params.id});
  }

};

function validate(question) {

  var q = schema({
    title: {
      type: 'string',
      required: true,
      message: 'Title is required'
    },
    body: {
      type: 'string',
      required: true,
      message: 'Body is required'
    }
  });

  return q.validate(question);
}