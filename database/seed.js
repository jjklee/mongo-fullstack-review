const mongoose = require('mongoose');

const Todo = require('./index.js');

const seedData = [
    {
        name : 'Sleep',
        priority : 30
    },
    {
        name : 'Study',
        priority : 50
    },
    {
        name : 'Eat',
        priority : 10
    },
    {
        name : 'Chores',
        priority : 3
    }
];

const seedFunction = () => {
    Todo.create(seedData)
    .then( () => {
        console.log('Database seeded!');
        mongoose.connection.close();
    })
    .catch( err => console.error(err));
}

seedFunction();