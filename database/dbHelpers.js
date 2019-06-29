const Todo = require('../database/index');

// getAll should send all todos in database sorted by priority
const getAll = (callback) => {
  Todo
    .find({})
    .then(data => {
      callback(null, data);
    })
    .catch(err => {
      callback(err, null);
    })
    
};

// addTodo should add to your database using req.body
const addTodo = (todo, callback) => {
  var newtodo = new Todo({ name: todo.name, priority: todo.priority });
  newtodo.save((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data)
    }
  })
};

// deleteTodo should delete from database if _id matches
const deleteTodo = (_id, callback) => {
  Todo  
    .deleteOne({ _id }, (err) => {
      callback(err);
    })

};

// updateTodo should update todo at _id using req.body
const updateTodo = () => {

}

module.exports = {
    getAll,
    addTodo,
    deleteTodo,
    updateTodo
}