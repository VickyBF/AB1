var config = require('./config');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var dustjs = require('adaro');
var app = express();
var multer  = require('multer');
var passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
var mongoose   = require('mongoose');
require('./models');
var session = require('express-session');

// Connect to MongoDB here
var mongoose   = require('mongoose');
mongoose.connect(config.mongoUrl + config.mongoDbName);
//passport


/*--- Configure the multer. used to upload the track from our pc on the server ---*/
app.use(multer({ dest: './public/tracks_folder/',
    rename: function (fieldname, filename) {
        return filename;
    }
}));

// Register model definition here
require('./models');

// dustjs view engine setup
app.engine('dust', dustjs.dust());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'dust');

// USER
app.use(passport.initialize());
app.use(passport.session());

//configure app
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json());    // parse application/json
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'secret'}));
// Initialize routers here

var routers = require('./routes/routers');
app.use('/', routers.root);
app.use('/albums', routers.albums);
app.use('/artists', routers.artists);
app.use('/tracks', routers.tracks);
app.use('/users', routers.users);
app.use('/login',routers.login);



app.use('/signup', routers.signup);
app.use('/library', routers.library);



module.exports = app;