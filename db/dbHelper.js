const Todos = require('../model/todosSchema');
const date = new Date()
const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
console.log(currentDate)
class DBHelper{
    constructor(_title, _date, _finished){
        this.title = _title;
        this.date = _date;
        this.finished = _finished;
    }

    async addTodo(_title, _finished){
        await Todos.insertMany({title: _title,date: currentDate ,finished: _finished})
    }

    async getAllTodos(){
        return await Todos.find({})
        
    }
    async getSingleTodo(_id){
        return await Todos.findOne({_id})
    }

    async updateTodo(_id, _title, _finished){
        await Todos.updateOne({_id}, {title: _title, date: currentDate, finished: _finished})
    }

    async del(_id){
        await Todos.deleteOne({_id})
    }



}
module.exports = DBHelper;