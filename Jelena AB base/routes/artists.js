/**
 * Created by jelenabudakovic on 10/27/14.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//require
require('../models/Artist')
var Artist = mongoose.model('Artist');


//GET handler
router.get("/", function(req, res){

    Artist.find({}, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else{
            res.json(found);}
    });
});

router.get("/:id", function(req, res){
    Artist.findById(req.params.id, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else{
            if(!found){
                res.status(404).end();
            }
            else{
                res.json(found);}
        }


    });
});

router.delete("/:id", function(req, res){
    Artist.findById(req.params.id, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else{
            if(!found){
                res.status(404).end();
            }
            else{
                Artist.remove(found, function(err){
                    res.status(204).end()
                })
            }
        }


    });
});

router.post("/", function(req, res, next){

    var art = new Artist({
        name: req.body.name,
        genre: req.body.genre,
        artwork: req.body.artwork,
        dateCreated: req.body.dateCreated
    });

    art.save(function(err,saved){
        if (err){
            res.status(400).end();
        }
        else{
            res.send(saved);}
    });
});

router.put("/:id", function(req, res, next){
    Artist.findById(req.params.id, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else if(!found){
            var art = new Artist({
                _id: req.params.id,
                name: req.body.name,
                genre: req.body.genre,
                artwork: req.body.artwork,
                dateCreated: req.body.dateCreated
            });

            art.save(function(err,saved){

                if (err){
                    res.status(400).end();
                }
                else{
                    res.send(saved);}
            });
        }
        else if(found){
            found.name=req.body.name,
                found.genre=req.body.genre,
                found.artwork=req.body.artwork,
                found.dateCreated=req.body.dateCreated

            found.save(function(err,saved){
                if (err){
                    res.status(400).end();
                }
                else{
                    res.status(204);
                    res.send(saved);}
            });
        }
    })
});

module.exports = router;