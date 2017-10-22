const ToDo = require('../models/todos')

class TODO {
    static findByToken (req, res){
        ToDo.findByToken(token, (err, data)=>{
            if(!err){
                res.send(data)
            } else {
                res.send(err)
            }
        })
    }

    static createNewTodo (req, res){
        this.findByToken(req.token, req.body, (err, data)=>{
            if (!err){
                res.send(data)
            } else {
                res.send(err)
            }
        })
    }
}

module.exports = TODO;