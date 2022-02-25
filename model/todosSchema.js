const mongoose = require('mongoose');

const TodosSchema =  new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: String
    },
    finished: {
        type: Boolean
    },
    
})
const Todos = mongoose.model('Todos', TodosSchema);


module.exports = Todos;
