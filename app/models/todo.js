const mongoose = require('mongoose')

let Todo = mongoose.model('Todo', {
  text : String
});