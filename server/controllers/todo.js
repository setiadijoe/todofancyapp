const Todo = require('../models/todos')

class TODO {
    static findAll (req, res){
        Todo.find({})
        .then(list=>{
            res.send(list).status(200)
        })
        .catch(err=>{
            res.send(err).status(400)
        })
    }

    static create (req, res){
        let todo = new Todo(req.body)
        todo.save()
            .then(list=>{
                let todo = {
                    message: 'Todo has been added',
                    list
                }
                res.send(todo).status(201)
            })
            .catch(err=>{
                res.send(err).status(400)
            })
    }

    static findByUserId(req, res){
        Todo.find({user_id:req.params.user_id})
            .then(list=>{
                res.send(list).status(200)
            })
            .catch(err=>{
                res.send(err).status(400)
            })
    }

    static findById(req, res){
        Todo.findById(req.params.id)
            .then(list=>{
                if(list) res.send(list).status(200)
                    res.send({message: 'There is nothing todo'}).status(404)
            })
            .catch(err=>{
                res.send(err).status(400)
            })
    }

    static update(req, res){
        Todo.findById(req.params.id)
            .then(list=>{
                if(list){
                    if(list.user_id === req.body.user_id){
                        let newInfo = {
                            todo_list: req.body.todo_list,
                            done: req.body.done
                        }
                        Todo.update({_id:list.id}, newInfo,{runValidators:true})
                            .then(result=>{
                                res.send({
                                    message: 'Todo has been updated',
                                    result,
                                    value: list,
                                    newInfo: newInfo
                                })
                            })
                    } else {
                        res.send({message: 'Access denied'}).status(403)
                    }
                } else {
                    res.send({message:'Todo not found'}).status(404)
                }
            })
            .catch(err=>{
                res.send(err).status(400)
            })
    }

    static deleteById(req, res){
        Todo.findById(req.params.id)
            .then(list=>{
                if(list){
                    if(list.user_id === req.body.user_id){
                        Todo.deleteOne({_id:list.id})
                            .then(status=>{
                                res.send({
                                    message: 'Todo has been deleted',
                                    status,
                                    list
                                })
                            })
                    } else {
                        res.send({message: 'Access denied'}).status(403)
                    }
                } else {
                    res.send({message: 'Todo not found'}).status(404)
                }
            })
            .catch(err=>{
                res.send(err).status(400)
            })
    }

}

module.exports = TODO;