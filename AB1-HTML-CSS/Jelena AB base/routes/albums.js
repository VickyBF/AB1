/**
 * Created by jelenabudakovic on 10/27/14.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//require
require('../models/Album');
var Album = mongoose.model('Album');

//GET handler
router.get("/", function(req, res) {

    Album.find({}).populate('artist').exec(function (err, found) {
        if (err) {
            res.status(404).end();
        }
        else {
            res.json(found);
        }
    });
})

router.get("/:id", function(req, res){
    Album.findById(req.params.id, function (err, found) {
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
    Album.findById(req.params.id, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else{
            if(!found){
                res.status(404).end();
            }
            else{
                Album.remove(found, function(err){
                    res.status(204).end()
                })
            }
        }


    });
});

router.post("/", function(req, res, next){

    var alb = new Album({
        name: req.body.name,
        artist: req.body.artist,
        artwork: req.body.artwork,
        tracks: req.body.tracks,
        dateCreated: req.body.dateCreated,
        dateReleased: req.body.dateReleased,
        label: req.body.label
    });

    alb.save(function(err,saved){
        if (err){
            res.status(400).end();
        }
        else{
            res.send(saved);}
    });
});

router.put("/:id", function(req, res, next){
    Album.findById(req.params.id, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else if(!found){
            var alb = new Album({
                _id: req.params.id,
                name: req.body.name,
                artist: req.body.artist,
                artwork: req.body.artwork,
                tracks: req.body.tracks,
                dateCreated: req.body.dateCreated,
                dateReleased: req.body.dateReleased,
                label: req.body.label
            });

            alb.save(function(err,saved){

                if (err){
                    res.status(400).end();
                }
                else{
                    res.send(saved);}
            });
        }
        else if(found){
                found.name=req.body.name,
                found.artist=req.body.artist,
                found.artwork=req.body.artwork,
                found.tracks=req.body.tracks,
                found.dateCreated=req.body.dateCreated,
                found.dateReleased=req.body.dateReleased,
                found.label=req.body.label

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