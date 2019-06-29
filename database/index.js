const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todolist')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to db');
});

var todoSchema = new mongoose.Schema({
  name: String,
  priority: Number
})

var Todo = mongoose.model('todo', todoSchema);


module.exports = Todo;