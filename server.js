const express = require('express');
const mongoose = require('mongoose');

const path = require('path')
const addTodo = require('./routes/add-todo');
const home = require('./routes/home');
const getAllTodos = require('./routes/getAllTodos');
const updateTodo = require('./routes/updateTodo')
const editPage = require('./routes/editPage')
const getOneTodo = require('./routes/getOneTodo');
const deleteTodo = require('./routes/deleteTodo');
const setUser = require('./routes/setUser');
const getUser = require('./routes/getUser');



const app = express();
const DBHelper = require('./db/dbHelper');

const uri = `mongodb+srv://ry:ry@cluster0.epfkc.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(uri,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})


app.use('/public', express.static('public'));    

app.use(express.json())
app.use(addTodo);
app.use(home);
app.use(updateTodo);
app.use(getAllTodos);
app.use(editPage);
app.use(getOneTodo);
app.use(deleteTodo);
app.use(setUser);
app.use(getUser);

const PORT = process.env.PORT || 3000;
app.listen((PORT), () =>{
    console.log(`listening on port: ${PORT}`)
})

// var id = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');
// // const newStr = id.replace('new ObjectId(" ")', "")
// console.log(id.toString())