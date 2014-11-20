/**
 * Created by jelenabudakovic on 10/27/14.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//require
require('../models/Track');
var Track = mongoose.model('Track');

//GET handler
router.get("/", function(req, res){

    Track.find({}).populate('artist').populate('album').exec(function (err, found) {
        if (err){
            res.status(404).end();
        }
        else{
            res.json(found);}
    })
});

router.get("/:id", function(req, res){
    Track.findById(req.params.id, function (err, found) {
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
    Track.findById(req.params.id, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else{
            if(!found){
                res.status(404).end();
            }
            else{
                Track.remove(found, function(err){
                    res.status(204).end()
                })
            }
        }


    });
});
router.post("/", function(req, res, next){

    var tra = new Track({
        name: req.body.name,
        artist: req.body.artist,
        duration: req.body.duration,
        file: req.body.file,
        album: req.body.album,
        id3Tags: req.body.id3Tags,
        dateCreated: req.body.dateCreated,
        dateReleased: req.body.dateReleased
    });

    tra.save(function(err,saved){
        if (err){
            res.status(400).end();
        }
        else{
            res.send(saved);}
    });
});

router.put("/:id", function(req, res, next){
    Track.findById(req.params.id, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else if(!found){
            var tra = new Track({
                _id: req.params.id,
                name: req.body.name,
                artist: req.body.artist,
                duration: req.body.duration,
                file: req.body.file,
                album: req.body.album,
                id3Tags: req.body.id3Tags,
                dateCreated: req.body.dateCreated,
                dateReleased: req.body.dateReleased
            });

            tra.save(function(err,saved){

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
                found.duration=req.body.duration,
                found.file=req.body.file,
                found.album=req.body.album,
                found.id3Tags=req.body.id3Tags,
                found.dateCreated=req.body.dateCreated,
                found.dateReleased=req.body.dateReleased

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