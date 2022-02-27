const express = require('express');
const route = express.Router();
const DBHelper = require('../db/dbHelper')
route.post('/add', async (req, res) =>{
    const Todos = new DBHelper();
    console.log(req.body)
    // await Todos.addTodo(req.body.title, req.body.finished) 
    await Todos.addTodo(req.body.todoUserId, req.body.todo) 
    
})

module.exports = route;