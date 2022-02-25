const route = require('express').Router();
const DBHelper = require('../db/dbHelper');


route.get(`/todo/:id`, async (req, res) =>{
    const Todos = new DBHelper();
    res.status(200).json(await Todos.getSingleTodo(req.params.id));

})

module.exports = route;