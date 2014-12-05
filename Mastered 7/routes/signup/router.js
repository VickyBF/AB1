/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');
var rootUrl = require("../../config").url;

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

//list users
router.get('/', function(req, res, next) {

    res.render('signup');

});

//supported methods
//router.all('/', middleware.supportedMethods('GET, OPTIONS'));

//list users
//router.get('/', function(req, res, next) {
//    if(req.user) // everything is good
//
//      else
//    {
//        res.render('/');
//    }
//
//
//});
//
//router.post('/', /* passport authenticate */ );
/** router for /users */
module.exports = router;
