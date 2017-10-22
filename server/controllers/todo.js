const ToDo = require('../models/todos')

class TODO {
    static findByToken (token, cb){
        ToDo.findByToken(token, (err, data)=>{
            if(!err){
                cb(data)
            } else {
                cb(err)
            }
        })
    }

    static createNewTodo (token, body, cb){
        this.findByToken(token, (err, data)=>{
            if (!err){
                
            }
        })
    }
}