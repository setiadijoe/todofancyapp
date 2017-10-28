const express = require('express');
const router = express.Router();

const todosRoute = require('./todos');

router.use('/todos', todosRoute);

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Server API Index'
    });
});

module.exports = router;