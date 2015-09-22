var questions = require('lowdb')('db.json')('questions');
var uuid = require('uuid');
var schema = require('validate');

module.exports = {

  create: function (req, res) {
    var errors = validate(req.body);
    if (errors.length) return res.json({errors});

    req.body.id = uuid();
    questions.push(req.body);
    return res.json(req.body);
  },

  list: function (req, res) {
    var qs = questions;
    return res.json(qs);
  },

  get: function (req, res) {
    var q = questions.find({id: req.params.id});
    return res.json(q);
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