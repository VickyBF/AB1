/** @module models/Playlist
* The Playlist Model.
* Schema:
* _id           String       required   unique identifier of the playlist.
* name          String       required   name of the playlist.
* tracks        [ObjectId]   optional   tracks that this playlist contains. They should be `_id`s of Track model documents.
* dateCreated   Date         required   date the playlist was created. Default: Date.now()
*/

/** @constructor
* @param {Object} definition
*/
var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId;

var PlaylistSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        tracks:{type:[ObjectId], ref:"Track"},
        dateCreated : { type: Date, default: Date.now }
    }
);

mongoose.model('Playlist', PlaylistSchema);
module.exports.play=PlaylistSchema;