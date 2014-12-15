'use strict';

var mongoose = require('mongoose');
var Playlist = mongoose.model('Playlist');
var ObjectId = mongoose.Types.ObjectId;

var artists = {
  name : 'Artist',
  data : [
    {
      "_id"          : ObjectId(),
      "name"         : "Rolling Stones",
      "genre"        : " ",
      "artwork"      : "http://wwwrollingstones.wpengine.netdna-cdn.com/files/2014/03/1004820_1461060177444768_1815036466_n-1.jpg",
      "dateCreated"  : "Sat Sep 27 2014 10:39:20 GMT+0200 (CEST)"
    },

    {
      "_id"          : ObjectId(),
      "name"         : "AC/DC",
      "genre"        : "Hard Rock",
      "artwork"      : "http://www.thissongslaps.com/wp-content/uploads/2014/09/acdc2009.jpg",
      "dateCreated"  : "Sat Sep 27 2014 10:40:40 GMT+0200 (CEST)"
    },

    {
      "_id"          : ObjectId(),
      "name"         : "Muse",
      "genre"        : "Post Rock",
      "artwork"      : "http://static.gigwise.com/artists/wenn20404434_600.jpg",
      "dateCreated"  : "Sat Sep 27 2014 10:41:20 GMT+0200 (CEST)"
    },

    {
      "_id"          : ObjectId(),
      "name"         : "Marco Mengoni",
      "genre"        : "Post Rock",
      "artwork"      : "http://cdn.mondoreality.com/wp-content/uploads/2013/02/Mengoni.jpg",
      "dateCreated"  : "Sat Sep 27 2014 10:41:43 GMT+0200 (CEST)"
    },

    {
      "_id"          : ObjectId(),
      "name"         : "Queen",
      "genre"        : "Post Rock",
      "artwork"      : "http://vashauraa.files.wordpress.com/2009/12/queen_3.jpg",
      "dateCreated"  : "Sat Sep 27 2014 10:41:43 GMT+0200 (CEST)"
    },
///////////////////////////////////////////////////////////////////////////////
    {
      "_id"          : ObjectId(),
      "name"         : "God is an Astronaut",
      "genre"        : "Post Rock",
      "artwork"      : "http://38.media.tumblr.com/bb80c0bb50ad6cdd93aacf43621b8466/tumblr_n4s5k2Rn3c1qb48t9o1_500.jpg",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)"
    }
///////////////////////////////////////////////////////////////////////////////
  ]
};

