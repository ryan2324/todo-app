const Todos = require('../model/todosSchema');
const User = require('../model/userSchema');
const date = new Date()
const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
console.log(currentDate)
class DBHelper{
    constructor(_title, _date, _finished, _name){
        this.title = _title;
        this.date = _date;
        this.finished = _finished;
        this.name = _name;
    }

    async addTodo(id, todo){
        await User.updateOne({_id: id}, {$push: {todos: todo}})
        //await Todos.insertMany({title: _title, date: currentDate ,finished: _finished})
    }

    async getAllTodos(_id){
        return await User.findOne({_id})
        
    }

    async getSingleTodo(_id, todoId){
        return await User.findOne({_id}, {todos: {$elemMatch: {_id: todoId}}})
    }

    async updateTodo(_id, todoId, _title, _finished){ 
        await User.updateOne({_id}, {$pull: {todos: {_id: todoId}}})
        await User.updateOne({_id}, {$push: {todos: {title: _title, date: currentDate, finished: _finished}}})
    }

    async del(_id, todoId){
        await User.updateOne({_id}, {$pull: {todos: {_id: todoId}}})    
    }

    async setName(name, todo){
        let newUser = await User.insertMany({name, todos: todo})
        return newUser[0]._id.toString()

    }
    async getName(_id){
        return await User.findOne({_id})
    }


}
module.exports = DBHelper;