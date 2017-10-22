const express = require('express');
const router = express.Router()
const ToDo = require('../controllers/todo.js')

router.get('/', ToDo.findByToken)

router.post('/', ToDo.createNewTodo)

module.exports = router;