var albums = {
  name : 'Album',
  data : [
    ///////////////////////////////       Albums of Rolling Stones       ////////////////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "name"         : "Flash Point",
      "artwork"      : "http://images.uulyrics.com/cover/t/the-rolling-stones/album-flashpoint.jpg",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "EMI"
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "name"         : "Love You Live",
      "artwork"      : "http://upload.wikimedia.org/wikipedia/en/7/75/Loveyoulive.jpg",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "EMI"
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "name"         : "Live Licks",
      "artwork"      : "http://ecx.images-amazon.com/images/I/61T4YWTPH8L.jpg",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "EMI"
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "name"         : "Hyde Park Live",
      "artwork"      : "http://www.mbmusic.it/wp-content/uploads/2013/07/the-rolling-stones-hyde-park-live-album-cover-2013.jpg",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "EMI"
    },
    ///////////////////////////////       Albums of AC/DC        ////////////////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "name"         : "Highway to Hell",
      "artwork"      :  "http://www.jesus-is-savior.com/Evils%20in%20America/Rock-n-Roll/highway_to_hell-large.jpg",
      "dateReleased" : "Fri Jul 25 1980 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Albert/Atlantic Records"
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "name"         : "High Voltage",
      "artwork"      : "http://1.bp.blogspot.com/-DWtwrzH2igg/UFOqE6kdgLI/AAAAAAAAEzk/YPjlopdwtlI/s1600/acdc+-+high-voltage.jpg",
      "dateReleased" : "Fri Jul 25 1980 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Albert/Atlantic Records"
    },


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "name"         : "The Razors Edge",
      "artwork"      : "http://www.tasawakonline.com/uploads/2014/04/Razors+Edge+ACDC.jpg",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Atco Records, Albert/EMI"
    },
    ///////////////////////////////       Albums of Muse        ////////////////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "name"         : "Showbiz",
      "artwork"      : "http://ecx.images-amazon.com/images/I/51W-KlsfVnL.jpg",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Megaforce"
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "name"         : "Origin Of Symmetry",
      "artwork"      : "http://www.grayflannelsuit.net/blog/wp-content/uploads/2011/02/muse_origin_of_symmetry.jpg",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Megaforce"
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "name"         : "Hullabaloo",
      "artwork"      : "http://artwork-cdn.7static.com/static/img/sleeveart/00/000/311/0000031189_500.jpg",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Megaforce"
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "name"         : "Absolution",
      "artwork"      : "http://www.lyrics007.com/images/covers/0/16/49",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Megaforce"
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "name"         : "Back Hotels and Revelations",
      "artwork"      : "http://www.discology.be/jaquettes2/Muse_Black-Holes-And-Revelations.jpg",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Megaforce"
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "name"         : "HAARP",
      "artwork"      : "http://3.bp.blogspot.com/_NGeOXNeQU3k/TUmWOeQnD_I/AAAAAAAAARI/og_CSTIGdfI/s1600/Muse%20-%20HAARP.jpg",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Megaforce"
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "name"         : "The Resistance",
      "artwork"      : "http://fc07.deviantart.net/fs70/f/2012/017/f/a/muse___the_resistance_by_larryhazard-d4mqbn8.png",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Megaforce"
    },


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "name"         : "The 2nd Law",
      "artwork"      : "http://ecx.images-amazon.com/images/I/51Tf346S0uL.jpg",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Elektra/Asylum"
    },
///////////////////////////////       Albums of Marco       ////////////////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[3]._id,
      "name"         : "Dal inferno",
      "artwork"      : "http://testimusica.myblog.it/media/02/02/3120059636.jpg",
      "dateReleased" : "Tue Oct 07 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Def Jam"
    },

///////////////////////////////       Albums of Queen        ////////////////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "name"         : "Sheer Heart Attack",
      "artwork"      : "http://www.clemsmusicreviews.com/sheerheartattack.jpg",
      "dateReleased" : "Fri Feb 04 2005 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Revive Records"
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "name"         : "Return Of The Champions",
      "artwork"      : "http://img11.nnm.me/8/8/7/5/1/143e96bca0d09ad8d59185e1ad7.jpg",
      "dateReleased" : "Fri Feb 04 2005 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Revive Records"
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "name"         : "At the Beeb",
      "artwork"      : "https://upload.wikimedia.org/wikipedia/ru/5/57/At_the_Beeb.png",
      "dateReleased" : "Fri Feb 04 2005 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Revive Records"
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "name"         : "Rock Montreal",
      "artwork"      : "https://upload.wikimedia.org/wikipedia/ru/6/66/Queen_Rock_Montreal.jpg",
      "dateReleased" : "Fri Feb 04 2005 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:42:10 GMT+0200 (CEST)",
      "label"        : "Revive Records"
    }
    ////////////////////////////////////////////////////////////////////////////////////
  ]
}

