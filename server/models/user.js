const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    "name": String,
    "userId": String
})

const user = mongoose.model('Users', userSchema)




