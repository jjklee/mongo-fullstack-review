const connection = require('./index.js');
const dbHelpers = require('../database/dbHelpers.js');

const get = (req,res) => {
  dbHelpers.getAll((err, data) => { 
    if (err) {
      res.status(404).send('Error getting todo');
    } else {
      let result = data.sort((a, b) => b.priority - a.priority);
      res.status(200).send(result);
    }
  });
}

const post = (req,res) => {
  dbHelpers.addTodo(req.body, (err, data) => {
    if(err) {
      res.status(404).send('Error posting todo');
    } else {
      res.status(201).send('Posted todo successfully');
    }
  });
}

const put = (req,res) => {

}

const destroy = (req,res) => {
  dbHelpers.deleteTodo(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send('Error deleteing todo');
    } else {
      res.status(200).send('Successfully deleted todo')
    }
  })
}


module.exports = {
    get,
    post,
    destroy,
    put
}