var tracks = {
  name : 'Track',
  data : [
///////////////////       Songs of Flashpoint (Rolling Stones)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Continental Drift",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Start Me Up",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Sad Sad Sad",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Miss You",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Rock and a Hard Place",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Ruby Tuesday",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "You Can’t Always Get What You Want",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Factory Girl",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Can’t Be Seen",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Little Red Rooster",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Paint It Black",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Sympathy for the Devil",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Brown Sugar",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Jumping Jack Flash",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "(I Can’t Get No) Satisfaction",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Highwire",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Sex Drive",
      "duration"     : 442,
      "file"         : "tracks_folder/1.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
///////////////////       Songs of Love You Live (Rolling Stones)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Mannish Boy",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Crackin’ Up",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Little Red Rooster",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "It’s Only Rock’n’Roll (But I Like It) [Remastered 2009]",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Brown Sugar",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Jumping Jack Flash",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Sympathy for the Devil",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Fanfare for the Common Man",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Honky Tonk Women",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "If You Can’t Rock Me / Get Off Of My Cloud",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Happy",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Hot Stuff",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Star Star",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Tumbling Dice",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Fingerprint File",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "You Gotta Move",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "You Can’t Always Get What You Want",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
///////////////////       Songs of Live Licks (Rolling Stones)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Neighbours",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Monkey Man",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Rocks Off",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Can’t You Hear Me Knocking",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "That’s How Strong My Love Is",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Beast of Burden",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "When the Whip Comes Down",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Rock Me, Baby",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "You Don’t Have to Mean It",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Worried About You",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Everybody Needs Somebody to Love",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Brown Sugar",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Street Fighting Man",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Paint It Black",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "You Can’t Always Get What You Want",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Start Me Up",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "It’s Only Rock’n’Roll (But I Like It)",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Angie",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Honky Tonk Women",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Happy",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Gimme Shelter",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "(I Can’t Get No) Satisfaction",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },




///////////////////       Songs of Hyde Park Live (Rolling Stones)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Start Me Up",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "It’s Only Rock ‘N’ Roll",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Tumbling Dice",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Emotional Rescue",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Street Fighting Man",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Ruby Tuesday",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Doom And Gloom",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Paint It Black",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Honky Tonk Women",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "You Got The Silver",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Before They Make Me Run",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Miss You",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Midnight Rambler",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Gimme Shelter",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Jumpin’ Jack Flash",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Sympathy For The Devil",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Brown Sugar",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "You Can’t Always Get What You Want",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



///////////////////       Songs of Highway To Hell (AC/DC)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Highway To Hell",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Girls Got Rhythm",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Walk All Over You",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Touch Too Much",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Beating Around The Bush",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Shot Down In Flames",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Get It Hot",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "If You Want Blood (You've Got It)",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Love Hungry Man",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Night Prowler",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


///////////////////       Songs of High Voltage (AC/DC)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "It's A Long Way To The Top (If You Wanna Rock 'N' Roll)",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "Rock 'N' Roll Singer",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "The Jack",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "Live Wire",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "T.N.T.",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "Can I Sit Next To You Girl",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "Little Lover",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "She's Got Balls",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "High Voltage",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


///////////////////       Songs of The Razor's Edge (6) (AC/DC (1))   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Thunderstruck",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Fire Your Guns",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Moneytalks",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "The Razor's Edge",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Mistress For Christmas",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Rock Your Heart Out	",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Are You Ready",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Got You By The Balls",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Shot Of Love",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Let's Make It",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Goodbye And Good Riddance To Bad Luck",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "If You Dare	",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

///////////////////       Songs of Showbiz (7) (Muse - nr.2)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Sunburn",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Muscle Museum",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Filip",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Falling Down",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Cave",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Showbiz",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Unintended",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Uno",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Sober",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Escape",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Overdue",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Hate This and I'll Love You",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Spiral Static",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


///////////////////       Songs of Origin Of Symmetry (8) (Muse - nr.2)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "New Born",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Bliss",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Space dementia",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Hyper Music",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Plug in Baby",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Citizen Erased",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Micro Cuts",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Screenager",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Dark Shines",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Feeling Good",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Megalomania",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Futurism",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



///////////////////       Songs of Hullabaloo (9) (Muse - nr.2)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Forced In",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Shrinking Universe",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Recess",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Yes Please",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Map of your Head",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Nature_1",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Shine Acoustic",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Ashamed",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "The Gallery",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Hyper Chondriac Music",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Dead Star",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Micro Cuts",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Citizen Erased",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Showbiz",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Megalomania",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Dark Shines",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Screenager",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Space Dementia",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "In Your World",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Muscle Museum",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Agitated",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


///////////////////       Songs of Absolution (10) (Muse - nr.2)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Apocalypse Please",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Time Is Running Out",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Sing For Absolution",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Stockholm Syndrome",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Falling Away with You",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Interlude",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Hysteria",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Blackout",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Butterflies and Hurricanes",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "The Small Print",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Endlessly",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Thoughts of A Dying Atheist",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Ruled by Secrecy",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Fury",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


///////////////////       Songs of Back Hotels and Revelations (11) (Muse - nr.2)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Take A Bow",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Starlight",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Supermassive Black Hole",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Map of The Problematique",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Soldier's Poem",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Invincible",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Assassin",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Exo-Politics",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "City Of Delusion",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Hoodoo",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Knights Of Cydonia",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Glorious",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


///////////////////       Songs of HAARP (12) (Muse - nr.2)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Intro",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Knights Of Cydonia",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Hysteria",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Supermassive Black Hole",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Map of the Problematique",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Butterflies and Hurricanes",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Invincible",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Starlight",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Time is Running Out",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "New Born",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Unintended",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Micro Cuts",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Stockholm Syndrome",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Take a Bow",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


///////////////////       Songs of The Resistance (13) (Muse - nr.2)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[13]._id,
      "name"         : "Uprising",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[13]._id,
      "name"         : "Resistance",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[13]._id,
      "name"         : "Undisclosed Desires",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[13]._id,
      "name"         : "United States Of Eurasia",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[13]._id,
      "name"         : "Guiding Light",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[13]._id,
      "name"         : "Unnatural Selection",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[13]._id,
      "name"         : "MK Ultra",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[13]._id,
      "name"         : "I Belong to You",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },


///////////////////       Songs of The 2nd Law (14) (Muse - nr.2)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Supremacy",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Madness",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Panic Station",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Prelude",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Survival",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Follow Me",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Animals",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Explorers",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Big Freeze",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Save me",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Liquid State",
      "duration"     : 268,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

///////////////////       Songs of Dal Inferno (15) (Marco Mengoni - nr.3)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[3]._id,
      "album"        : albums.data[15]._id,
      "name"         : "Dal Inferno",
      "duration"     : 292,
      "file"         : "tracks_folder/3.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

///////////////////       Songs of Sheer Heart Attack (16) (Queen - nr.4)   ////////////////////////


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Brighton Rock",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Killer Queen",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Tenement Funster",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Flick of the Wrist",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Lily of the Valley",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Now I'm Here",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "In the Lap of the Gods",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Stone Cold Crazy",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Dear Friends",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Misfire",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Bring Back That Leroy Brown",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "She Makes Me (Stormtrooper in Stilettos)",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "In the Lap of the Gods... Revisited",
      "duration"     : 310,
      "file"         : "tracks_folder/4.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

///////////////////       Songs of Return Of The Champions (17) (Queen - nr.4)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Reaching Out",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Tie Your Mother Down",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "I Want To Break Free",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Fat Bottomed Girls",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Wishing Well",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Another One Bites The Dust",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Crazy Little Thing Called Love",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Say It's Not True",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "39",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Love Of My Life",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Hammer To Fall ",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Feel Like Makin' Love",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Let There Be Drums (Instrumental)",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "I'm In Love With My Car",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Guitar Solo",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Last Horizon",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "These Are The Days Of Our Lives",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Radio Ga Ga",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Can't Get Enough",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "A Kind Of Magic",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "I Want It All",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Bohemian Rhapsody",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "The Show Must Go On",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "All Right Now",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "We Will Rock You ",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "We Are The Champions",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "God Save The Queen",
      "duration"     : 535,
      "file"         : "tracks_folder/5.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },



///////////////////       Songs of At The Beeb (18) (Queen - nr.4)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[18]._id,
      "name"         : "My Fairy King",
      "duration"     : 515,
      "file"         : "tracks_folder/6.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[18]._id,
      "name"         : "Keep Yourself Alive",
      "duration"     : 515,
      "file"         : "tracks_folder/6.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[18]._id,
      "name"         : "Doing All Right",
      "duration"     : 515,
      "file"         : "tracks_folder/6.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[18]._id,
      "name"         : "Liar",
      "duration"     : 515,
      "file"         : "tracks_folder/6.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[18]._id,
      "name"         : "Ogre Battle",
      "duration"     : 515,
      "file"         : "tracks_folder/6.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[18]._id,
      "name"         : "Great King Rat",
      "duration"     : 515,
      "file"         : "tracks_folder/6.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[18]._id,
      "name"         : "Modern Times Rock 'N' Roll",
      "duration"     : 515,
      "file"         : "tracks_folder/6.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[18]._id,
      "name"         : "Son And Daughter",
      "duration"     : 515,
      "file"         : "tracks_folder/6.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },

///////////////////       Songs of Rock Montreal (19) (Queen - nr.4)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Intro",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "We Will Rock You",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Let Me Entertain You",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Play The Game",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Somebody to Love",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Killer Queen",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "I'm In Love With My Car",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Get Down, Make Love",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Save Me",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Now I'm Here",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Dragon Attack",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Now I'm Here",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Love Of My Life",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Under Pressure",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Keep Yourself Alive",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Drum And Tympani Solo",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Guitar Solo",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Flash",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "The Hero",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Crazy Little Thing Called Love",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Jailhouse Rock",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Bohemian Rhapsody",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Tie Your Mother Down",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Another One Bites The Dust",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Sheer Heart Attack",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "We Will Rock You",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "We Are The Champions",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "God Save The Queen",
      "duration"     : 507,
      "file"         : "tracks_folder/7.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 0
    }
  ]
}


