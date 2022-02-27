const route = require('express').Router();
const DBHelper = require('../db/dbHelper');

route.patch(`/todo/:id`, async(req, res) =>{
    const Todos = new DBHelper();
    await Todos.updateTodo(req.params.id, req.body.todoId, req.body.title, req.body.finished)
    res.status(200).json("")
})

module.exports = route;