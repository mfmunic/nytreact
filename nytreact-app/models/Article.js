
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  snippet: {
    type: String,

  },
  
  saved: {
    type: Boolean,
    default: false
  }
});


var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;
