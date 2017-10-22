const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const todoSchema = new Schema({
    "token": {type:String, required: true},
    "todos" : String,
    "done" : {type:Boolean, default: false}
})

const todo = mongoose.model('Todos', todoSchema)

class TODO {
    static findByToken(token, cb){
        Todos.findOne({"token": token}, (err, todolist)=>{
            if(!err){
                cb(todolist)
            } else {
                cb(err)
            }
        })
    }

    static createNewTodo(token, body, cb){
        this.findByToken(token, (err, list)=>{
            if (!err){
                list.set({
                    "token": token,
                    "todos": body.todos
                })
                list.save((err, addlist)=>{
                    if (err) throw err
                    cb(addlist)
                })
            } else {
                cb (err)
            }
        })
    }
}

module.exports = TODO;