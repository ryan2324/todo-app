const route = require('express').Router();
const path = require('path');


route.get('/', async (req, res) =>{
    res.sendFile(path.resolve(__dirname, `../views/index.html`))
})


module.exports = route;