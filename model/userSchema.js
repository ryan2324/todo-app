const mongoose = require('mongoose');
const Todos = require('./todosSchema').schema;
const User =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    todos:[Todos]
})

module.exports = mongoose.model('User', User);