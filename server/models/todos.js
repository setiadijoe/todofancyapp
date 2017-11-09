const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    user_id: {type:String, required: [true,'User ID is required']},
    todo_list : {type:String, required: [true, 'Input todo name']},
    done : {type:Boolean, default: false}
})

const Todo = mongoose.model('Todos', todoSchema)

module.exports = Todo