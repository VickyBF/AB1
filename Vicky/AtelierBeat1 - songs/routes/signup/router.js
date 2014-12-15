/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware =  require('../middleware');
var rootUrl = require("../../config").url;

router.all('/', middleware.supportedMethods('GET, OPTIONS'));



var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
};

router.get('/library', isAuthenticated, function(req, res, next){
    res.render('library', {user: req.user});
    console.log('sei nel router/signup/router.js')
});

//list users
//router.get('/', function(req, res, next) {
//
//    res.render('signup');
//
//});


module.exports = router;