const express = require('express');
const router = express.Router();
const { transferData } = require('./transferService'); 

router.post('/', transferData);

module.exports = router;