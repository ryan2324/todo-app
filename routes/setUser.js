const DBHelper = require('../db/dbHelper');

const route = require('express').Router();

const user = new DBHelper();
route.post('/user', async (req, res) =>{
   res.json(await user.setName(req.body.name, []));
})

module.exports = route;