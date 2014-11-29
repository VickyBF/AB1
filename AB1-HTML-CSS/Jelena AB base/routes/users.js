/**
 * Created by jelenabudakovic on 10/27/14.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//require
require('../models/User')
var User = mongoose.model('User');


//GET handler
router.get("/", function(req, res){

    User.find({},{password:0}, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else{
            res.json(found);}
    });
});

router.get("/:id", function(req, res){
    User.findById(req.params.id,{password:0}, function (err, found) {
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
    User.findById(req.params.id, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else{
            if(!found){
                res.status(404).end();
            }
            else{
                User.remove(found, function(err){
                    res.status(204).end()
                })
            }
        }


    });
});

router.post("/", function(req, res, next){

    var usr = new User({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        dateCreated: req.body.dateCreated,
        playlists: req.body.playlists

    });

    usr.save(function(err,saved){
        if (err){
            res.status(400).json({}).end();
        }
        else{
            var newSaved={
                _id: saved.id,
                userName: saved.userName,
                firstName: saved.firstName,
                lastName: saved.lastName,
                email: saved.email,
                dateCreated: saved.dateCreated,
                playlists: saved.playlists
            };
            res.send(newSaved);}
    });
});

router.get("/:id/playlists", function(req, res){
    User.findById(req.params.id,{password:0}, function (err, found) {
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

router.put("/:id", function(req, res, next){
    User.findById(req.params.id, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else if(!found){
            var usr = new User({
                _id: req.params.id,
                userName: req.body.userName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password,
                email: req.body.email,
                dateCreated: req.body.dateCreated,
                playlists: req.body.playlists
            });

            usr.save(function(err,saved){

                if (err){
                    res.status(400).end();
                }
                else{
                    var newSaved={
                        _id: saved.id,
                        userName: saved.userName,
                        firstName: saved.firstName,
                        lastName: saved.lastName,
                        email: saved.email,
                        dateCreated: saved.dateCreated,
                        playlists: saved.playlists
                    };
                    res.send(newSaved);}
            });
        }
        else if(found){
            found.userName=req.body.userName,
                found.firstName=req.body.firstName,
                found.lastName=req.body.lastName,
                found.password=req.body.password,
                found.email=req.body.email,
                found.dateCreated=req.body.dateCreated,
                found.playlists=req.body.playlists

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

router.put("/:id/playlists", function(req, res, next){
    User.findById(req.params.id, function (err, found) {
        if (err){
            res.status(404).end();
        }
        else if(found){
            found._id=req.params.id,
            found.playlists=req.body,
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