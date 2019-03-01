var express = require('express');
var router = express.Router();
var tradersCtrl = require('../controllers/traders');

//Get traders index
router.get('/', tradersCtrl.index);

router.get('/help', tradersCtrl.help);

module.exports = router;