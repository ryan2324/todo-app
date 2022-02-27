const route = require('express').Router();
const DBHelper = require('../db/dbHelper');

const Todos = new DBHelper();
route.get(`/get-all-todos/:todoUserId`, async (req, res) =>{
    const task = await Todos.getAllTodos(req.params.todoUserId);

    res.status(200).json(task);

})

module.exports = route;