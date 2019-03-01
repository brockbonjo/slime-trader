var express = require('express');
var router = express.Router();
var slimesCtrl = require('../controllers/slimes');

router.post('/', slimesCtrl.addSlime);

module.exports = router;