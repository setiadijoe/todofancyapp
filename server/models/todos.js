const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const todoSchema = new Schema({
    "token": {type:String, required: true},
    "todos" : String,
    "done" : {type:Boolean, default: false}
})

const todo = mongoose.model('Todos', todoSchema)

