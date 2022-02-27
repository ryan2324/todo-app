const route = require('express').Router();
const DBHelper = require('../db/dbHelper');

const Todos = new DBHelper();
route.delete(`/del/todo/:todoUserId/:id`, async(req, res) =>{
    await Todos.del(req.params.todoUserId, req.params.id);
})

module.exports = route;