const route = require('express').Router();
const DBHelper = require('../db/dbHelper');


route.get(`/todo/:todoUserId/:id`, async (req, res) =>{
    const Todos = new DBHelper();
    res.status(200).json(await Todos.getSingleTodo(req.params.todoUserId ,req.params.id));

})

module.exports = route;