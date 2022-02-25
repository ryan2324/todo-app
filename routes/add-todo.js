const express = require('express');
const route = express.Router();
const DBHelper = require('../db/dbHelper')
route.post('/add', async (req, res) =>{
    const Todos = new DBHelper();
    await Todos.addTodo(req.body.title) 

})

module.exports = route;