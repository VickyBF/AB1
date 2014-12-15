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
require('express-session');

// Connect to MongoDB here
var mongoose   = require('mongoose');
mongoose.connect(config.mongoUrl + config.mongoDbName);


 // --------------- USER PART --------------------\\
var User = mongoose.model('User');


//passport
passport.use(new LocalStrategy({
        usernameField:'userName',
        passwordField:'password'

    },
    function(username, password, done) {
        User.findOne({userName: username}, function (err, user) {
            if (err) { return done(err); }
            // Return an error as in Node
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
                // If user does not exist return the error and the message
            }
            user.isValidPassword(password, function(err,isMatch){
                if (isMatch==true){
                    return done(null, true);
                    // Authentication is good, the password is valid
                }else{
                    return done(null, false, {message:"Incorrect password! "})
                }
            });
        });
    }
));

passport.serializeUser(function(users, done) {
    done(null, 0);
    // Invoke passport with user._id authenticated
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        // Deserializza e cerca attraverso l'id
        done(err, user);
    });
});

//passport.isAuthenticated(function(req, res, next){
//    if (req.isAuthenticated()){
//        return next();
//    }else {
//        res.redirect('/');
//    }
//});

// --------------- EDN USER PART --------------------\\

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

// Initialize routers here

var routers = require('./routes/routers');
app.use('/', routers.root);
app.use('/albums', routers.albums);
app.use('/artists', routers.artists);
app.use('/tracks', routers.tracks);
app.use('/users', routers.users);

 // USER
app.use('/signup', routers.signup);
app.use('/library', routers.library);


//app.get('/login',function(req,res){
//    res.render('login')
//});

//app.post('/login',
//    passport.authenticate('local', { successRedirect: '/library',
//        failureRedirect: '/' }));


app.post('/login', function(req,res, next){

    passport.authenticate('local', function(err, user){
        if (err) { return next(err); }
        if (!user) { return res.render('signup'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/library?' + stringify(user.name));
        });
    })(req, res, next);
    passport.authenticate('local', { successRedirect: '/library',
        failureRedirect: '/login'})
});



var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
};


app.get('/library', isAuthenticated, function(req, res, next){
    res.render('library', {user: req.user});
    console.log('sei nel app.js  app.get function server side!');
});



// END USER
module.exports = app;