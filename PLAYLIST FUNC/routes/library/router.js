'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');
var rootUrl = require("../../config").url;

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

//list users
router.get('/', function(req, res, next) {

    res.render('library');

});

module.exports = router;