var users = {
  name : 'User',
  data : [
    {
      "_id"          : ObjectId(),
      "firstName"    : "Annamaria",
      "lastName"     : "Accardo",
      "userName"     : "Anna",
      "email"        : "annamaria.accardo@usi.ch",
      "password"     : "ciao",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "playlists"    : [
        new Playlist ({
          "name" : 'Fav1',
          "tracks": [tracks.data[3]._id, tracks.data[1]._id]
        }),
        new Playlist ({
          "name" : 'Fav2',
          "tracks": [tracks.data[0]._id, tracks.data[4]._id]
        })
      ]
    },

    {
      "_id"          : ObjectId(),
      "firstName"    : "Robert",
      "lastName"     : "Sapolsky",
      "userName"     : "rob",
      "email"        : "sapolsky@stanford.edu",
      "password"     : "baboon",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "playlists"    : [
        new Playlist ({
          "name" : 'Thrash Metal favs',
          "tracks": [tracks.data[0]._id, tracks.data[1]._id]
        }),
        new Playlist ({
          "name" : 'Thrash Metal favs 2',
          "tracks": [tracks.data[6]._id, tracks.data[7]._id]
        })
      ]
    },

    {
      "_id"          : ObjectId(),
      "firstName"    : "Vasileios",
      "lastName"     : "Triglianos",
      "userName"     : "vassilis",
      "email"        : "vasileios.triglianos@usi.ch",
      "password"     : "ciao",
      "dateCreated"  : "Sat Sep 27 2014 10:28:21 GMT+0200 (CEST)",
      "playlists"    : [
        new Playlist ({
          "name" : 'Iron maiden',
          "tracks": [tracks.data[0]._id, tracks.data[1]._id]
        }),
        new Playlist ({
          "name" : 'Thrash Metal favs 3',
          "tracks": [tracks.data[5]._id, tracks.data[6]._id]
        })
      ]
    }
  ]
}

var seedData = [];
seedData.push(artists);
seedData.push(albums);
seedData.push(tracks);
seedData.push(users);

module.exports = seedData;
