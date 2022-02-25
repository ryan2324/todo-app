const route = require('express').Router();
const DBHelper = require('../db/dbHelper');

route.patch(`/todo/:id`, async(req, res) =>{
    const Todos = new DBHelper();
    await Todos.updateTodo(req.params.id, req.body.title, req.body.finished)
    
})

module.exports = route;