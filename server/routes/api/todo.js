const express = require('express');
const router = express.Router()
const ToDo = require('../../controllers/todo.js')

router.get('/', ToDo.findAll)

router.get('/user_id', ToDo.findByUserId)

router.get('/:id', ToDo.findById)

router.post('/', ToDo.create)

router.put('/:id', ToDo.update)

router.delete('/:id', ToDo.deleteById)

module.exports = router;