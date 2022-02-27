const route = require('express').Router()
const DBHelper = require('../db/dbHelper');

const user = new DBHelper();
route.get('/getuser/:id', async(req, res) =>{
    res.status(200).json(await user.getName(req.params.id))
    
})

module.exports = route;