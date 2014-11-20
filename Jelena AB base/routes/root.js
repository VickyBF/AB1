/**
 * Created by jelenabudakovic on 10/27/14.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var config=require('../config');
var URL=config.url;

router.get("/", function(req, res){
    var Object= {
        Title: "AtelierBeats API Server",
        links:[
            {
               rel: '/albums',
               href:URL + '/albums'
            },
            {
               rel: '/artists',
               href:URL + '/artists'
            },
            {
               rel:'/tracks',
               href:URL + '/tracks'
            },
            {
                rel:'/users',
                href:URL + '/users'
            }]
};
    if(req.accepts("text/html")){
        res.type("text/html");
        //res.render("../views/index.dust",Object);
        res.render("library.dust");
    }
    else if(req.accepts("application/json")){
        res.type("application/json");
        res.json(Object.links);
    }

});
module.exports = router;
