const route = require('express').Router();
const path = require('path');

route.get(`/todo`, async(req, res) =>{
    res.sendFile(path.resolve(__dirname, `../views/edit.html`))
})



// route.get('/todo', async (req, res) =>{
    
//     res.sendFile(path.resolve(__dirname, `../views/edit.html`))
// })


module.exports = route;