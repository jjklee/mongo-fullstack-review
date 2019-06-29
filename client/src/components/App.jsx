import React from 'react';
import Form from './Form.jsx';
import List from './List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        todos : []
    }
    this.fetchData = this.fetchData.bind(this);
    this.addData = this.addData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData() {
    axios.get('/api/todos')
    .then(data => {
        this.setState({
            todos : data.data
        })
    })
    .catch( err => console.error('Could not fetch data', err));
  }

  addData(name, priority) {
    axios.post('/api/todos', { name, priority} )
    .then( () => {
        console.log('Added data');
        this.fetchData();
    })
    .catch( err => console.error('Could not add data', err));
  }

  deleteData(id){
    axios.delete(`/api/todos/${id}`)
    .then( () => {
        console.log('Deleted data');
        this.fetchData();
    })
    .catch( err => console.error('Could not delete data', err));
      
  }

  updateData(id, name, priority){
    axios.put(`/api/todos/${id}`, {name, priority})
    .then( () => {
        console.log('Update data');
        this.fetchData();
    })
    .catch( err => console.error('Could not update data', err));
  }

  updateTodo(index, change) {
    const target = this.state.todos[index];
    const _id = target._id;
    const newPriority = target.priority + change;
    axios.put(`/api/todos/${_id}`, {priority : newPriority})
    .then( () => {
        console.log('Update data');
        this.fetchData();
    })
    .catch( err => console.error('Could not update data', err));
  }

  render() {
    return(
      <div>
        <h2>TODO LIST -- MONGODB REVIEW</h2>
        <Form addData={this.addData}/>
        <List todos={this.state.todos} deleteData={this.deleteData} updateData={this.updateTodo}/>
      </div>
    );
  }
}

export default App;