const express = require('express');
const router = express.Router();

const Authenticate = require('../../controllers/auth');

router.post('/decode', Authenticate.decode);

module.exports = router;