/**
 * Created by test on 01.12.14.
 */

var userSchema = new mongoose.Schema(
    {
        userName : { type: String, required: true },
        firstName: { type: String },
        lastName : { type: String },
        password : { type: String, required: true },
        email   : { type: String, required: true },
        dateCreated : { type: Date, default: Date.now },
        playlists : { type: [PlaylistSchema], default: [] }
    }
);