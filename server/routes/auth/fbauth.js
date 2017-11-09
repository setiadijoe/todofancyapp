const express = require('express');
const router = express.Router();

const FBAuth = require('../../controllers/fbauth');

router.post('/login', FBAuth.login);

module.exports = router;