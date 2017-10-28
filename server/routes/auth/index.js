const express = require('express');
const router = express.Router();

const FBAuth = require('../../controllers/FacebookAuthController');

router.post('/login', FBAuth.login);

module.exports = router;