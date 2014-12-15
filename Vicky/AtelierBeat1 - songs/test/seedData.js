'use strict';

var mongoose = require('mongoose');
var Playlist = mongoose.model('Playlist');
var ObjectId = mongoose.Types.ObjectId;

var artists = {
  name : 'Artist',
  data : [
    {
      "_id"          : ObjectId(),
      "name"         : "The Rolling Stones",
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
};

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
      "file"         : "tracks_folder/Continental drift.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Start Me Up",
      "duration"     : 329,
      "file"         : "tracks_folder/Start me up.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Sad Sad Sad",
      "duration"     : 442,
      "file"         : "tracks_folder/Sad Sad Sad.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Miss You",
      "duration"     : 333,
      "file"         : "tracks_folder/Miss You.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Rock and a Hard Place",
      "duration"     : 442,
      "file"         : "tracks_folder/Rock and a hard place.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },



    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Ruby Tuesday",
      "duration"     : 317,
      "file"         : "tracks_folder/Ruby Tuesday.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },



    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "You Can’t Always Get What You Want",
      "duration"     : 442,
      "file"         : "tracks_folder/You can't always get what you want.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Factory Girl",
      "duration"     : 442,
      "file"         : "tracks_folder/Factory Girl.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Can’t Be Seen",
      "duration"     : 442,
      "file"         : "tracks_folder/Cant be seen.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Little Red Rooster",
      "duration"     : 303,
      "file"         : "tracks_folder/Little Red Rooster.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Paint It Black",
      "duration"     : 345,
      "file"         : "tracks_folder/Paint It Black.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Sympathy for the Devil",
      "duration"     : 442,
      "file"         : "tracks_folder/Sympathy For The Devil.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Brown Sugar",
      "duration"     : 350,
      "file"         : "tracks_folder/Brown sugar.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },




    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Jumping Jack Flash",
      "duration"     : 337,
      "file"         : "tracks_folder/Jumpin Jack Flash.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "(I Can’t Get No) Satisfaction",
      "duration"     : 402,
      "file"         : "tracks_folder/Satisfaction.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Highwire",
      "duration"     : 445,
      "file"         : "tracks_folder/highwire.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[0]._id,
      "name"         : "Sex Drive",
      "duration"     : 428,
      "file"         : "tracks_folder/Sex Drive.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 29 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
/////////////////////       Songs of Love You Live (Rolling Stones)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Little Red Rooster",
      "duration"     : 303,
      "file"         : "tracks_folder/Little Red Rooster.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Brown Sugar",
      "duration"     : 350,
      "file"         : "tracks_folder/Brown sugar.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[1]._id,
      "name"         : "Happy",
      "duration"     : 304,
      "file"         : "tracks_folder/Happy.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

/////////////////////       Songs of Live Licks (Rolling Stones)   ////////////////////////


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Start Me Up",
      "duration"     : 329,
      "file"         : "tracks_folder/Start me up.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[2]._id,
      "name"         : "Angie",
      "duration"     : 431,
      "file"         : "tracks_folder/Angie.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

/////////////////////       Songs of Hyde Park Live (Rolling Stones)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Start Me Up",
      "duration"     : 329,
      "file"         : "tracks_folder/Start me up.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Ruby Tuesday",
      "duration"     : 317,
      "file"         : "tracks_folder/Ruby Tuesday.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Doom And Gloom",
      "duration"     : 408,
      "file"         : "tracks_folder/Doom And Gloom.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Paint It Black",
      "duration"     : 345,
      "file"         : "tracks_folder/Paint It Black.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[0]._id,
      "album"        : albums.data[3]._id,
      "name"         : "Miss You",
      "duration"     : 333,
      "file"         : "tracks_folder/Miss You.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

///////////////////       Songs of Highway To Hell (AC/DC)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Highway To Hell",
      "duration"     : 328,
      "file"         : "tracks_folder/Highway to Hell.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Girls Got Rhythm",
      "duration"     : 326,
      "file"         : "tracks_folder/Girls Got Rhythm.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Walk All Over You",
      "duration"     : 511,
      "file"         : "tracks_folder/Walk All Over You.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Touch Too Much",
      "duration"     : 426,
      "file"         : "tracks_folder/Touch Too Much.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Beating Around The Bush",
      "duration"     : 404,
      "file"         : "tracks_folder/Beating Around the Bush.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Shot Down In Flames",
      "duration"     : 325,
      "file"         : "tracks_folder/Shot Down In Flames.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Get It Hot",
      "duration"     : 239,
      "file"         : "tracks_folder/Get It Hot.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "If You Want Blood (You've Got It)",
      "duration"     : 429,
      "file"         : "tracks_folder/If You Want Blood (You Got It).mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[4]._id,
      "name"         : "Love Hungry Man",
      "duration"     : 426,
      "file"         : "tracks_folder/Love Hungry Man.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

///////////////////       Songs of High Voltage (AC/DC)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "It's A Long Way To The Top (If You Wanna Rock 'N' Roll)",
      "duration"     : 515,
      "file"         : "tracks_folder/It's A Long Way To The Top (If You Wanna Rock 'N' Roll).mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "Rock 'N' Roll Singer",
      "duration"     : 504,
      "file"         : "tracks_folder/Rock 'N' Roll Singer.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "T.N.T.",
      "duration"     : 335,
      "file"         : "tracks_folder/TNT.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[5]._id,
      "name"         : "High Voltage",
      "duration"     : 403,
      "file"         : "tracks_folder/High Voltage.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


///////////////////       Songs of The Razor's Edge (6) (AC/DC (1))   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Thunderstruck",
      "duration"     : 454,
      "file"         : "tracks_folder/Thunderstruck.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Fire Your Guns",
      "duration"     : 254,
      "file"         : "tracks_folder/Fire Your Guns.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Moneytalks",
      "duration"     : 347,
      "file"         : "tracks_folder/Money Talks.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "The Razor's Edge",
      "duration"     : 423,
      "file"         : "tracks_folder/The  Razors Edge.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Mistress For Christmas",
      "duration"     : 400,
      "file"         : "tracks_folder/Mistress For Christmas.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Shot Of Love",
      "duration"     : 357,
      "file"         : "tracks_folder/Shot Of Love.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Let's Make It",
      "duration"     : 333,
      "file"         : "tracks_folder/Lets Make It.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[1]._id,
      "album"        : albums.data[6]._id,
      "name"         : "Goodbye And Good Riddance To Bad Luck",
      "duration"     : 318,
      "file"         : "tracks_folder/2.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


///////////////////       Songs of Showbiz (7) (Muse - nr.2)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[7]._id,
      "name"         : "Unintended",
      "duration"     : 356,
      "file"         : "tracks_folder/Unintended.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

///////////////////       Songs of Origin Of Symmetry (8) (Muse - nr.2)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "New Born",
      "duration"     : 439,
      "file"         : "tracks_folder/New Born.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Bliss",
      "duration"     : 429,
      "file"         : "tracks_folder/Bliss.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Dark Shines",
      "duration"     : 449,
      "file"         : "tracks_folder/Darkshines.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[8]._id,
      "name"         : "Feeling Good",
      "duration"     : 321,
      "file"         : "tracks_folder/Feeling Good.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


///////////////////       Songs of Hullabaloo (9) (Muse - nr.2)   ////////////////////////


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "The Gallery",
      "duration"     : 406,
      "file"         : "tracks_folder/The Gallery.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "Dark Shines",
      "duration"     : 449,
      "file"         : "tracks_folder/Darkshines.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[9]._id,
      "name"         : "In Your World",
      "duration"     : 230,
      "file"         : "tracks_folder/In Your World.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


///////////////////       Songs of Absolution (10) (Muse - nr.2)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Apocalypse Please",
      "duration"     : 416,
      "file"         : "tracks_folder/Apocalypse Please.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Time Is Running Out",
      "duration"     : 405,
      "file"         : "tracks_folder/Time Is Running Out.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Sing For Absolution",
      "duration"     : 458,
      "file"         : "tracks_folder/Sing for Absolution.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Hysteria",
      "duration"     : 347,
      "file"         : "tracks_folder/Hysteria.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[10]._id,
      "name"         : "Ruled by Secrecy",
      "duration"     : 445,
      "file"         : "tracks_folder/Ruled by Secrecy.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },



///////////////////       Songs of Back Hotels and Revelations (11) (Muse - nr.2)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Starlight",
      "duration"     : 401,
      "file"         : "tracks_folder/Starlight.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Supermassive Black Hole",
      "duration"     : 330,
      "file"         : "tracks_folder/Supermassive Black Hole.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[11]._id,
      "name"         : "Knights Of Cydonia",
      "duration"     : 607,
      "file"         : "tracks_folder/Knights of Cydonia.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


///////////////////       Songs of HAARP (12) (Muse - nr.2)   ////////////////////////


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Hysteria",
      "duration"     : 347,
      "file"         : "tracks_folder/Hysteria.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[12]._id,
      "name"         : "Starlight",
      "duration"     : 401,
      "file"         : "tracks_folder/Starlight.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

///////////////////       Songs of The Resistance (13) (Muse - nr.2)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[13]._id,
      "name"         : "Resistance",
      "duration"     : 524,
      "file"         : "tracks_folder/Resistance.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[13]._id,
      "name"         : "I Belong to You",
      "duration"     : 539,
      "file"         : "tracks_folder/I Belong to You.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


///////////////////       Songs of The 2nd Law (14) (Muse - nr.2)   ////////////////////////
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Supremacy",
      "duration"     : 456,
      "file"         : "tracks_folder/Supremacy.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Prelude",
      "duration"     : 59,
      "file"         : "tracks_folder/Prelude.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[2]._id,
      "album"        : albums.data[14]._id,
      "name"         : "Follow Me",
      "duration"     : 352,
      "file"         : "tracks_folder/Follow me.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Apr 11 1988 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


///////////////////       Songs of Dal Inferno (15) (Marco Mengoni - nr.3)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[3]._id,
      "album"        : albums.data[15]._id,
      "name"         : "Dal Inferno",
      "duration"     : 412,
      "file"         : "tracks_folder/Dall'Inferno.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

///////////////////       Songs of Sheer Heart Attack (16) (Queen - nr.4)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[16]._id,
      "name"         : "Misfire",
      "duration"     : 151,
      "file"         : "tracks_folder/Misfire.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Sep 24 1990 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

///////////////////       Songs of Return Of The Champions (17) (Queen - nr.4)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "I Want To Break Free",
      "duration"     : 424,
      "file"         : "tracks_folder/I Want to Break Free.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Fat Bottomed Girls",
      "duration"     : 417,
      "file"         : "tracks_folder/Fat bottomed girls by queen.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "Radio Ga Ga",
      "duration"     : 549,
      "file"         : "tracks_folder/Radio Ga Ga.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "I Want It All",
      "duration"     : 437,
      "file"         : "tracks_folder/I Want It All.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "The Show Must Go On",
      "duration"     : 415,
      "file"         : "tracks_folder/The Show Must Go On..mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "We Will Rock You ",
      "duration"     : 206,
      "file"         : "tracks_folder/We will rock you.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[17]._id,
      "name"         : "We Are The Champions",
      "duration"     : 306,
      "file"         : "tracks_folder/We Are The Champions.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Fri Jul 27 1984 00:00:00 GMT+0200 (CEST)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },


///////////////////       Songs of At The Beeb (18) (Queen - nr.4)   ////////////////////////


    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[18]._id,
      "name"         : "Keep Yourself Alive",
      "duration"     : 357,
      "file"         : "tracks_folder/Keep Yourself Alive.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

///////////////////       Songs of Rock Montreal (19) (Queen - nr.4)   ////////////////////////

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "We Will Rock You",
      "duration"     : 206,
      "file"         : "tracks_folder/We will rock you.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Somebody to Love",
      "duration"     : 436,
      "file"         : "tracks_folder/Somebody To Love.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Killer Queen",
      "duration"     : 303,
      "file"         : "tracks_folder/Killer Queen.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Save Me",
      "duration"     : 402,
      "file"         : "tracks_folder/Save Me.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Love Of My Life",
      "duration"     : 333,
      "file"         : "tracks_folder/Love of my life.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Crazy Little Thing Called Love",
      "duration"     : 245,
      "file"         : "tracks_folder/Crazy Little Thing Called Love.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Jailhouse Rock",
      "duration"     : 234,
      "file"         : "tracks_folder/Jailhouse Rock.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
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
      "vote"         : 1
    },

    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "Another One Bites The Dust",
      "duration"     : 332,
      "file"         : "tracks_folder/Another One Bites the Dust.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "We Will Rock You",
      "duration"     : 206,
      "file"         : "tracks_folder/We Will Rock You.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    },
    {
      "_id"          : ObjectId(),
      "artist"       : artists.data[4]._id,
      "album"        : albums.data[19]._id,
      "name"         : "We Are The Champions",
      "duration"     : 306,
      "file"         : "tracks_folder/We Are The Champions.mp3",
      "id3Tags"      : "",
      "dateReleased" : "Mon Feb 24 1986 00:00:00 GMT+0100 (CET)",
      "dateCreated"  : "Sat Sep 27 2014 10:26:46 GMT+0200 (CEST)",
      "vote"         : 1
    }
  ]
};

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
};

var seedData = [];
seedData.push(artists);
seedData.push(albums);
seedData.push(tracks);
seedData.push(users);

module.exports = seedData;
