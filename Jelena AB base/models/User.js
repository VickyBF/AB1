/** @module users/User
* The User Model
* Schema:
* _id           ObjectId           Unique identifier of the user
* userName      String             Username of the user
* email         String             Email address of the user
* password      String             Password for the user account
* firstName     String             First name of the user. Default: username
* lastName      String             Last name of the user. Default: username
* dateCreated   Date               Date the user was created.  Default: Date.now()
* playlists     [PlaylistSchema]   Playlists of the user. Default: []
*/
var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId;
var playli=require('./Playlist');
var PlaylistSchema=playli.play;


/** @constructor
 * @param {Object} definition
 */
var userSchema = new mongoose.Schema(
//<!-- build:remove -->
    {
        userName : { type: String, required: true },
        firstName: { type: String },
        lastName : { type: String },
        password : { type: String, required: true },
        email   : { type: String, required: true },
        dateCreated : { type: Date,default: Date.now },
        playlists : { type: [PlaylistSchema], default: [] }
    }
//<!-- /build --
);
userSchema.pre('save',function(next){
    if(!this.firstName){
        this.firstName=this.userName
    }
    if(!this.lastName){
        this.lastName=this.userName
    }
    next();
});
mongoose.model('User', userSchema);