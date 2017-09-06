var Article = require("../models/Article");

module.exports = {
  // This method handles retrieving quotes from the db
  index: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { _id: req.params.id } : {};
    }
    Article.find({})
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },

  // This method handles creating new quotes
  create: function(req, res) {
    console.log('controller create, req.body', req.body);
    Article.create(req.body).then(function(doc) {
      console.log('should have saved a link');
      res.json(doc);
    }).catch(function(err) {
      console.log('error saving link', err);
      res.json(err);
    });
  },

  // This method handles deleting quotes
  destroy: function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};